import serpy


class UserSerializer(serpy.Serializer):
    name = serpy.StrField()
    email = serpy.StrField()
