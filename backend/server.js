import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors';
import connectDB from './config/db.js'
// import products from './data/products.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound , errorHandler} from './middleware/errorMiddleware.js';
// import paymentApi from './routes/payment.js'; 
import paymentRoutes from './routes/paymentRoutes.js'


const app=express();
app.use(express.json())
dotenv.config();
//  var cors = cors();

connectDB();

// PAYMENT---------------------------------

// const paymentApi = require("./payment");
// const configureRoutes = app => {paymentApi(app);};
// module.exports = configureRoutes;


// app.use(cors())
// app.use('/api/payment' , paymentApi);


const jsonParser = express.json()
app.use(jsonParser);

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use('/api/stripe' , paymentRoutes)
// PAYMENT---------------------------------


app.get('/' , (req,res)=>{
res.send('API Running..')
});

app.use('/api/products' , productRoutes);
app.use('/api/users' , userRoutes);
app.use('/api/orders' , orderRoutes);



app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT , console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))