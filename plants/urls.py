# plants/urls.py

from django.urls import path
from .views import home, upload_image, result, plant_data

urlpatterns = [
    path('', home, name='home'),
    path('upload/', upload_image, name='upload_image'),
    path('result/<int:id>/', result, name='result'),
    path('api/v1/plant/<int:plant_id>/', plant_data, name='plant_data'),
]
