from django.conf.urls import url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from product import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.product),
    url(r'^about/', views.about),
    url(r'^contacts/', views.contact),
    url(r'^references/', views.references),
    url(r'^calculator/', views.calculator),
    url(r'^instruction/', views.instruction),
    url(r'^product/get/(?P<product_id>\d+)/$',views.productGet)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)