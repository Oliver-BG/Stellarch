from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page_view, name= 'home'),
    path('resproject/', views.ResProjectPageView.as_view(), name ='res_project'),
    path('comproject', views.ComProjectPageView.as_view(), name='com_project'),
    path('profile/', views.profile_page_view, name = 'profile_detail'),
]