from django.db import models


class Song(models.Model):
    address = models.CharField(max_length=2083)
    name = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    like_status = models.IntegerField()
    tag = models.CharField(max_length=255)
