from ..models import Article, Tag, Category, Subscription
from .serializers import ArticleSerializer, TagSerializer, CategorySerializer, SubscriptionSerializer
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from ReactDjangoBlog import settings
from django.db.models import Count ,Sum
from django.shortcuts import get_object_or_404
from .permissions import IsRequestFromFrontend
from rest_framework.generics import (ListAPIView,RetrieveAPIView,CreateAPIView, UpdateAPIView)



# Exposed endpoints
@api_view(["GET"])
def api_root(request, format=None):
    return Response({
        'article': reverse('article-list', request=request, format=format),
        })

class TagListView(ListAPIView):
    queryset = Tag.objects.annotate(number_of_articless = Count('article'))[:10]
    serializer_class = TagSerializer

class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer



class ArticlesInCategoryView(ListAPIView):
    serializer_class = ArticleSerializer
    def get_queryset(self):
        slug = self.kwargs['slug']
        return Article.objects.filter(category=slug)

class ArticlesHasTagView(ListAPIView):
    serializer_class = ArticleSerializer
    def get_queryset(self):
        tag = self.kwargs['tags']
        return Article.objects.filter(tags=tag)

class CategoryListView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class SubscriptionCreateView(CreateAPIView):
    permission_classes = (IsRequestFromFrontend,)
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer