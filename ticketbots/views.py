from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from .models import TicketTable
from .forms import TicketForm

def index(request):
    return render(request, 'ticketbots/index.html')
@login_required
def tickets(request):
    tickets = TicketTable.objects.all()
    context = {'tickets':tickets}
    return render(request, 'ticketbots/tickets.html',context)
@login_required
def ticket(request,ticket_id):
    ticket = TicketTable.objects.get(id=ticket_id)
    context = {'ticket':ticket}
    return render(request,'ticketbots/ticket.html',context)
@login_required
def edit_ticket(request,ticket_id):
    ticket = TicketTable.objects.get(id=ticket_id)
    if request.method != 'POST':
        form = TicketForm(instance=ticket)
    else:
        form = TicketForm(instance=ticket,data=request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('ticketbots:ticket',args=[ticket.id]))
    context = {'ticket':ticket,'form':form}
    return render(request, 'ticketbots/edit_ticket.html',context)