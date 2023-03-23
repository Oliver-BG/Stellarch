from django.shortcuts import render
from django.views.generic import ListView
from .models import Project
from email_sender.forms import ContactForm


# Create your views here.

def home_page_view(request):
    form = ContactForm()
    return render(request, 'home/home.html',{
        'form' : form,
    })

def profile_page_view(request):
    return render(request, 'profile/profile_detail.html')

class ResProjectPageView(ListView):
    template_name = 'project/res-project.html'
    model = Project

class ComProjectPageView(ListView):
    template_name = 'project/com-project.html'
    model = Project



