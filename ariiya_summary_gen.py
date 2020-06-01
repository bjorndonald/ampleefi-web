# -*- coding: utf-8 -*-

import csv

def gen_price(prices):
    if prices == '-1':
        return ''
    else:
        #naira = '₦'
        neat = list(map(lambda x: '₦'+str(x), prices.split()))
        neat = ', '.join(neat)
        return f'Prices are {neat}.'
    
def gen_artiste(artistes):
    if artistes == '-1':
        return ''
    else:
        return f'Performances by {artistes}.'

def gen_venue(venues):
    if venues == '-1':
        return ''
    else:
        return f'The Venue is {venues}.'
def gen_date(day, month, year):
    if month != '-1':
        date = f'Holding on {month}'
        if day != '-1':
            date += f' {day}, '
        else:
            date += ' '
        date += f'{year}.'
        return date
    else:
        return year+'.'
    
def gen_time(times):
    if times == '-1':
        return ''
    else:
        return f'Time is {times}.'
    
def gen_ename(event):
    if event == '-1':
        return ''
    else:
        return f'Presenting: {event}.'

def gen_summary(ename, price, d, m, y, time, artistes, venue):
    summary = gen_ename(ename)
    summary += gen_artiste(artistes)
    summary += gen_venue(venue)
    summary += gen_date(d,m,y)
    summary += gen_time(time)
    summary += gen_price(price)
    print(summary)
    return summary

if __name__ == '__main__':
    print('Test Case')
    gen_summary('Ay live in Lagos','1000 50000','30','September','2019','1:00pm 3:00pm','Burna boy, Wizkid','Victoria Island, Lagos')
    print('Generating Summaries from table in "scrape_table.csv"')
    
    with open('scrape_table.csv', 'r') as fh:
        reader = csv.reader(fh)
        heading = next(reader)
        
        for (ename, price, d, m, y, time, _, artistes, venue) in reader:
            gen_summary(ename, price, d, m, y, time, artistes, venue)
            #print('\n')