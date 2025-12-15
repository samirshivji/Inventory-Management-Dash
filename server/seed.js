import bcrypt from 'bcrypt';
import User from './models/User.js';
import connectDB from './database/connections.js';

const register = async () => {
    try {
        connectDB();
        const hashPassword = await bcrypt.hash("admin", 10);
        const newUser = new User({
            name: "admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin"
        })
    await newUser.save();
    console.log("Admin user created successfully");
    } catch (error) {
        console.log(error);
    }
}

register();