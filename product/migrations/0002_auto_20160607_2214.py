# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-06-07 19:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='pruduct_slug',
            field=models.SlugField(),
        ),
    ]