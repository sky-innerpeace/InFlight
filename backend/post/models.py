#backend/post/models.py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        """A string representation of the model."""
        return f'{self.pk}::{self.title}'