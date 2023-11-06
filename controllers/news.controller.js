const { News } = require('../models/News.model')
const mongoose = require("mongoose");


module.exports.newsController = {
    getNews: (req, res) => {
        News.findById(req.params.id).then(data => {
            res.json(data)
        })
    },
    getAllNews: (req, res) => {
        News.find( req.query.category ? { categoryId: req.query.category } : null)
            .then(data => res.json(data))
            .catch(() => res.json([]))
    },
    postNews: (req, res) => {
        let newNews = {
            title: req.body.title,
            text: req.body.text,
            categoryId: req.body.categoryId
        }
        News.create(newNews).then(() => {
            res.json(`News: ${req.body.title} created`)
        })
    },
    patchNews: (req, res) => {
        News.findByIdAndUpdate(req.params.id,
            { text: req.body.text }).then(() => {
                res.json(`News with ID: ${req.params.id} changed`)
            })
        },
        deleteNews: (req, res) => {
            News.findByIdAndDelete(req.params.id).then(() => {
                res.json(`News with ID: ${req.params.id} has been deleted`)
            })
        },
    }