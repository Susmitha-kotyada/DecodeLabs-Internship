const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Admin = require("../models/Admin");
const connectDB = require("../config/db");

dotenv.config();
connectDB();

const createAdmin = async () => {
    try {
        const adminExists = await Admin.findOne({
            username: "admin"
        });
        if (adminExists) {
            console.log("Admin already exists");
            process.exit();
        }
        await Admin.create({

            username: "admin",
            password: "explorebharat123"

        });
        console.log("Admin created successfully");
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

createAdmin();