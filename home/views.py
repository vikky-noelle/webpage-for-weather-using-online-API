import requests
import urllib.request
import json
from django.shortcuts import render

from django.http import HttpResponse, Http404, HttpResponseRedirect, JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse, reverse_lazy

# Create your views here.
def index(request):
    response = urllib.request.urlopen('http://api.openweathermap.org/data/2.5/weather?lat=23.20&lon=77.08&APPID=YOUR_ID')
    jsonResponse = json.load(response)
    temp = jsonResponse.get('main',{}).get('temp',{})-273.15
    pres = jsonResponse.get('main',{}).get('pressure',{})
    humidity = jsonResponse.get('main',{}).get('humidity',{})
    clouds = jsonResponse.get('clouds',{}).get('all',{})
    wind = jsonResponse.get('wind',{}).get('speed',{})
    args = {'temp': temp, 'pressure': pres, 'humidity': humidity, 'clouds': clouds, 'wind': wind }
    return render(request, "home/index.html", args)
