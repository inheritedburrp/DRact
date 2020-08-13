from rest_framework import serializers
from gens.models import User

# UserSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
