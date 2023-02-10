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
    
    public getReviews(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public getReviewCount(response:any): any {
        console.log("Get List Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numReviews) => {
            console.log("numReviews: " + numReviews);
            response.json(numReviews) ;
        });
    }
}
export {ReviewModel};