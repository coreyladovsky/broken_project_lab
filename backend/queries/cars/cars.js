const db = require('../../db/index');


const getAllCars = async (req, res, next) => {
    try {
        const cars = await db.any("SELECT * FROM cars");
        res.json({
            status: "success",
            message: "all cars",
            payload: cars 
        })
    } catch(err) {
        // next(err);
        res.json({
            status: "error",
            payload: null, 
            message: err
        })
    }
}

const getSingleCar = async (req, res, next) => {
    try {
        let car = db.one("SELECT * FROM cars WHERE id=$1", [req.params.id])
        res.json({
            status: "success",
            car,
            message: "Received ONE CAR!"
        });
    } catch(err) {
        next(err)
    }
}

const createCar = async (req, res, next) => {
    try {    
        await db.none("INSERT INTO cars (brand, year) VALUES(${brand}, ${year})", req.body)
        res.json({
            status: "succss",
            message: "New car added"
        })
    } catch (err) {        
        res.json({
          status: "error",
          payload: null,
          message: err
        });
    }
}

const deleteCar = async (req, res, next) => {
    try {
        let result = await db.result("DELETE FROM cars WHERE id=$1", req.params.id);
        res.json({
          status: "success",
          message: "You destroyed the car",
          result: result
        });
    } catch(err) {
        next(err)
    }
}

module.exports = { getAllCars, createCar, deleteCar };