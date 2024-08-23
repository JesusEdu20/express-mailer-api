
---

# Nodemailer Email API

Esta es una API simple construida con Express y Nodemailer para enviar correos electrónicos. La API permite enviar correos electrónicos especificando el destinatario, asunto, texto, y contenido HTML a través de una solicitud `POST`.

## Requisitos

- Node.js y npm
- Cuenta de Gmail con autenticación de dos pasos activada
- Clave de aplicación generada en Google

## Configuración

### 1. Activar la verificación en dos pasos

Para utilizar esta API, necesitas activar la verificación en dos pasos en tu cuenta de Google. Puedes hacerlo siguiendo estos pasos:

1. Ve a [Mi cuenta](https://myaccount.google.com/).
2. En la sección "Seguridad", busca "Verificación en dos pasos" y actívala.

### 2. Generar una clave de aplicación

Después de activar la verificación en dos pasos:

1. En la misma sección de "Seguridad", desplázate hacia abajo hasta "Contraseñas de aplicaciones".
2. Selecciona "Correo" como la aplicación y "Otros" para nombrar la clave, por ejemplo, "Nodemailer".
3. Genera la clave y guárdala, ya que la necesitarás para la configuración.

### 3. Configurar el archivo `.env`

Crea un archivo `.env` en el directorio raíz de tu proyecto y añade las siguientes variables:

```bash
EMAIL_USER=correoExample@gmail.com
EMAIL_PASS=claveGeneradaDeGoogle
```

Asegúrate de reemplazar `correoExample@gmail.com` por tu correo electrónico de Gmail y `claveGeneradaDeGoogle` por la clave que generaste en el paso anterior.

## Instalación

1. Clona este repositorio.
2. Instala las dependencias necesarias con:

   ```bash
   npm install
   ```

3. Inicia el servidor con:

   ```bash
   npm start
   ```

## Uso

### Endpoint: `/send-email`

- **Método:** POST
- **Descripción:** Envía un correo electrónico utilizando los datos proporcionados en el cuerpo de la solicitud.

**Ejemplo de solicitud:**

```json
POST /send-email
{
  "to": "destinatario@example.com",
  "subject": "Asunto del correo",
  "text": "Texto del correo",
  "html": "<h1>Contenido HTML</h1>"
}
```

**Ejemplo de respuesta exitosa:**

```json
{
  "message": "Correo enviado"
}
```

## Notas

- El campo `from` en el correo electrónico está configurado para utilizar la dirección de correo especificada en el archivo `.env`. Asegúrate de que la variable `EMAIL_USER` esté correctamente configurada:

  ```javascript
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    text: text,
    html: html
  };


## Licencia

Este proyecto está bajo la Licencia MIT.

---
