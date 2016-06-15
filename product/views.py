from django.shortcuts import render
from .models import Product, References

def product(request, id=None):
    queryset = Product.objects.all()
    context = {
        "products": queryset
    }
    return render(request, "index.html", context)

def productGet(request, product_id=1):
    return render(request, "product.html", {
        "product" : Product.objects.get(id=product_id),
        "sidebar" : Product.objects.all()
    })

def about(request):
    return render(request, "parmums.html", {})

def contact(request):
    return render(request, "kontakti.html", {})

def references(request):
    gallery = References.objects.all()
    context = {
        "gallery" : gallery
    }
    return render(request, "refer.html", context)

def calculator(request):
    return render(request, "calculator.html", {})

def instruction(request):
    return render(request, "instrukcijas.html", {})