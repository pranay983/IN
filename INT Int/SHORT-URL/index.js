const express = require("express");
const { connectToMongoDB } = require("./conect");
const urlRoute = require("./routes/url");
const URL = require('./models/url');
const app = express();
const PORT = 3000;

connectToMongoDB('mongodb://localhost:27017/short_url')
    .then(() => console.log("Mongodb connected"));

app.use(express.json());
app.use("/url", urlRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        },
        { new: true } 
    );
    if (!entry) return res.status(404).send('Short URL not found');
    res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));