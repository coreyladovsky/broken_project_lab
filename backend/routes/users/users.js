const usersRouter = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  deleteUser,
  createUser
} = require("../../queries/users/users");
const userCarRouter = require("./cars/userCars");

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getSingleUser);
usersRouter.delete("/:id", deleteUser);
usersRouter.post("/", createUser)
usersRouter.use("/id/cars", userCarRouter)

module.exports = usersRouter;
