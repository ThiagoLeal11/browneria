from rest_framework.permissions import AllowAny
from rest_framework.views import APIView

from product.deserializers import ProductDeserializer
from product.models import Product
from product.serializers import ProductSerializer, ProductDetailSerializer
from responses.common import ok_response, not_found_response, error_response, forbidden_response


class ProductListCreateView(APIView):
    permission_classes = [AllowAny]

    @staticmethod
    def get(request):
        products = Product.objects.all()
        serializer = ProductSerializer(instance=products, many=True)
        return ok_response({'products': serializer.data})

    @staticmethod
    def post(request):
        if not request.user.is_authenticated:
            return forbidden_response({'user': ['Need to be authenticated.']})

        deserializer = ProductDeserializer(data=request.data)

        if not deserializer.is_valid():
            return error_response(deserializer.errors)

        product = deserializer.save()
        serializer = ProductDetailSerializer(instance=product)

        return ok_response({'product': serializer.data})


class ProductDetailUpdateView(APIView):
    @staticmethod
    def get(request, product_id):
        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return not_found_response('Product with this ID not found')

        serializer = ProductDetailSerializer(instance=product)
        return ok_response({'product': serializer.data})

    @staticmethod
    def put(request, product_id):
        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return not_found_response('Product with this ID not found')

        deserializer = ProductDeserializer(instance=product, data=request.data, partial=product)

        if not deserializer.is_valid():
            return error_response(deserializer.errors)

        product = deserializer.save(product=product)
        serializer = ProductDetailSerializer(instance=product)

        return ok_response({'product': serializer.data})

    @staticmethod
    def delete(request, product_id):
        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return not_found_response('Product with this ID not found')

        product.delete()
        return ok_response({'detail': 'Product successfully deleted'})
