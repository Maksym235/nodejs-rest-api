const { Schema, model } = require("mongoose");

const MongooseError = require("../../Helpers/MongooseError");

const contacts = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contacts.post("save", MongooseError);
const Contacts = model("Contacts", contacts);
module.exports = Contacts;
