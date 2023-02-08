import Mongoose = require("mongoose");

interface IDateModel extends Mongoose.Document {
    name: string;
    description: string;
    dateId: number;
    address: string;
    openingHours: string;
    contactInfo: string;
}
export {IDateModel};
