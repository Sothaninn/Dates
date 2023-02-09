import * as path from 'path';
import * as express from 'express';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import {DateModel} from './model/DateModel';
import {ReviewModel} from './model/ReviewModel';


// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;
  public Dates:DateModel;
  public Reviews:ReviewModel;


  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.Dates = new DateModel();
    this.Reviews = new ReviewModel();
    
    
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

    //retreive info of single date
    router.get('/app/date/:dateId', (req, res) => {
      var id = req.params.dateId;
      console.log('Query single date with id: ' + id);
      this.Dates.getDateDetails(res, {dateId: id})
    });

    //api route retrieve total reviews
    router.get('/app/reviewcount', (req, res) => {
      console.log('Query num reviews in db');
      this.Reviews.getReviewCount(res)
    });

  this.express.use('/', router);
  this.express.use('/', express.static(__dirname+'/pages'));

  this.express.use('/app/json/', express.static(__dirname+'/app/json'));
  this.express.use('/images', express.static(__dirname+'/img'));
  this.express.use('/', express.static(__dirname+'/pages'));
  }

}

export {App};
