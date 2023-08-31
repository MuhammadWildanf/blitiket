const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001; // Ganti sesuai kebutuhan

// Konfigurasi Nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Ganti dengan layanan email yang sesuai
  auth: {
    user: '', // Ganti dengan email pengirim
    pass: '', // Ganti dengan kata sandi email
  },
});

app.get('/send-email', (req, res) => {
  const mailOptions = {
    from: '', // Ganti dengan email pengirim
    to: '', // Ganti dengan alamat email penerima
    subject: 'Subject of the Email',
    text: 'This is the text content of the email.',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).send('Error sending email.');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent successfully.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
