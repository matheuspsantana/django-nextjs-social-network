from django.contrib import admin
from profiles.models import Profile

# Register your models here

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user',)
    list_display_links = ('user',)