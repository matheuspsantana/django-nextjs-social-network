from django.db import models
from profiles.models import Profile
import uuid

class Posts(models.Model):
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    image = models.ImageField(null=True, blank=True)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified_at = models.DateTimeField(auto_now=True)
    # TODO: define the folder to save the files
    # TODO: add signal to delete the file when the post is deleted
    class Meta:
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'

    def __str__(self) -> str:
        return '{user} | {date} | {body_slice}'.format(
            user = self.user.username,
            date = self.created_at.strftime("%d/%m/%Y, %H:%M:%S"),
            body_slice = self.body[:10] if len(self.body) >= 10 else self.body
        )