const launchesDatabase = require("./launches.mongo");
const planets = require("./planets.mongo");

const launches = new Map();
const DEAFULT_FLIGHT_NUMBER = 100;

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

saveLaunch(launch);

async function existsLaunchWithId(launchId) {
  return await launchesDatabase.findOne({ flightNumber: launchId });
}

async function getLatestFlightNumber() {
  const latestLaunch = await launchesDatabase.findOne().sort("-flightNumber"); // - because we want descending order
  if (!latestLaunch) {
    return DEAFULT_FLIGHT_NUMBER;
  }
  return latestLaunch.flightNumber;
}

async function getAllLaunches() {
  return await launchesDatabase.find({}, { _id: 0, __v: 0 });
}

async function saveLaunch(launch) {
  const planet = await planets.findOne({
    keplerName: launch.target,
  });

  if (!planet) {
    throw new Error("No matching planet found");
  }

  await launchesDatabase.findOneAndUpdate(
    // it will only return the properties we set
    {
      flightNumber: launch.flightNumber, //acts as a filter, eg. if the flighNumbers match, then it will just update (upsert). else, it will create a new launch object
    },
    launch,
    {
      upsert: true,
    }
  );
}

// function to add some default properties when creating a new launch
async function scheduleNewLaunch(launch) {
  const newFlightNumber = (await getLatestFlightNumber()) + 1;
  const newLaunch = Object.assign(launch, {
    success: true,
    upcoming: true,
    customers: ["ZTM", "NASA"],
    flightNumber: newFlightNumber,
  });

  await saveLaunch(newLaunch);
}

async function abortLaunchById(launchId) {
  const aborted = await launchesDatabase.updateOne(
    {
      flightNumber: launchId,
    },
    {
      upcoming: false,
      success: false,
    }
  );

  return aborted.modifiedCount === 1;
}

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  scheduleNewLaunch,
  abortLaunchById,
};
