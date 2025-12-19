from rest_framework.routers import DefaultRouter
from .views import InvestmentViewSet

router = DefaultRouter()
router.register('', InvestmentViewSet)

urlpatterns = router.urls
