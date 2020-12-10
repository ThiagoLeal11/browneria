import uuid
from django.db import models
from django.utils.translation import ugettext as _


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, db_index=True)
    title = models.CharField(_('título'), max_length=150)
    description = models.TextField(_('descrição'))
    price = models.DecimalField(_('preço'), max_digits=8, decimal_places=2)
    index = models.IntegerField(_('índice'), default=0)
