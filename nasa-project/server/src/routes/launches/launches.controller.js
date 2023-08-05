const {getAllLaunches, addNewLaunch} = require('../../models/launches.model')

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches);
}

function httpAddLaunches(req,res) {
    const launch = req.body;

    launch.launcDate = new Date(launch.launchDate);
    addNewLaunch(launch); 
}

module.exports = {
    httpGetAllLaunches,
  };
  