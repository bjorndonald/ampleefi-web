import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','ticketbot_project.settings')
import django
django.setup()
from ticketbots.models import TicketTable
import csv
import sys
#****************************
#WRONG: THE BELOW CODE SHOULD NOT BE RUN AS IT DELETES ALL COLLATED DATA
#Clear all contents of TicketTable before adding new contents
#TicketTable.objects.all().delete()
#****************************
with open(sys.argv[1],'r',encoding="utf-8") as file:
    reader = csv.reader(file)
    heading = next(reader)
    previous_enames = [t.event_name for t in TicketTable.objects.all()]
    new_enames = [r[0] for r in reader]
    no_longer_count = 0
    already_exist_count = 0
    new_count = 0
    for name in previous_enames:
        if name not in new_enames:
            t = TicketTable.objects.get(event_name=name)
            t.delete()
            no_longer_count += 1
    file.seek(0)
    reader = csv.reader(file)
    heading = next(reader)
    for ename,d,m,y,t,phone,art,ven,pric,summ,scrap in reader:
        if ename in previous_enames:
            already_exist_count += 1
            continue
        ticket = TicketTable(event_name=ename,day=d,month=m,year=y,time=t,phone_num=phone,artiste=art,venue=ven,price=pric,scrape_link=scrap,summary=summ)
        ticket.save()
        new_count += 1
    print('\t\t-- Update Summary --')
    print(f'When attempting to add {len(new_enames)} events...')
    print(f'{already_exist_count} already existed')
    print(f'{no_longer_count} were no longer hosted')
    print(f'{new_count} were added')