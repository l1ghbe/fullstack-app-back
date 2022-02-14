const mongoose = require('mongoose')
const connectDB = () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected', connect.connection.host .cyan.underline)
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}

module.exports = connectDB