import express, { json } from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

// Configurar variables de entorno
dotenv.config();

const app = express();
const port = 3000;
app.use(cors());// <--- alert
app.disable('x-powered-by');

app.options('*', cors());
app.use(bodyParser.json());

// Configuración del transporte SMTP
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure:false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Ruta para enviar correo
app.post('/send-email', (req, res) => {
  const { to, subject, text, html } = req.body;

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    text: text,
    html: html
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200);
    res.json({message:'Correo enviado'})
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
