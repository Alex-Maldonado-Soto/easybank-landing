const app = require("./app/app")

const port = app.get("port")

app.listen(5500, () => {
    console.log(`----------- Server running on ${port}`)
})