const planets = require("../../models/planets.model");

function getAllPlanets(req,res) {
    return res.status(200).json(planets); //common practice since it stops executing after returning the status code.
}

module.exports = {
    getAllPlanets,
};