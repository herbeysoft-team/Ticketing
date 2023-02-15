require('dotenv').config()
const express = require('express')
const cors = require('cors')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
console.log(process.env.STRIPE_SECRET_KEY)
const app = express()
const port = 8000;

app.use(express.json())
app.use(cors())

app.post("/payment", async (req, res) =>{
    try {
        const {amount} = req.body;
        console.log(amount)
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'NGN',
            payment_method_types:['cards']
           
          });

          const clientSecret = paymentIntent.clientSecret;
          res.json({
            paymentIntent:clientSecret,
          })
        
    } catch (error) {
        
    }
} )

app.listen(8000, "0.0.0.0", ()=> {
    console.log("Listening to the port 8000")
})