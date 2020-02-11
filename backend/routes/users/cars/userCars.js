const userCarsRouter = require("express").Router({mergeParams: true});
const { allCarsForOneUser } = require("../../../queries/users/cars/userCars");

userCarsRouter.get("/cars", allCarsForOneUser)

module.exports = userCarsRouter;