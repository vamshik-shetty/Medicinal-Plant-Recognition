# plants/views.py

from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Plant, PlantImage
from .forms import PlantImageForm

def home(request):
    return render(request, 'plants/home.html')

def upload_image(request):
    if request.method == 'POST':
        form = PlantImageForm(request.POST, request.FILES)
        if form.is_valid():
            plant_image = form.save()
            return JsonResponse({
                'success': True,
                'slug': plant_image.id,
                'imageUrl': plant_image.image.url
            })
        else:
            return JsonResponse({
                'success': False,
                'errors': form.errors
            })
    return render(request, 'plants/upload.html')

def result(request, id):
    try:
        plant_image = PlantImage.objects.get(id=id)
        return render(request, 'plants/result.html', {'imageUrl': plant_image.image.url})
    except PlantImage.DoesNotExist:
        return JsonResponse({'success': False, 'error': 'Image not found'})

def plant_data(request, plant_id):
    # Fetch the plant or return 404 if not found
    plant = get_object_or_404(Plant, id=plant_id)
    
    # Prepare the data to be returned as JSON
    data = {
        'scientificName': plant.scientific_name,
        'localName': plant.local_name,
        'features': plant.medicinal_benefits.split('\n')  # Assuming features are line-separated
    }
    
    return JsonResponse(data)
