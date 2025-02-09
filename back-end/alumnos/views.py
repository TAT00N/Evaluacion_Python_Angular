from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import Alumno
from .serializers import AlumnoSerializer

# Endpoint para crear un alumno
@api_view(['POST'])
@authentication_classes([BasicAuthentication])  
@permission_classes([IsAuthenticated])  
def crear_alumno(request):
    serializer = AlumnoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Endpoint para consultar alumnos por grado
@api_view(['GET'])
@authentication_classes([BasicAuthentication])  
@permission_classes([IsAuthenticated])  
def consultar_alumno(request, idGrado):
    alumnos = Alumno.objects.filter(grado=idGrado)
    serializer = AlumnoSerializer(alumnos, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
