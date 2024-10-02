from django.contrib import admin
from posts.models import Posts

# Register your models here

@admin.register(Posts)
class PostsAdmin(admin.ModelAdmin):
    list_display = ('profile', 'body', 'created_at')
    list_display_links = ('profile', 'body', 'created_at')
    