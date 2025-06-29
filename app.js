import express from 'express';
import dotenv from 'dotenv';
import expressLayout from 'express-ejs-layouts';
dotenv.config();
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import methodOverride from 'method-override';
import { isActiveRoute } from './server/helpers/routeHelpers.js';
import connectDB from './server/config/db.js';


const app=express();
const PORT = process.env.PORT || 3000;


connectDB();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    store:MongoStore.create({
        mongoUrl:process.env.MONGODB_URI
    })
}))

app.use(express.static('public'));
//Templating Engine 
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

app.locals.isActiveRoute = isActiveRoute; // Make the function available in views

import mainRoutes from './server/routes/main.js';
import adminRoutes from './server/routes/admin.js';

app.use('/', mainRoutes);
app.use('/admin', adminRoutes); // or any other desired path prefix


app.get('',(req,res)=>{
    res.send("Hello World");
});

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
});