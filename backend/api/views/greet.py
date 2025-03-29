from rest_framework.response import Response
from rest_framework.views import APIView

class Greet(APIView):

    def post(self, request):
        return Response({"message": "Hello, welcome!"}, status=200)

    def get(self, request):
        return Response({"message": "Hello, welcome!"}, status=200)