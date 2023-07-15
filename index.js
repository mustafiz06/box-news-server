const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');
app.use(cors());

const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send("Hello World")
})
app.get('/news-categories', (req, res) => {
    res.send(categories)
})
app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.filter(n => n.category_id === id);
    if (id === "0") {
        res.send(news)
    } else {
        if (!selectedNews) {
            return res.status(404).send({ message: "News Not found" })
        }
        else {
            res.send(selectedNews)
        }
    }
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    if (!selectedNews) {
        return res.status(404).send({ message: "News Not found" })
    }
    else {
        res.send(selectedNews)
    }
})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})
