// const launches = require("./launches.mongo");
const launches = new Map();

let latestFlighNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlighNumber++;
  launches.set(
    latestFlighNumber,
    Object.assign(launch, {
      success: true,
      customers: ["ZTM", "NASA"],
      upcoming: true,
      flightNumber: latestFlighNumber,
    })
  );
}

function abortLaunchById(launchId) {
  const aborted = launch.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  abortLaunchById,
};
