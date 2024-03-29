"""ticketbot_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from django.conf.urls import url, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='frontend/index.html')),
    path('list', TemplateView.as_view(template_name='frontend/index.html')),
    path('search', TemplateView.as_view(template_name='frontend/index.html')),
    path('register', TemplateView.as_view(template_name='frontend/index.html')),
    path('event', TemplateView.as_view(template_name='frontend/index.html')),
    path('movie', TemplateView.as_view(template_name='frontend/index.html')),
    path('events', TemplateView.as_view(template_name='frontend/index.html')),
    path('login', TemplateView.as_view(template_name='frontend/index.html')),
    path('account', TemplateView.as_view(template_name='frontend/index.html')),
    url(r'',include(('ticketbots.urls','ticketbots'),namespace='ticketbots')),
	url(r'^appusers/',include(('appusers.urls','users'),namespace='appusers'))
]
