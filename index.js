restaurants> db.restaurants.find()
restaurants> db.restaurants.find({},{"restaurant_id":1, name:1, borough:1, cuisine:1})
restaurants> db.restaurants.find({},{"restaunt_id":1, name:1, borough:1, cuisine:1, _id:0})
restaurants> db.restaurants.find({},{"restaurant_id":1, name:1, borough:1, "address.zipcode":1,_id:0})
restaurants> db.restaurants.find({borough: "Bronx"})
restaurants> db.restaurants.find({borough:"Bronx"}).limit(5)
restaurants> db.restaurants.find({borough:"Bronx"}).skip(5)
restaurants> db.restaurants.find({grades:{$elemMatch:{score:{$gt:90}}}})
restaurants> db.restaurants.find({grades:{$elemMatch:{score:{$gt:90,$lt:100}}}})
restaurants> db.restaurants.find({"address.coord.0":{$lt:-95.754168}})
restaurants> db.restaurants.find({$and:[{grades:{$elemMatch:{score:{$gt:70}}}},{cuisine:{$ne:"American"}},{"address.coord.1":{$lt:-65.754168}}]})
restaurants> db.restaurants.find({grades:{$elemMatch:{score:{$gt:70}}}, cuisine:{$ne:"American"}, "address.coord.1":{$lt:-65.754168}})
restaurants> db.restaurants.find({grades:{$elemMatch:{grade:"A"}}, cuisine:{$ne:"American"},borough:{$ne:"Brooklyn"}})
restaurants> db.restaurants.find({name:{$regex:/^Wil/}},{restaurant_id:1,name:1,borough:1,cuisine:1})
restaurants> db.restaurants.find({name:{$regex:/ces$/}}, {restaurant_id:1,name:1, borough:1, cuisine:1})
restaurants> db.restaurants.find({name:{$regex:/Reg/}}, {restaurant_id:1,name:1, borough:1, cuisine:1})
restaurants> db.restaurants.find({cuisine:{$in:["American","Chinese"]}})
restaurants> db.restaurants.find({borough:{$in:["Staten Island", "Queens", "Bronx", "Brooklyn"]}},{restaurant_id:1,name:1,borough:1, cuisine:1})