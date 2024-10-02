
from rest_framework import viewsets
from .models import Posts
from .serializers import PostsSerializer
from rest_framework.permissions import IsAuthenticated
# Create your views here.

class PostsModelViewSet(viewsets.ModelViewSet):
    serializer_class = PostsSerializer
    queryset = Posts.objects.all()
    permission_classes = [IsAuthenticated]