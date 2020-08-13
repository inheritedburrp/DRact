from rest_framework import routers
from .api import UserViewSet

router = routers.DefaultRouter()
router.register('api/gens', UserViewSet, 'gens')

urlpatterns = router.urls