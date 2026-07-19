const Contact = require("../models/Contact");

exports.addContact = async (req, res) => {

    try {

        const contact = await Contact.create(req.body);

        res.status(201).json({
            success: true,
            message: "Message sent successfully!"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};