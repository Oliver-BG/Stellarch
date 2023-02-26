from django.shortcuts import render
from django.views.generic import ListView
from .models import Project


# Create your views here.

def home_page_view(request):
    return render(request, 'home/home.html')

def profile_page_view(request):
    return render(request, 'profile/profile_detail.html')

def service_page_view(request):
    return render(request, 'service/service_detail.html')

class ResProjectPageView(ListView):
    template_name = 'project/res-project.html'
    model = Project


