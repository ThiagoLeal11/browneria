from rest_framework.permissions import AllowAny
from rest_framework.views import APIView

from account.deserializers import UserDeserializer
from account.serializers import UserSerializer
from responses.common import ok_response, error_response


class AccountView(APIView):
    @staticmethod
    def get(request):
        user = request.user
        serializer = UserSerializer(instance=user)
        return ok_response({'user': serializer.data})


class AccountCreateView(APIView):
    permission_classes = [AllowAny]

    @staticmethod
    def post(request):
        deserializer = UserDeserializer(data=request.data)

        if not deserializer.is_valid():
            return error_response(deserializer.errors)

        user = deserializer.save()
        serializer = UserSerializer(instance=user)

        return ok_response({'user': serializer.data})
