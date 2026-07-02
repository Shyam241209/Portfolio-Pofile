const mongoose = require('mongoose');
const Contact = require('./models/contact');

const MONGODB_URI = 'mongodb://localhost:27017';
(async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('db-test: Connected to MongoDB');
    const c = new Contact({ name: 'DBTestUser', email: 'dbtest@local', subject: 'DB Test', message: 'Inserted by db-test script' });
    const saved = await c.save();
    console.log('db-test: saved contact id=', saved._id.toString());
    const count = await Contact.countDocuments();
    console.log('db-test: total contacts count =', count);
    await mongoose.disconnect();
    console.log('db-test: disconnected');
    process.exit(0);
  } catch (err) {
    console.error('db-test error:', err.message || err);
    try { await mongoose.disconnect(); } catch (e) {}
    process.exit(1);
  }
})();
