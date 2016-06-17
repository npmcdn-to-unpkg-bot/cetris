from django.contrib import admin
from .models import Product, References, Instructions

class ProductModelAdmin(admin.ModelAdmin):
    class Meta:
        model = Product

    list_display = ["product_title", "product_updated", "product_time"]
    list_filter = ["product_updated", "product_time"]


admin.site.register(Product, ProductModelAdmin)

class ReferencesModelAdmin(admin.ModelAdmin):
    class Meta:
        model = References

    list_display = ["image_category", "references_updated", "references_time"]
    list_filter = ["references_updated", "references_time"]

class InstructionsModelAdmin(admin.ModelAdmin):
    class Meta:
        model = Instructions

    list_display = ["instruction_name", "instruction_updated", "instruction_time"]
    list_filter = ["instruction_updated", "instruction_time"]

admin.site.register(References, ReferencesModelAdmin)
admin.site.register(Instructions, InstructionsModelAdmin)