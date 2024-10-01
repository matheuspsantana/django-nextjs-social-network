from django.contrib import admin
from posts.models import Posts

# Register your models here

@admin.register(Posts)
class PostsAdmin(admin.ModelAdmin):
    list_display = ('user', 'body', 'created_at')
    list_display_links = ('user', 'body', 'created_at')
    