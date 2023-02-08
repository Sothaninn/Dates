import Mongoose = require("mongoose");

interface IReviewModel extends Mongoose.Document {
    dateId: number;
    reviews: [ {
        reviewId: number;
        title: string;
        description: string;
        mediaId: number //media attatchments
        priceLevel: number;
    }];
}
export {IReviewModel};
