from django.urls import path
from .views import crear_alumno, consultar_alumno

urlpatterns = [
    path('crear-alumno/', crear_alumno, name='crear-alumno'),
    path('consultar-alumno/<int:idGrado>/', consultar_alumno, name='consultar-alumno'),
]
