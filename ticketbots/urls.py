from django.conf.urls import url
from . import views

urlpatterns = [url(r'^$', views.index, name='index'),
               url(r'^tickets/$', views.tickets, name='tickets'),
               url(r'^tickets/(?P<ticket_id>\d+)/$', views.ticket, name='ticket'),
               url(r'^edit_ticket/(?P<ticket_id>\d+)/$', views.edit_ticket, name='edit_ticket')
               ]