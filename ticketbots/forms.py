from django import forms
from .models import TicketTable

class TicketForm(forms.ModelForm):
    class Meta:
        model = TicketTable
        fields = ['event_name','day','month','year','time','phone_num','artiste','venue','price','scrape_link','summary']
        labels = {'event_name':'Event Name','day':'Day','month':'Month','year':'Year','time':'Time','phone_num':'Phone Number','artiste':'Artiste','venue':'Venue','price':'Price','scrape_link':'Scrape Link','summary':'Summary'}
        