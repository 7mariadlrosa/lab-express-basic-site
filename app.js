const express = require("express")
const app = express()
const path = require("path")

app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))


app.get("/homePage.hbs", (req, res) => {
    res.render("homePage")
})

app.get("/aboutPage.hbs", (req, res) => {
    res.render("aboutPage")
})

app.get("/worksPage.hbs", (req, res) => {
    res.render("worksPage")
})

app.get("/galleryPage.hbs", (req, res) => {
    res.render("galleryPage")
})

app.listen(3000, () => console.log('SERVIDOR LEVANTADO ENE EL PUERTO 3000'))
