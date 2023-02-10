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
    ReviewModel.prototype.getReview = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    ReviewModel.prototype.getReviewCount = function (response, filter) {
        console.log("Getting review count");
        var query = this.model.findOne(filter);
        query.exec(function (err, innerReviews) {
            if (err) {
                console.log('error retrieving count');
            }
            else {
                if (innerReviews == null) {
                    response.status(404);
                    response.json('{count: -1}');
                }
                else {
                    console.log('number of tasks: ' + innerReviews.reviews.length);
                    response.json('{count:' + innerReviews.reviews.length + '}');
                }
            }
        });
    };
    return ReviewModel;
}());
exports.ReviewModel = ReviewModel;
