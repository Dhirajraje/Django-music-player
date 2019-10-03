# Generated by Django 2.2.6 on 2019-10-02 22:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=2083)),
                ('name', models.CharField(max_length=255)),
                ('artist', models.CharField(max_length=255)),
                ('like_status', models.IntegerField()),
                ('tag', models.CharField(max_length=255)),
            ],
        ),
    ]
