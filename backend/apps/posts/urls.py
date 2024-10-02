from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(prefix="posts", viewset=views.PostsModelViewSet)

urlpatterns = [                      ########### DIFF
    path("", include(router.urls)),  ########### DIFF
]  