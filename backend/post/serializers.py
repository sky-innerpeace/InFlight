#backend/post/serializers.py
from rest_framework import serializers
from rest_framework.fields import DateField

from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'content',
            'updated_at'
        )
        model = Post