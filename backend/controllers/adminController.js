const Admin = require("../models/Admin");
const generateToken = require("../utils/generateToken");

exports.loginAdmin = async (req, res) => {

    try {

        const { username, password } = req.body;

        const admin = await Admin.findOne({ username });

        if (!admin) {

            return res.status(401).json({
                success: false,
                message: "Invalid username or password"
            });

        }

        const isMatch = await admin.matchPassword(password);

        if (!isMatch) {

            return res.status(401).json({
                success: false,
                message: "Invalid username or password"
            });

        }

        res.status(200).json({

            success: true,

            token: generateToken(admin._id),

            username: admin.username

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};