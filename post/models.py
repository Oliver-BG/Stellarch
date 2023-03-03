from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=200, null=False, blank= True)
    image_1 = models.ImageField(upload_to='images')
    image_2 = models.ImageField(upload_to='images')
    image_3 = models.ImageField(upload_to='images')
    address = models.CharField(max_length=200, null=False, blank= True)
    name = models.CharField(max_length = 100, null = True)
    text = models.CharField(max_length=500)

    def __str__(self):
        return self.title
