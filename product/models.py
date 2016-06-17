from django.db import models
from django.db.models.signals import pre_save
from django.utils.text import slugify

class Product(models.Model):
    class Meta:
        db_table = "Mūsu produkti"
        verbose_name = "Mūsu produkti"
        verbose_name_plural = "Mūsu produkti"

    product_time = models.DateTimeField(auto_now=False, auto_now_add=True, verbose_name="Pievienots")
    product_updated = models.DateTimeField(auto_now=True, auto_now_add=False, verbose_name="pēdējo reizi labots")
    product_title = models.CharField(max_length=120, verbose_name="Produkta nosaukums")
    product_content = models.TextField(verbose_name="Apraksts")
    # pruduct_slug = models.SlugField(unique=True)
    product_rules1 = models.CharField(verbose_name="1. Uzstādīšanas nosacījums", max_length=250, blank=True)
    product_rules2 = models.CharField(verbose_name="2. Uzstādīšanas nosacījums", max_length=250, blank=True)
    product_rules3 = models.CharField(verbose_name="3. Uzstādīšanas nosacījums", max_length=250, blank=True)
    product_rules4 = models.CharField(verbose_name="4. Uzstādīšanas nosacījums", max_length=250, blank=True)
    product_rules5 = models.CharField(verbose_name="5. Uzstādīšanas nosacījums", max_length=250, blank=True)
    product_data = models.FileField(upload_to="pdf", verbose_name="Detalizēta informācija (PDF)", blank=True)
    product_images = models.ImageField(upload_to="img", verbose_name="Attēls 1", blank=True)
    product_images2 = models.ImageField(upload_to="img", verbose_name="Attēls 2", blank=True)
    product_images3 = models.ImageField(upload_to="img", verbose_name="Attēls 3", blank=True)
    product_images4 = models.ImageField(upload_to="img", verbose_name="Attēls 4", blank=True)
    product_joice = (
        ("Sienas", "Sienas"),
        ("Fasādes", "Fasādes"),
        ("Grīdas", "Grīdas"),
        ("Jumti", "Jumti"),
        ("Ugunsdrošība", "Ugunsdrošība"),
        ("Balkoni", "Balkoni"),
        ("Pamati un cokols", "Pamati un cokols"),
        ("Hobijs", "Hobijs"),
        ("Ceļu konstrukcijas", "Ceļu konstrukcijas"),
        ("Individuālie risinājumi", "Individuālie risinājumi"),
    )
    product_category = models.CharField(max_length=30, choices=product_joice, verbose_name="Izvēlēties kategoriju 1", blank=False)
    product_category2 = models.CharField(max_length=30, choices=product_joice, verbose_name="Izvēlēties kategoriju 2", blank=True)
    product_category3 = models.CharField(max_length=30, choices=product_joice, verbose_name="Izvēlēties kategoriju 3", blank=True)
    product_category4 = models.CharField(max_length=30, choices=product_joice, verbose_name="Izvēlēties kategoriju 4", blank=True)
    product_category5 = models.CharField(max_length=30, choices=product_joice, verbose_name="Izvēlēties kategoriju 5", blank=True)
    product_category6 = models.CharField(max_length=30, choices=product_joice, verbose_name="Izvēlēties kategoriju 6", blank=True)
    product_category7 = models.CharField(max_length=30, choices=product_joice, verbose_name="Izvēlēties kategoriju 7", blank=True)
    product_category8 = models.CharField(max_length=30, choices=product_joice, verbose_name="Izvēlēties kategoriju 8", blank=True)
    product_category9 = models.CharField(max_length=30, choices=product_joice, verbose_name="Izvēlēties kategoriju 9", blank=True)
    product_category10 = models.CharField(max_length=30, choices=product_joice, verbose_name="Izvēlēties kategoriju 10", blank=True)

class References(models.Model):
    class Meta:
        db_table = "References"
        verbose_name = "Galerija"
        verbose_name_plural = "Galerija"

    references_time = models.DateTimeField(auto_now=False, auto_now_add=True, verbose_name="Pievienots")
    references_updated = models.DateTimeField(auto_now=True, auto_now_add=False, verbose_name="pēdējo reizi labots")
    references_image = models.ImageField(upload_to="img", verbose_name="Izvēlēties attēlu")
    image_joice = (
        ("Privātmājas", "Privātmājas"),
        ("Dzīvojamās mājas", "Dzīvojamās mājas"),
        ("Komercbūves", "Komercbūves"),
        ("Industriālās būves", "Industriālās būves"),
        ("Pamati un cokols", "Pamati un cokols"),
        ("Balkoni", "Balkoni"),
        ("Pamatnes", "Pamatnes"),
        ("Individuālie risinājumi", "Individuālie risinājumi"),
    )
    image_category = models.CharField(max_length=30, choices=image_joice, verbose_name="Izvēlēties kategoriju")

class Instructions(models.Model):
    class Meta:
        db_table = "Instructions"
        verbose_name = "Instrukcija"

    instruction_category_choice = (
        ("cat1", "Garantijas noteikumi"),
        ("cat2", "Plākšņu montāžas instrukcijas un pielietojumi"),
        ("cat3", "Plākšņu sertifikāti un ekspluatācijas īpašību deklerācijas")
    )

    instruction_time = models.DateTimeField(auto_now=False, auto_now_add=True, verbose_name="Pievienots")
    instruction_updated = models.DateTimeField(auto_now=True, auto_now_add=False, verbose_name="pēdējo reizi labots")
    instruction_name = models.CharField(max_length=150, verbose_name="Instrukcijas nosaukums")
    instruction_category = models.CharField(max_length=150, choices=instruction_category_choice, verbose_name="Izvēlēties kategoriju")
    instruction_data = models.FileField(upload_to="pdf", verbose_name="Instrukcija (PDF)", blank=True)



# def create_slug(instance, new_slug=None):
#     slug = slugify(instance.product_title)
#     if new_slug is not None:
#         slug = new_slug
#     qs = Product.objects.filter(slug=slug).order_by("-id")
#     exists = qs.exists()
#     if exists:
#         new_slug = "%s-%s" %(slug, qs.first().slug)
#         return create_slug(instance, new_slug=new_slug)
#     return slug
#
# def pre_save_product_receiver(sender, instance, *args, **kwargs):
#     if not instance.slug:
#         instance.slug = create_slug(instance)