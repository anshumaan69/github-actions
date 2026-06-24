const express = require("express")
const app = express();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.json({ msg: "Hello Github actions" })
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})