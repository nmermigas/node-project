
# NASA Mission Control System 🚀🌌

Note: The README needs to be updated to correspond to the latest  changes in the codebase. As of now some commands may not work as expected. It is currently in progress...

## Overview

The NASA Mission Control System is a Node.js and MongoDB-based application that empowers users to manage and monitor space missions in real-time. This repository houses the source code and documentation for this project.

### Key Features

- Schedule and launch space missions.
- Fetch latest data from the SpaceX API for the latest flight and launch information.
- Track historical missions.
- Efficiently manage missions, including deletion and status marking.
- Optimize application performance using PM2 process management.
- Implement pagination for seamless data retrieval.

## Technologies Used

- Node.js: Backend development for scalability and responsiveness.
- MongoDB: Efficient data storage and retrieval.
- Front-end Integration: Seamlessly integrated front-end with the backend API.
- PM2: Improved application performance and minimized API load.

## Getting Started

### Prerequisites

- Node.js installed on your local machine.
- MongoDB database setup.
- SpaceX API credentials (if required).

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/nasa-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nasa-project
   ```

3. Install server dependencies:

   ```bash
   npm run install-server
   ```

4. Install client dependencies:

   ```bash
   npm run install-client
   ```

5. Configure the application by modifying the `.env` file to include your MongoDB connection details and SpaceX API credentials.

### Starting the Development Servers

- To start the server in development mode (with auto-reloading on code changes):

   ```bash
   npm run server
   ```

- To start the client in development mode (with auto-reloading on code changes):

   ```bash
   npm run client
   ```

- To run both the server and client concurrently in development mode:

   ```bash
   npm run watch
   ```

### Building and Deployment

- To build the client for production:

   ```bash
   npm run build
   ```

- To start the server for deployment:

   ```bash
   npm run deploy
   ```

- To deploy in a cluster mode (for scalability):

   ```bash
   npm run deploy-cluster
   ```

### Testing

- To run tests for the server:

   ```bash
   npm run test --prefix server
   ```

- To run tests for the client:

   ```bash
   npm run test --prefix client
   ```

## Usage

1. Access the application in your web browser.

2. Explore the user-friendly interface to schedule, monitor, and manage space missions.

3. Utilize the SpaceX API integration to stay updated on the latest flight and launch information.

4. Dive into historical mission data for research and analysis.

## Acknowledgments

- Special thanks to the SpaceX API for providing free data on the launches.

## Contact

For inquiries and feedback, please contact [me through my email](mailto:nikosmermigas01@gmail.com).


