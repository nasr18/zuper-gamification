const { set, connect, disconnect, connection } = require("mongoose");

const dbURI = "mongodb://localhost:27017/gamification";

set("debug", true);

connection.on("connected", () => {
  console.info("Mongoose connection established to DB Clusters.");
});

// connection.on("fullsetup", () => {
//   console.info(
//     "Mongoose has successfully connected to the primary and at least one secondary.",
//   );
// });

connection.on("error", (err) => {
  console.error({ err }, "Mongoose connection error:");
});

connection.on("disconnected", () => {
  console.warn("Mongoose disconnected.");
});

connection.on("reconnected", () => {
  console.warn("Mongoose reconnected.");
});

connection.on("close", () => {
  console.info("Mongoose connection closed.");
});

const doConnect = async () => {
  console.info("doConnect mongodb.");
  return connect(dbURI);
};

const doDisconnect = () => {
  console.warn("doDisconnect mongodb.");
  return disconnect();
};

module.exports = {
  doConnect,
  doDisconnect,
};
