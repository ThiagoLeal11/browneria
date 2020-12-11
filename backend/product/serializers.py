import serpy


class ProductSerializer(serpy.Serializer):
    id = serpy.StrField()
    title = serpy.StrField()
    # index = serpy.IntField()


class ProductDetailSerializer(ProductSerializer):
    pass
    # description = serpy.StrField()
    # price = serpy.FloatField()
