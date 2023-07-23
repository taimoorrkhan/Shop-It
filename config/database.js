const {connect} =   require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const connectDB = () => {
  connect(process.env.DB_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  }).then(con => {
    console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
  }).catch
    (err => {
      console.log(err);
      process.exit(1);
    });
}


module.exports = connectDB;