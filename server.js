const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/database');


// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();


app.listen(process.env.PORT, () => {
  console.log('App running on port 4000...');
}
);