from django.urls import path
from .views import *

app_name = 'user'
urlpatterns = [
    path('', AccountView.as_view(), name='get'),
    path('create/', AccountCreateView.as_view(), name='create'),
]
