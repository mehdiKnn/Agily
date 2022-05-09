const express = require('express')
const axios = require('axios').create()
const NodeCache = require("node-cache")
const app = express()
const cache = new NodeCache({stdTTL: 15})
require("dotenv").config()
const apiKey = `${process.env.API_KEY}`
app.use(express.json())

const verifyCache = (req, res, next) => {
    try {
        const name = req.query.search
        console.log(name)
        console.log(cache.get("data"))
        if (cache.has("data")){
            return res.status(200).json(cache.get("data"))
        }
        return next()
    }catch (err){
        throw new Error(err)
    }
}

app.get("/weather",verifyCache, (req, res) => {
    // On fait une première requête pour récupérer la latitude et la longitude de la ville
    res.header("Access-Control-Allow-Origin", "*")
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.search}&APPID=${apiKey}`).then((response) => {
        const {name, coord} = response.data
        // On passe la lon et lat pour trouver les prévisions sur 7 jours
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&APPID=${apiKey}&units=metric&exclude=current,hourly,minutely,alerts&lang=fr`).then((response) => {
            const {daily} = response.data
            cache.set("data", {name: name, daily: daily})
            return res.status(200).json({name: name, daily: daily})
        }).catch((err) => {
            return res.status(err.response.status).json(err.response.statusText)
        })
    }).catch((err) => {
        return res.status(err.response.status).json(err.response.statusText)
    })
})

app.listen(8080, () => {
    console.log("Server running on 8080")
})