from django.conf.urls import url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', "product.views.product", name="products"),
    url(r'^about/', "product.views.about", name="about"),
    url(r'^contacts/', "product.views.contact", name="contacts"),
    url(r'^references/', "product.views.references", name="references"),
    url(r'^calculator/', "product.views.calculator", name="calculator"),
    url(r'^instruction/', "product.views.instruction", name="instruction"),
    url(r'^product/get/(?P<product_id>\d+)/$',"product.views.productGet", name="product")
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)