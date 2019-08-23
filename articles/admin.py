from django.contrib import admin
from .models import Article, Category, Subscription, Tag


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title','id','author','slug','status','publish_date')
    prepopulated_fields=({'slug':('title',)})


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id','category','slug')
    prepopulated_fields=({'slug':('category',)})


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('tag','slug')
    prepopulated_fields=({'slug':('tag',)})


@admin.register(Subscription)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ('id','email','name')