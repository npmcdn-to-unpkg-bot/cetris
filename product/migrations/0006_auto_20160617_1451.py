# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-06-17 11:51
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0005_instructions'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='instructions',
            options={'verbose_name': 'Instrukcija'},
        ),
    ]
