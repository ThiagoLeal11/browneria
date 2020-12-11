from django.urls import path
from .views import *

app_name = 'product'
urlpatterns = [
    path('', ProductListCreateView.as_view(), name='list-create'),
    path('detail/<uuid:product_id>/', ProductDetailUpdateView.as_view(), name='detail-update'),
]
