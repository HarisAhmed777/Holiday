const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser');
const UserModel = require('./models/user');
const BookingModel = require('./models/booking.js')
const FeedbackModel = require('./models/feedback.js');
const PurchasePackageModel = require('./models/Packagepurshase.js');

const app = express();
app.use(express.json())
app.use(cors({
   origin :["http://localhost:5173"],
   methods :["GET","POST"],
   credentials:true
}));
app.use(bodyParser.json());
app.use(cookieparser());

mongoose.connect('mongodb://localhost:27017/holiday', {

}).then(() => {
   console.log("Database Connected");
}).catch((e) => {
   console.log("Error in connecting db", e);
}); 

app.post('/register', (req, res) => {
    const { firstname, lastname, mobilenumber, email, password } = req.body;

    UserModel.findOne({ email: email })
        .then(existingUser => {
            if (existingUser) {
                res.status(409).json({ error: "User already exists" });
            } else {
                const hashedPassword = bcrypt.hashSync(password, 10); // Hash the password before saving
                const newUser = new UserModel({
                    firstname,
                    lastname,
                    mobilenumber,
                    email,
                    password: hashedPassword,
                    role: "user"
                });

                newUser.save()
                    .then(() => res.json({ status: "Account created successfully" }))
                    .catch(err => res.status(500).json({ error: "Internal server error" }));
            }
        })
        .catch(err => res.status(500).json({ error: "Internal server error" }));
});

app.post('/booking', (req, res) => {
    const { name, age, email, persons, city, startdate, enddate, adults, children, totalamount } = req.body;
    BookingModel.create({ name, age, email, persons, city, startdate, enddate, adults, children, totalamount })
      .then(() => res.json({ Status: "ok" }))
      .catch(err => res.json(err));
  });
 app.post('/login', (req, res) => {
   const { email, password } = req.body;
   UserModel.findOne({ email: email })
       .then(user => {
           if (user) {
               bcrypt.compare(password, user.password, (err, result) => {
                   if (result) {
                       const token = jwt.sign({ email: user.email, role: user.role }, "haris-secret-key", { expiresIn: '1m' });
                       res.cookie('token', token);
                       res.json({ status: "Success",name:user.email, role: user.role, token }); // Include token in the response
                   } else {
                       res.status(401).json({ error: "The password is incorrect" });
                   }
               });
           } else {
               res.status(404).json({ error: "No record exists" });
           }
       })
       .catch(err => {
           console.error(err);
           res.status(500).json({ error: "Internal server error" });
       });
});
app.get('/allusers',async(req,res)=>{
   try{
       const allusers = await UserModel.find();
       res.json(allusers);
   }catch(error){
       console.error("Error fetching user bookings:", error);
       res.status(500).json({ error: 'Internal server error' });
   }
});
app.get('/allbookings',async(req,res)=>{
   try{
       const allbookings = await BookingModel.find();
       res.json(allbookings);
   }catch(error){
       console.error("Error fetching user bookings:", error);
       res.status(500).json({ error: 'Internal server error' });
   }
});

app.get('/allfeedback',async(req,res)=>{
    try{
        const allfeedback = await FeedbackModel.find();
        res.json(allfeedback);
    }catch(error){
        console.error("Error fetching user bookings:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
 });
 app.get('/packagaereq',async(req,res)=>{
    try{
        const packagaereq = await PurchasePackageModel.find();
        res.json(packagaereq);
    }catch(error){
        console.error("Error fetching user bookings:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
 });

app.get('/userbooking', async (req, res) => {
   try {
       const {mail} = req.query;
       console.log(mail);
       const userBookings = await BookingModel.find({ email: mail });
       console.log(userBookings);
       res.json(userBookings);
   } catch (error) {
       console.error("Error fetching user bookings:", error);
       res.status(500).json({ error: 'Internal server error' });
   }
});
app.get('/user', async (req, res) => {
    try {
        const { email } = req.query;
        // console.log(firstname);
        const userprofile = await UserModel.find({ email: email });
        res.json(userprofile);
    } catch (error) {
        console.error("Error fetching user bookings:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
 });

 app.post('/feedback', async (req, res) => {
    try {
        const { name, email, feedback } = req.body;

        const newFeedback = new FeedbackModel({ // Use the correct model
            name,
            email,
            feedback
        });

        await newFeedback.save();
        res.status(201).json(newFeedback);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/purchase-package', async (req, res) => {
    try {
        const { firstName, lastName, mobileNumber, email, numberOfAdults, numberOfChildren, packageType } = req.body;

        const newPurchasePackage = new PurchasePackageModel({
            firstName,
            lastName,
            mobileNumber,
            email,
            numberOfAdults,
            numberOfChildren,
            packageType
        });

        await newPurchasePackage.save();
        res.status(201).json(newPurchasePackage);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});




app.listen(8888,()=>{
   console.log("Server is connected");
})
