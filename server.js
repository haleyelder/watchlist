require('dotenv').config()
const express = require('express'); 
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001; 
const router = require('./routes/index');


const app = express(); 
// app.use(cors())
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use('/api', router); 

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useFindAndModify: false }); 
mongoose.connection.once('open', function() { 
  console.log('Connected to the Database.');
});
mongoose.connection.on('error', function(error) {
  console.log('Mongoose Connection Error : ' + error);
});

// if (process.env.NODE_ENV === 'production') {           
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

app.listen(PORT, function() { 
  console.log(`Server listening on port ${PORT}.`);
});