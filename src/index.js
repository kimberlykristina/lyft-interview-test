const app = require("./app")
PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Test app listening on port ${PORT}`)
})
