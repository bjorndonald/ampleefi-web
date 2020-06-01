# -*- coding: utf-8 -*-
import re
import csv 
import time
#from nltk.corpus import stopwords
import spacy
#from textblob import TextBlob
import sys
from ariiya_summary_gen import gen_summary

nlp = spacy.load('en_core_web_sm')

#remove prices, dates, year, month and stopwords from the content and reduce to lower case before further processing
#spaCy for venue and performing artistes -
#re for prices, date(s), year +
#string manip for month, event name gotten from link +
#time ??????????? try re.compile(r'(\d*:?\d+[apm]+)',re.IGNORECASE +

#stop_words = stopwords.words('english')
months = ['January','February','March','April','May','June','July','August','September','October','November','December']
months = list(map(lambda m : m.lower(), months)) #return all months in lowercase

with open(sys.argv[1],'r', encoding="utf-8") as file:
    reader = csv.reader(file)
    #header = next(reader)
    formatted = 0 #number of links with complete information
    link_count = 0 #total no of link in file
    start_time = time.time()
    heading = next(reader)
    fname = 'table_'+'_'.join(time.ctime(time.time()).split()[:3])+'_'+time.ctime(time.time()).split()[-1]+'.csv'
    with open(fname,'w', encoding="utf-8", newline='') as fh:
        writer = csv.writer(fh)
        writer.writerow(['Event Name','Day','Month','Year','Time','Phone Number','Artiste','Venue','Price','Summary','Scrape Link'])
        for link,content in reader:
            link_count += 1
            
            #if 'RUGGED' not in content:
            #    continue
          
            #content = content.replace('.','') #remove . for further processing
            content = content.replace('JavaScript','')
            document = nlp(content)
            #for entity in document.ents:
            #    print(f'{entity.text}: {entity.label_}')
            event_name = link.split('/')[-2].replace('-',' ') #get event name from link 
            event_name = list(map(lambda name : name.capitalize(), event_name.split()))
            event_name = ' '.join(event_name)
            
            prices = re.compile(r'[N|NGN|#|\s]?(\d{3,})', re.IGNORECASE).findall(content[content.index('--PRICES: '):]) #get prices starting with N,NGN or # and are minimum of 3 digits e.g #500
            prices += re.compile(r'\d+k',re.IGNORECASE).findall(content) #also check for prices like 50K
            prices = list(set(prices)) #return only unique values
            prices = list(map(lambda x : x.lower(), prices))
            prices = list(map(lambda x : x.replace('k','000'), prices))
            prices = list(filter(lambda x: 3 <= len(x) and x.endswith('0'), prices)) #price must be greater than 990 naira
            prices = list(set(prices))
            prices = list(filter(lambda p: int(p) >= 1_000, prices)) #ensure int indicating number of tickets is not considered as a price
            
            days = re.compile(r'(\d+[thsrd]+)',re.IGNORECASE).findall(content) #get days like 3rd, 30th or 21st
            days = [day.lower() for day in days if any(x.isdigit() for x in day)] #ensure only actual dates are stored
            days = list(filter(lambda x: len(x) <= 2, days))
            days = list(set(days))
            
            year = re.compile(r'20[12]\d').findall(content) #year must be >= 2019 and <= 2029
            year = year[0] if len(year) > 0 else time.ctime(time.time()).split()[-1] #if no year field is found, assuming current year is year
            
            times = re.compile(r'(\d*:?\d+\s*[apm]+[apm]+)',re.IGNORECASE).findall(content) #get time like 3:00am or 4pm
            times = list(map(lambda x: x.lower(), times))
            times = list(set(times))
            
            month = '-1'
            for m in months:
                if m in content.lower(): #get month
                    month = m
                    break
            month = month.capitalize()
            #if not days: #try getting day from near month e.g September 7 or 7 september, this is a fallback for missing fields
            s = content.split()
            try:
                index = s.index(month)
                if any(x.isdigit() for x in s[index-1]):
                    days += [s[index-1]]
                elif any(x.isdigit() for x in s[index+1]):
                    days += [s[index+1]]
                days = [] if days is None else days
            except:
                pass
                    
            phonenums = re.compile(r'\d{11}').findall(content) #get 11 digit phone number
            phonenums = list(set(phonenums))    
            
            if year in prices:
                prices.remove(year)
            for num in phonenums:
                if num in prices:
                    prices.remove(num)
            '''   
            print('Unfiltered Content','+'*80,sep='\n')
            print(content)
            print('+'*80)'''
            fill = '-'
            if len(days) > 0 and len(times) > 0 and len(prices) > 0 and month != '-1':#and year != '-1' 
                formatted += 1 #only proceed with links with completely formatted data
            else:
                fill = '*'
            
            #remove prices, dates, year, month and stopwords from the content before further processing
            pcontent = content
            content = content.lower().replace(str(year),'').replace(month.lower(),'')
            for date in days:
                content = content.replace(date,'')
            for price in prices:
                content = content.replace(price.lower(),'')
            for num in phonenums:
                content = content.replace(num,'')
            #content = list(filter(lambda word : word not in stop_words, content.split()))
            content = ' '.join(content)
            
            try:
                days.sort(key=lambda x : int(re.search(r'\d+',x).group()))
            except:
                pass
            times.sort(key=lambda x : x.lower())
            prices.sort(key=lambda x : int(x)) #needs more work, prices not sorting properly
            venues = []
            artistes = []
            
            print(fill*80,sep='\n')
            print(link,pcontent,end='\n\n')
            print(f'{"Event:":<10}',event_name)
            print(f'{"Prices:":<10}',end=' ')
            print(' '.join(prices))
            print(f'{"Days:":<10}',end=' ')
            print(' '.join(days))
            print(f'{"Month:":<10}',month)
            print(f'{"Year:":<10}',year)
            print(f'{"Times:":<10}',end=' ')
            print(' '.join(times))
            print(f'{"Phone Numbers:":<10}',end=' ')
            print(' '.join(phonenums))
            #print('Filtered content:',
            if document.ents:
                for entity in document.ents:
                    if entity.label_ in ['GPE','FAC']:
                        venues += [entity.text]
                    elif entity.label_ in ['PERSON','ORG', 'PRODUCT']:
                        artistes += [entity.text]
                print(f'{"Artistes:":<10}',end=' ')
                print(' '.join(artistes))
                print(f'{"Venues:":<10}',end=' ')
                print(' '.join(venues))
            
            print(fill*80,sep='\n')
            #print(content,end='\n')
            #print('-'*80)
            if not prices:
                prices = ['-1']
            if not days:
                days = ['-1']
            if not month:
                month = '-1'
            if not year:
                year = '-1'
            if not times:
                times = ['-1']
            if not venues:
                venues = ['-1']
            if not artistes:
                artistes = ['-1']
            ename = event_name
            price = ' '.join(prices)
            d = ' '.join(days)
            m = month
            y = year
            _time = ' '.join(times)
            artiste = ' '.join(artistes)
            venue = ' '.join(venues)
            phone_num = ' '.join(phonenums)
            writer.writerow([ename,d,m,y,_time,phone_num,artiste,venue,price,gen_summary(ename, price, d, m, y, _time, artiste, venue),link])
            print(pcontent[pcontent.index('--PRICES: '):])
        secs = time.time() - start_time
        print('Table saved to:',fname)
        print('Out of',link_count,'links, the number of links with formatted content is',formatted)
        print(f'Finished processing in {secs:.2f} secs with accuracy of {formatted/link_count:.2%}')