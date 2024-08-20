import os
import shutil

# Define la ruta de la carpeta con las imágenes
ruta_origen = "/Users/alhazred/Downloads/imagenes_renombradas"

# Define la ruta de la carpeta de destino (dentro de la carpeta original)
ruta_destino = os.path.join(ruta_origen, "duplicados")

# Crea la carpeta de destino si no existe
os.makedirs(ruta_destino, exist_ok=True)

# Obtiene la lista de archivos en la carpeta de origen
archivos = os.listdir(ruta_origen)

# Inicializa un contador para el nuevo nombre de archivo
contador = 0

# Itera sobre cada archivo en la carpeta de origen
for archivo in archivos:
    # Comprueba si el archivo es una imagen PNG
    if archivo.endswith(".png"):
        # Construye la ruta completa del archivo de origen
        ruta_archivo_origen = os.path.join(ruta_origen, archivo)

        # Construye el nuevo nombre de archivo
        nuevo_nombre = str(contador) + ".png"

        # Construye la ruta completa del archivo de destino
        ruta_archivo_destino = os.path.join(ruta_destino, nuevo_nombre)

        # Copia el archivo a la carpeta de destino con el nuevo nombre
        shutil.copy(ruta_archivo_origen, ruta_archivo_destino)

        # Incrementa el contador
        contador += 1

print("Se han duplicado y renombrado 301 imágenes PNG en la carpeta 'duplicados'.")