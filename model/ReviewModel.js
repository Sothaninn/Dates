"use strict";
exports.__esModule = true;
exports.ReviewModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var ReviewModel = /** @class */ (function () {
    function ReviewModel() {
        this.createSchema();
        this.createModel();
    }
    ReviewModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            dateId: Number,
            reviews: [
                {
                    reviewId: Number,
                    title: String,
                    description: String,
                    mediaId: Number,
                    priceLevel: Number
                }
            ]
        }, { collection: 'reviews' });
    };
    ReviewModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Review", this.schema);
    };
    ReviewModel.prototype.getReviews = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    ReviewModel.prototype.getReviewCount = function (response) {
        console.log("Get List Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numReviews) {
            console.log("numReviews: " + numReviews);
            response.json(numReviews);
        });
    };
    return ReviewModel;
}());
exports.ReviewModel = ReviewModel;
