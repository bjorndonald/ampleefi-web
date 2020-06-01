# Generated by Django 2.2.5 on 2019-10-23 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticketbots', '0003_auto_20191012_1327'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tickettable',
            name='artiste',
            field=models.CharField(max_length=800),
        ),
        migrations.AlterField(
            model_name='tickettable',
            name='day',
            field=models.CharField(max_length=800),
        ),
        migrations.AlterField(
            model_name='tickettable',
            name='event_name',
            field=models.CharField(max_length=800),
        ),
        migrations.AlterField(
            model_name='tickettable',
            name='month',
            field=models.CharField(max_length=800),
        ),
        migrations.AlterField(
            model_name='tickettable',
            name='phone_num',
            field=models.CharField(max_length=800),
        ),
        migrations.AlterField(
            model_name='tickettable',
            name='price',
            field=models.CharField(max_length=800),
        ),
        migrations.AlterField(
            model_name='tickettable',
            name='scrape_link',
            field=models.CharField(max_length=800),
        ),
        migrations.AlterField(
            model_name='tickettable',
            name='site_name',
            field=models.CharField(max_length=800),
        ),
        migrations.AlterField(
            model_name='tickettable',
            name='time',
            field=models.CharField(max_length=800),
        ),
        migrations.AlterField(
            model_name='tickettable',
            name='venue',
            field=models.CharField(max_length=800),
        ),
        migrations.AlterField(
            model_name='tickettable',
            name='year',
            field=models.CharField(max_length=800),
        ),
    ]
