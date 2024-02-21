const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");

// const username = "exampleCluster";
// const password = "cluster8796";
// const cluster = "example";

const app = express();

app.use(express.json());

const uri = "mongodb+srv://exampleCluster:cluster8796@example.g2hvy.mongodb.net/myDatabase?retryWrites=true&w=majority";
mongoose.connect(
    uri,
    // "mongodb+srv://${username}:${password}@${cluster}.g2hvy.mongodb.net/?retryWrites=true&w=majority",
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log('Connected Successfully');
});

app.use(Router);

app.listen(
    process.env.PORT || 3001,
    () => {
        console.log(`Server is running at port ${process.env.PORT}`);
    }
);