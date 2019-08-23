from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User



class Category(models.Model):
    category = models.CharField(max_length=125, unique=True)
    slug = models.SlugField(max_length=124, unique=True)
    objects = models.Manager()
    
    class Meta:
        ordering=('category',)
        verbose_name='category'
        verbose_name_plural='categories'
   
    def __str__(self):
        return self.category


class Subscription(models.Model):
    name = models.CharField(max_length=150, blank=False, null=False)
    email = models.EmailField(max_length=100, blank=False, null=False)
    objects = models.Manager()
    def __str__(self):
        return self.email

class Tag(models.Model):
    tag = models.CharField(max_length=100)
    slug = models.SlugField(primary_key=True, max_length=150)
    objects = models.Manager()

    def __str__(self):
        return self.tag

    class Meta:
        ordering = ('tag',)

class Article(models.Model):
    STATUS_CHOICES = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )
    image = models.ImageField(upload_to="media/", blank=True)
    title = models.CharField(max_length=250)
    tags = models.ManyToManyField(Tag)
    slug = models.SlugField(max_length=350, unique_for_date='publish_date')
    body = models.TextField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')
    author = models.ForeignKey(User, to_field="username", on_delete=models.DO_NOTHING)
    publish_date = models.DateTimeField(default=timezone.now)
    category = models.ForeignKey(Category, to_field='slug', on_delete=models.DO_NOTHING)
    number_of_views = models.IntegerField(default=0, null=True, blank=True)
    number_of_likes = models.IntegerField(default=0, null=True, blank=True)
    objects = models.Manager()

    class Meta:
        ordering = ('-publish_date',)

    def __str__(self):
        return self.title
    
