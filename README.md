# residentiaApp

Aplicación diseñada en IONIC 6 para enviar imágenes por WhatsApp, generar códigos QR, escanear códigos QR y enviar notificaciones a otros usuarios.

La primera funcionalidad es el botón de envío de imágenes por WhatsApp. Al hacer clic en este botón, los usuarios pueden seleccionar una imagen desde su galería y enviarla directamente a un contacto de WhatsApp sin tener que abrir la aplicación de WhatsApp por separado. Esta funcionalidad utiliza la API de WhatsApp para enviar la imagen a través de una interfaz fácil de usar.

El segundo botón es para generar códigos QR. Los usuarios pueden ingresar un texto, un enlace o cualquier otra información y generar un código QR único para esa información. Los códigos QR generados se pueden guardar en el dispositivo o compartir con otros usuarios a través de las redes sociales.

El tercer botón permite a los usuarios escanear códigos QR utilizando la cámara de su dispositivo móvil. Esta funcionalidad utiliza la API de escaneo de código QR y ofrece una interfaz fácil de usar para detectar y decodificar códigos QR en tiempo real.

Por último, el cuarto botón es para enviar notificaciones a otros usuarios de la aplicación. Los usuarios pueden escribir un mensaje o una notificación y enviarlo a otros usuarios que tengan la aplicación instalada. Esta funcionalidad utiliza la API de notificaciones push y ofrece una forma rápida y fácil de comunicarse con otros usuarios de la aplicación.

#1
ionic build
#2
ionic serve
