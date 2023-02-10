"use strict";
exports.__esModule = true;
exports.DateModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var DateModel = /** @class */ (function () {
    function DateModel() {
        this.createSchema();
        this.createModel();
    }
    DateModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            name: String,
            description: String,
            dateId: Number,
            address: String,
            openingHours: String,
            contactInfo: String
        }, { collection: 'dates' });
    };
    DateModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Date", this.schema);
    };
    DateModel.prototype.getDateDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    DateModel.prototype.getAllDates = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return DateModel;
}());
exports.DateModel = DateModel;
