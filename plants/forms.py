# plants/forms.py

from django import forms
from .models import PlantImage

class PlantImageForm(forms.ModelForm):
    class Meta:
        model = PlantImage
        fields = ['image']
