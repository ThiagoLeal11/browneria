from rest_framework.response import Response
from rest_framework import status


def ok_response(content):
    return Response(content, status=status.HTTP_200_OK)


def error_response(errors):
    return Response(
        {
            'detail': 'Malformed request.',
            'code': 'parse_error',
            'errors': errors
        },
        status=status.HTTP_400_BAD_REQUEST
    )


def not_found_response(message):
    return Response(
        {
            'detail': message,
            'code': 'not_found'
        }, status=status.HTTP_404_NOT_FOUND
    )
