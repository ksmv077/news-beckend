const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = 3000

app.use(express.json())

app.use(require("./routes/news.route"))
app.use(require("./routes/catergories.route"))
app.use(require("./routes/comments.route.js"))






mongoose.connect("mongodb+srv://imran:12344321@cluster0.pv1kzvp.mongodb.net/")
.then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


app.listen(port, () => console.log('server has been started'))