db = db.getSiblingDB('dateSample')
db.createCollection('dates')
listsCollection = db.getCollection("dates")
listsCollection.remove({})
listsCollection.insert(
{
	  name: "Bateau",
	  description: "Steak House",
	  dateId: 1,
	  address: "1040 E Union St, Seattle, WA 98122",
	  openingHours: "5pm-10pm",
	  contactInfo: "206-900-8699"
}
)
listsCollection.insert(
{
    name: "AMC Pacific Place 11",
    description: "Theatre",
    dateId: 2,
    address: "600 Pine St, Seattle, WA 98101",
    openingHours: "11am-11pm",
    contactInfo: "amctheatres.com"
}
)
listsCollection.insert(
{
	  name: "Seattle Bouldering Project Poplar",
	  description: "Rock-climbing gym",
      dateId: 3,
      address: "900 Poplar PI S, Seattle, WA 98144",
      openingHours: "6am-11pm",
      contactInfo: "206-299-2300"
}
)
db.createCollection('reviews')
tasksCollection = db.getCollection("reviews")
tasksCollection.remove({})
tasksCollection.insert(
{
	dateId : 1,
	reviews : [
	 {
	  reviewId: 1,
      title: "It did not disappoint!",
      description: "HIGHLY recommend for an intimate and immersive fine dining experience!",
	  mediaId: 1,
	  priceLevel: 100
	 },
	 {
        reviewId: 2,
        title: "Fantastic food and even better service",
        description: "We got the croquettes, the beef fat brioche, and the aligot. Absolutely loved each of those dishes especially the aligot!",
        mediaId: 2,
        priceLevel: 100
	 },
	 {
        reviewId: 3,
        title: "Loved the vibe and helpful service",
        description: "Nori butter on 182 day dry aged ribeye might be genius. Only criticism is that judging from the lackluster old fashioned, I would say the cocktails are probably worth skipping here.",
        mediaId: 3,
        priceLevel: 100
	 },
	 {
        reviewId: 4,
        title: "Delicious food, friendly staff and great service.",
        description: "The Tres mers was delicious with mashed potatoes. My friend did not enjoy the prime tip as much, more of a 3.5/5 taste.",
        mediaId: 4,
        priceLevel: 100
	 },
	 {
        reviewId: 5,
        title: "Unimpressed with the experience given the cost.",
        description: "Forgotten birthday card, overcooked fries, way overcooked steak, and the portions were very little for price.",
        mediaId: 5,
        priceLevel: 100
	 }
	]
}
)
tasksCollection.insert(
{
	dateId : 2,
	reviews : [
	 {
	  reviewId: 1,
      title: "Pleased with my experience",
      description: "The theater was spotlessly clean, the seats were comfortable, and the staff was friendly and helpful.",
	  mediaId: 1,
	  priceLevel: 20
	 },
	 {
        reviewId: 2,
        title: "There is something special about the theater experience",
        description: "Convenient location, generally clean, a welcoming staff and decent enough snacks and candy.",
        mediaId: 2,
        priceLevel: 30
	 },
	 {
        reviewId: 3,
        title: "Overall I was impressed with this movie theater.",
        description: "I really liked that we had to select our seats on a seating chart, and also that they automatically blocked off seats on either side of ours to allow for distancing between us and other people.",
        mediaId: 3,
        priceLevel: 25
	 },
	 {
        reviewId: 4,
        title: "Pretty solid choice for movies downtown.",
        description: "Plenty of screens, fantastic decor, friendly staff, definitely not too crowded during weekdays. The food choices are good, not *great*, and condiments are fair.",
        mediaId: 4,
        priceLevel: 30
	 },
	 {
        reviewId: 5,
        title: "AMC really needs to revamp the seating.",
        description: "It's great they're doing reserved seating, but stadium style seating is outdated. The rows are too tight.",
        mediaId: 5,
        priceLevel: 30
	 }
	]	
}
)
tasksCollection.insert(
{
	dateId : 3,
	reviews : [
	 {
	  reviewId: 1,
      title: "Great bouldering gym.",
      description: "The classes offered are awesome. Staff are super friendly. Great place to get into climbing and train.",
	  mediaId: 1,
	  priceLevel: 20
	 },
	 {
        reviewId: 2,
        title: "Great place to hang out.",
        description: "Lots of walls to climb and they are reset pretty regularly. Weight/work out area is good and they have a lot of times and classes to choose from.",
        mediaId: 2,
        priceLevel: 20
	 },
	 {
        reviewId: 3,
        title: "I never knew climbing could be so fun until I came to SBP poplar.",
        description: "They have good fans, but no AC, so it can get hot in the summer. I go early so this isn't a problem.",
        mediaId: 3,
        priceLevel: 20
	 },
	 {
        reviewId: 4,
        title: "My rating is 4.5/5",
        description: "It's a great gym - accessible, multiple floors, a variety of holds and styles, and friendly for people of all levels.",
        mediaId: 4,
        priceLevel: 20
	 },
	 {
        reviewId: 5,
        title: "Super underwhelming gym, did not live up to the hype.",
        description: "Got charged for a full rate for a half open gym, no notice of this on their website. There were exposed holds that could easily cut your skin if you fell or slipped on them.",
        mediaId: 5,
        priceLevel: 20
	 }
	]	
}
)