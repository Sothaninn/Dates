"use strict";
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var bodyParser = require("body-parser");
var DateModel_1 = require("./model/DateModel");
var ReviewModel_1 = require("./model/ReviewModel");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
        this.Dates = new DateModel_1.DateModel();
        this.Reviews = new ReviewModel_1.ReviewModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        //retreive info of single date
        router.get('/app/date/:dateId', function (req, res) {
            var id = req.params.dateId;
            console.log('Query single date with id: ' + id);
            _this.Dates.getDateDetails(res, { dateId: id });
        });
        //api route retrieve total reviews
        router.get('/app/reviewcount', function (req, res) {
            console.log('Query num reviews in db');
            _this.Reviews.getReviewCount(res);
        });
        router.get('/app/review/:reviewId', function (req, res) {
            var id = req.params.reviewId;
            console.log('Query single review with review id: ' + id);
            _this.Reviews.getReviews(res, { reviewId: id });
        });
        this.express.use('/', router);
        this.express.use('/', express.static(__dirname + '/pages'));
        this.express.use('/app/json/', express.static(__dirname + '/app/json'));
        this.express.use('/images', express.static(__dirname + '/img'));
        this.express.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
