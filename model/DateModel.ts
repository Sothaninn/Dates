import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IDateModel} from '../interfaces/iDateModel';
import { STATUS_CODES } from "http";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class DateModel {
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
                name: String,
                description: Number,
                dateId: Number,
                address: String,
                openingHours: String,
                contactInfo: String,
            }, {collection: 'dates'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IDateModel>("Date", this.schema);
    }
    
    public getDateDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
}
export {DateModel};