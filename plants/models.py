# plants/models.py

from django.db import models

class Plant(models.Model):
    scientific_name = models.CharField(max_length=255)
    local_name = models.CharField(max_length=255)
    medicinal_benefits = models.TextField()

    def __str__(self):
        return self.scientific_name

class PlantImage(models.Model):
    image = models.ImageField(upload_to='plants/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Image uploaded at {self.uploaded_at}'
