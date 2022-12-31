const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
require('dotenv').config();

// middle ware
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://arbin:6R9SMiuPbMiQZGSm@cluster0.nj2hkmy.mongodb.net/?retryWrites=true&w=majority";
// console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        const userCollection = client.db('instagram-clone').collection('userslist');
        const addAPostCollection = client.db('instagram-clone').collection('addapost');
       
      // userslist
      app.get("/usersList", async (req, res) => {
        const query = {};
        const cursor = await userCollection.find(query);
        const reviews = await cursor.toArray();
        res.send(reviews);
    });


    app.post("/usersList", async (req, res) => {
        const user = req.body;
        const result = await userCollection.insertOne(user);
        res.send(result);
    });


}
finally {

}
};

run().catch(err => console.log(err));








// Initial message
app.get("/", (req, res) => {
res.send("Learn With Fun!");
});

app.listen(port, () => {
console.log("Learn with Fun site running on port:", port);
});
