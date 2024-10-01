from django.db import models
from django.contrib.auth.models import User


class Posts(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField()
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'

    def __str__(self) -> str:
        return '{user} | {date} | {body_slice}'.format(
            user = self.user.username,
            date = self.created_at.strftime("%d/%m/%Y, %H:%M:%S"),
            body_slice = self.body[:10] if len(self.body) >= 10 else self.body
        )