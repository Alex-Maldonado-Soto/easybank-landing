const express = require("express")

const app = express()

app.set("port", process.env.PORT || 5500)
app.set("views", "./src/public/view")
app.set("view engine", "pug")


app.get("/", (req, res) => {
    res.render("index")
})

module.exports = app
