const mongoose = require('mongoose');

// to access the environment variables
const dotenv = require('dotenv');
dotenv.config();

// connecting to database
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Database Connected');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
