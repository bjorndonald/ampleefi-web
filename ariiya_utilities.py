# -*- coding: utf-8 -*-
import re
import requests
import time
from lxml.html import fromstring
#from queue import Queue
import csv
'''
RUN WITH ipython to avoid __init__() error ?????
CONSULT CH14 OF WS-LOOKING LIKE A HUMAN BEFORE FURTHER SCRAPING AND CRAWLING
 USING COOKIES HEADERS THE HUMAN CHECKLIST AND PROPER TIMING

Add user agent +
Throttle downloads +
Threaded approach -
Sync queue access -
Time taken record +
handle exceptions |
Consult ch14 of WS-Looking like a Human before further scraping and crawling
request header for looking human:
headers = {'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5)'
'AppleWebKit 537.36 (KHTML, like Gecko) Chrome',
'Accept':'text/html,application/xhtml+xml,application/xml;'
'q=0.9,image/webp,*/*;q=0.8'}
'''
headers = {'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5)'
'AppleWebKit 537.36 (KHTML, like Gecko) Chrome',
'Accept':'text/html,application/xhtml+xml,application/xml;'
'q=0.9,image/webp,*/*;q=0.8'}
THROTTLE_COUNT = 2
event_selector = '//div[@class="tribe-events-single-event-description tribe-events-content"]'
#caution using the BELOW codes contain unicode strings which will cause error when attempting storage: 'charmap' codec can't encode character '\u20a6' in position 494: character maps to <undefined> occured when processing 
#..................set encoding to utf-8 when opening the csv file for writing if you must use them
event_selector2 = '//div[@class="tribe-events-meta-group tribe-events-meta-group-details"]'
event_selector3 = '//span[@class="event_schedule_detail"]'
#***************get top events
def get_page(url='https://www.ariiyatickets.com/events',wait_time=THROTTLE_COUNT, MAX_RETRIES = 4):
    tries = 0
    while True:
        try:
            time.sleep(wait_time)
            tries += 1
            html = requests.get(url, headers=headers)
            html = html.text
            print(f'Contents of "{url}" retrieved')
            break
        except IndexError as e: #handle exception of page no longer existing separately e.g with specific no of tries after which program returns -1
            print('Network error:',e)
            if tries == MAX_RETRIES:
                print(f'Maximum Retries {{{MAX_RETRIES}}} reached. Exitting...')
                return '-1'
            print('Retrying...')
    return html
        
#tree.fromstring(html)
def filter_links(html, fname='ariiya_top_events.txt',shouldStore=True):
    web_regex = re.compile("""<a[^>]+href=["'](.*?)["']""",re.IGNORECASE)
    links_gotten = web_regex.findall(html)
    filtered_links = []
    for link in list(set(links_gotten)):#eliminate duplicate links
        if re.search('/(event)/',link):
            filtered_links += [link]
    print(len(filtered_links),'links retrieved')
    if shouldStore:
        with open(fname,'w') as file:
            for link in filtered_links: 
                if re.search('/(event)/',link):
                    print(link,end='\n',file=file)
        print(len(filtered_links),'stored in',fname)
    return filtered_links        


#************get info on a particular event
#html = requests.get('https://www.ariiyatickets.com/event/miss-ambassador-for-peace-africa-2019/', headers=headers).text
def get_info_from_page(html,selectors=[event_selector,event_selector2,event_selector3], display=False):
    tree = fromstring(html)
    info = []
    for selector in selectors:
        info += tree.xpath(selector)
    
    info_list = []
    for data in info:
        if display:
            print(data.text_content())
        info_list += [data.text_content()]
        #store each data.text_content() from <p> tags in a particular index of a list and use NLP to know which of these correspond to the categories to scrape, then clean out stopwords and other outliers and store formatted data in a csv file 
    price_selector = '//table[@class="tribe-events-tickets"]'
    info_list += ['--PRICES: '+tree.xpath(price_selector)[0].text_content()] #only prices after '--PRICES: ' are considered
    return info_list

#request for particular event's page
def get_event_page(event_name,default_url='https://www.ariiyatickets.com/event/'):
    #event_name = 'lagos fest'.replace(' ','+')
    #html = requests.get(('https://www.ariiyatickets.com/events/?tribe_paged=1&tribe_event_display=list&tribe-bar-search='+event_name), headers=headers).text
    #OR faster alternative which links you directly to the event's page for data scraping
    event_name = event_name.replace(' ','-')
    html = get_page(str(default_url+event_name+'/'))
    return html
    #OR even better, have a link rel to the link the bot info for that info was scraped from in the first place stored in the bot table and simply let the bot visit that link when its time to buy the ticket
    #scrape content
def single_threaded_scrape():
    html = get_page(wait_time=3)
    if html == '-1':
        return
    links = filter_links(html, shouldStore=False)
    current_time = time.ctime(time.time())
    current_date = '_'.join(current_time.split()[:3])
    fname = 'ariiya_scrape_'+current_date +'_'+time.ctime(time.time()).split()[-1]+'.csv'
    with open(fname,'w', newline='', encoding="utf-8") as file: #format of storage needs improvement
        writer = csv.writer(file)
        writer.writerow(['Event Link','Content'])
        #c = 0
        for link in links:
            try:
                print('Retrieving info from ',link)
                writer.writerow([link,str(' '.join(' '.join(get_info_from_page(get_page(link,wait_time=3))).split())).replace(',','').lstrip().rstrip()]) #.replace('\n',' ').replace('\t',' ')
                #print(link,':\t',get_info_from_page(get_page(link,wait_time=3)),end='\n',file=file)
            except Exception as e:
                print(e,'occured when processing',link)
        print(f'Info from {len(links)} links stored in {fname}')
    
if __name__ == '__main__':
    #single threaded scrape demonstration
    start_time = time.time()
    single_threaded_scrape()
    end_time = time.time() - start_time
    print(f'Finished operations in {end_time:.2f} seconds')
    '''
    commaCount = 0
    with open('ariiya_test_scrape.txt','r') as file:
         for line in file:
             if not line.count(','):
                 print('No comma on line:\n',line)           
             else:
                 commaCount += line.count(',')
    print('no of commas:',commaCount)
    
    with open('ariiya_test_scrape.txt','r') as ofile:
        with open('fariiya_test_scrape.txt','w') as nfile:
            #writer = csv.writer(nfile)
            #writer.writerow(['Link','Content'])
            for line in ofile:
                try:
                    line = line.replace('"','').replace("'",'').replace(r'\n','').replace(r'\t','').replace(']','').replace('[','').replace(',',' ')
                    line = line.split('*')
                    #print(len(line))
                    if len(line) == 2:
                        line = ','.join(line)
                        print(line,file=nfile,end='')
                except Exception:
                    print('\n\tproblem with',line)
            print('csv updated!')
    '''
    '''
    with open('ariiya_ts.csv','w') as ofile:
        with open('ariiya_test_scrape.csv','r') as nfile:
            writer = csv.writer(ofile)
            reader = csv.reader(nfile)
            writer.writerow(['Link','Content'])
            for line in reader:
                try:
                    #line = line.split(',')
                    writer.writerow([line[0].replace(',',''),line[1].replace(r'"','').replace(r"'",'').replace(',','')])
                except Exception:
                        pass#print(line,'\nnot stored for having',len(line.split(',')),'columns')
    '''
     
            
        