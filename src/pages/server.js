// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Парсинг тела запроса в формате JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Установка CORS для разрешения запросов с клиентского приложения
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// POST-маршрут для обработки данных формы
app.post('/send-email', (req, res) => {
    const { name, email, text } = req.body;

    // Настройка транспорта для отправки почты (для mail.ru)
    const transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'hard.hate@mail.ru', // mail.ru
            pass: 'pj4mk5juKmkcwP7S3Mv2' // пароль
        }
    });

    // Настройка письма
    const mailOptions = {
        from: 'hard.hate@mail.ru', // mail.ru
        to: 'hard.hate@mail.ru', // почта на которую будет отправлено письмо
        subject: 'Сообщение с вашего сайта',
        html: `<p><strong>Имя:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Сообщение:</strong> ${text}</p>`
    };

    // Отправка письма
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Что-то пошло не так');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Письмо успешно отправлено');
        }
    });
});

// Запуск сервера на порту 3001
app.listen(3001, () => {
    console.log('Сервер запущен на порту 3001');
});
