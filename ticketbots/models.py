from django.db import models
from django.contrib.auth.models import User

class TicketTable(models.Model):
    event_name = models.CharField(max_length=800)
    day = models.CharField(max_length=800)
    month = models.CharField(max_length=800)
    year = models.CharField(max_length=800)
    time = models.CharField(max_length=800)
    phone_num = models.CharField(max_length=800)
    artiste = models.CharField(max_length=800)
    venue = models.CharField(max_length=800)
    price = models.CharField(max_length=800)
    scrape_link = models.CharField(max_length=800)
    summary = models.TextField()
    #owner = models.ForeignKey(User,on_delete=models.PROTECT)
    site_name = models.CharField(max_length=800) #ariiya,nairabox, or afritickets
    class Meta:
        verbose_name_plural = 'tickets'
    def __str__(self):
        return self.event_name

