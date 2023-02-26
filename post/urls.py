from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page_view, name= 'home'),
    path('resproject/', views.ResProjectPageView.as_view(), name ='res-project'),
    path('profile/', views.profile_page_view, name = 'profile_detail'),
    path('service/',views.service_page_view, name = 'service_detail'),
]