import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IReviewModel} from '../interfaces/iReviewModel';
import { STATUS_CODES } from "http";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class ReviewModel {
    public schema:any;
    public innerSchema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                dateId: Number,
                reviews: [
                    {
                        reviewId: Number,
                        title: String,
                        description: String,
                        mediaId: Number,
                        priceLevel: Number,
                    }        
                ]
            }, {collection: 'reviews'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IReviewModel>("Review", this.schema);
    }
    
    public getReview(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public getReviewCount(response:any, filter:Object) {
        console.log("Getting review count")
        var query = this.model.findOne(filter);
        query.exec( (err, innerReviews) => {
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
    }
}
export {ReviewModel};