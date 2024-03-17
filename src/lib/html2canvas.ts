import html2canvas from "html2canvas"
import { saveAs } from "file-saver"

// Función para generar y descargar la imagen
function generateAndDownloadImage() {
  // Obtener el elemento que deseas convertir en imagen
  const element = document.getElementById("elementId") // Reemplaza 'elementId' con el ID del elemento que deseas convertir

  // Convertir el elemento a una imagen
  html2canvas(element).then((canvas) => {
    // Convertir el canvas a un blob
    canvas.toBlob((blob) => {
      // Crear un objeto URL del blob
      const url = URL.createObjectURL(blob)

      // Crear un enlace <a> para descargar la imagen
      const link = document.createElement("a")
      link.href = url
      link.download = "capturedImage.png" // Nombre del archivo que se descargará
      document.body.appendChild(link)

      // Hacer clic en el enlace para iniciar la descarga
      link.click()

      // Limpiar el enlace
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    })
  })
}

// Ejemplo de uso: llama a esta función cuando quieras generar y descargar la imagen
generateAndDownloadImage()
