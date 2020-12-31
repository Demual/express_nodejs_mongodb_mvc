// Requires //
const mongoose = require('mongoose');

// Connection Database //
let MONGO_URI = 'mongodb://localhost:27017/database';
mongoose.set('useFindAndModify', false);
mongoose.connect(MONGO_URI || process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('Database is connected'))
    .catch((err) => console.log('Database NOT connected', err));