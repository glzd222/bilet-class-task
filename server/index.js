const express = require('express')
const app = express()
const PORT = 5000
const mongoose = require('mongoose');
const cors = require('cors')

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const userName = "elmeddin"
const password = "elis123"
const DB_URL = "mongodb+srv://elmeddin:elis123@cluster0.k2v9iz3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


app.use(cors())


const ecommerceschema = new mongoose.Schema({
    imageUrl: { type: String, require: true },
    title: { type: String, require: true },
    price: { type: Number, require: true }
});

const ecommercemodel = mongoose.model('products', ecommerceschema);



app.get('/api/products', async (req, res) => {
    try {
        const getecommerce = await ecommercemodel.find({})
       if(getecommerce.length > 0){
        res.status(200).send({
            data:getecommerce
        })
       }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
app.get('/api/products/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const getidecommerce = await ecommercemodel.findById(id)
        if(getidecommerce){
            res.status(200).send({
                data:getidecommerce
            })
        }

    } catch (error) {
        res.status(500).send({ message: error.message })

    }
})
app.delete('/api/products/:id', async (req, res) => { 

    const {id} =req.params;

    try { const getdeleted = await ecommercemodel.findByIdAndDelete(id)

        res.status(200).send({message:"deleted succesfully"})
        
    } catch (error) {
        res.status(500).send({message:error.message})
    }


})
app.post('/api/products', async (req, res) => { 
    try {
        const newproducts = new ecommercemodel({ ...req.body });
    await newproducts.save();
      res.status(201).send({message:"created success" , data: newproducts})

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
})




mongoose.connect(DB_URL)
    .then(() => {
        console.log('Connected!')

        app.listen(PORT, () => {
            console.log(`Link:http://localhost:${PORT}`)
        })
    });