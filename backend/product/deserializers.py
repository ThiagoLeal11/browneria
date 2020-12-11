from rest_framework import serializers

from product.models import Product


def simple_obj_update(field_list, obj, data):
    """
    Check whether the field id present in the dict data, if so,
    puts the value in the corresponding object's attribute
    """
    for field in field_list:
        if field in data:
            setattr(obj, field, data[field])

    return obj


class ProductDeserializer(serializers.Serializer):
    # id = serializers.UUIDField(required=False)
    title = serializers.CharField()
    # description = serializers.CharField()
    # price = serializers.DecimalField(max_digits=8, decimal_places=2)
    # index = serializers.IntegerField()
    # is_active = serializers.BooleanField(default=True)

    def create(self, validated_data):
        product = Product.objects.create(
            title=validated_data['title'],
            # description=validated_data['description'],
            # price=validated_data['price'],
            # index=validated_data['index'],
            # is_active=validated_data['is_active']
        )

        return product

    def update(self, instance, validated_data):

        instance = simple_obj_update(
            obj=instance,
            data=validated_data,
            # field_list=['title', 'description', 'price', 'index', 'is_active']
            field_list=['title']
        )

        instance.save()
        return instance
