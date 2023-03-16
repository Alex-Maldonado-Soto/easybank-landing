const express = require("express")

const morgan = require("morgan")

const app = express()
const static = __dirname.replace("app", "public")

app.set("port", process.env.PORT || 5500)
app.set("views", "./src/public/view")
app.set("view engine", "pug")

app.use(morgan("dev"))
app.use(express.static(static))


app.get("/", (req, res) => {
    res.render("index")
})

module.exports = app
