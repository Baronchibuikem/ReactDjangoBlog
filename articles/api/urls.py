from django.urls import path
from .views import (ArticleListView,ArticleDetailView, SubscriptionCreateView,
                    CategoryListView,TagListView,ArticlesHasTagView,ArticlesInCategoryView)

from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('subscribe/', SubscriptionCreateView.as_view()),
    path('articles/', ArticleListView.as_view()),
    path('article/<int:pk>/',ArticleDetailView.as_view(),name='article-detail'),
    path('tags/',TagListView.as_view()),
    path('categories/',CategoryListView.as_view()),
    path('category-filter/<slug>/', ArticlesInCategoryView.as_view()),
    path('tag-filter/<tags>/', ArticlesHasTagView.as_view()),

]
