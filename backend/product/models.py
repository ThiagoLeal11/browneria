import uuid
from django.db import models
from django.utils.translation import ugettext as _


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, db_index=True)
    title = models.CharField(max_length=150)
    # description = models.TextField()
    # price = models.DecimalField(max_digits=8, decimal_places=2)
    # index = models.IntegerField(default=0)
    # image = models.ImageField(upload_to='products/images/')
    # is_active = models.BooleanField(_('is active'), default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)
