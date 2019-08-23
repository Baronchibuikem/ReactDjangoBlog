from rest_framework import serializers
from ..models import Article, Category, Subscription, Tag
from django.contrib.auth.models import User
import re



class TagSerializer(serializers.ModelSerializer):
    number_of_post = serializers.IntegerField()

    class Meta:
        model =Tag
        fields = ('tag', 'slug', 'number_of_posts',)


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('category', 'slug',)


class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = ('email','name',)


class ArticleSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField('get_profile_pic_url')
    
    class Meta:
        model = Article
        fields = (
                    'id',
                  'title',
                  'tags',
                  'slug',
                  'body',
                  'status',
                  'author',
                  'publish_date',
                  'category',
                  'image',
                  'number_of_views',
                  'number_of_likes',
                  )
        lookup_field = 'slug'

    def get_profile_pic_url(self, obj):
        request = self.context.get('request')
        return (re.sub('/([-\w])+/media/media/','/media/media/',request.build_absolute_uri(obj.image.url),1))
