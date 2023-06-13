const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = 5000
//UserName:ajadmin
//Password:mtIY2tMWbjJntdmp
app.use(cors())
app.use(express.json())
const uri = "mongodb+srv://ajadmin:mtIY2tMWbjJntdmp@cluster0.gdyixyh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        const tutorCollection = client.db("tutor").collection("postJob");
        const teacherCollection = client.db("allTeacher").collection("registerTeacher");
        const reviewCollection = client.db("allReviews").collection("studentReview");
      // create a document to insert
      app.get('/postJob',async(req,res)=>{
        const query = {  };
        const cursor = tutorCollection.find(query);
        const result = await cursor.toArray();
        res.send(result);
      })
      app.post('/postJob',async(req,res)=>{
        const postJob = req.body;
        const result = await tutorCollection.insertOne(postJob);
        console.log(result);
        res.send(result);
      })
      // create a document to insert
      app.get('/registerTeacher',async(req,res)=>{
        const query = {  };
        const cursor = teacherCollection.find(query);
        const result = await cursor.toArray();
        res.send(result);
      })
      app.post('/registerTeacher',async(req,res)=>{
        const registerTeacher = req.body;
        const result = await teacherCollection.insertOne(registerTeacher);
        console.log(result);
        res.send(result);
      })
      app.get('/studentReviews',async(req,res)=>{
        const query = {  };
        const cursor = reviewCollection.find(query);
        const result = await cursor.toArray();
        res.send(result);
      })
      app.post('/studentReviews',async(req,res)=>{
        const studentReviews = req.body;
        const result = await reviewCollection.insertOne(studentReviews);
        console.log(result);
        res.send(result);
      })
    } finally {
    //   await client.close();
    }
  }
  run().catch(console.dir);
app.get('/', (req, res) => {
  res.send('Server Running')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})