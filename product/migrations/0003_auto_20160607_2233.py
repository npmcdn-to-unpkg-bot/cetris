# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-06-07 19:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_auto_20160607_2214'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='pruduct_slug',
            field=models.SlugField(unique=True),
        ),
    ]
