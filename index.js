//        MUDULES
const express = require('express');
const home_router = require('./routes');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
//      EXPRESS
const app = express();
//      PORT
const PORT = process.env.PORT || 5000;

//      SETTINGS
app.set('view engine','ejs');
//      CONNECTING TO MONGOBD
const CONNECTION_STRING = "mongodb+srv://chridoio7:test1234@cluster0.4emee4r.mongodb.net/Blogs?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then((response) => {
  console.log('Connected to MongoDB');
  app.listen(PORT, (err) => {
    if (err) {
      throw err;
    } else {
      console.log(`Server running on port ${PORT}`);
    }
  });
})
.catch((error) => {
  console.error('Error connecting to the database:', error);
});
//        MIDDLE WARE 
app.use('/',home_router)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
//    LISTENING
app.use((req,res) => {
  res.status(404).render('404.ejs')
})
