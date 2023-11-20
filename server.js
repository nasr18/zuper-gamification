const { createServer } = require("http");

const app = require("./app");
const mongooseConfig = require("./mongoose");

const port = process.env.PORT ?? 3000;
const server = createServer(app);

process.on("uncaughtException", (err) => {
  console.error("Uncaught exception", err);
  shutdownProperly(1);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection at promise", reason);
  shutdownProperly(2);
});

process.on("SIGINT", () => {
  console.info("Caught SIGINT");
  shutdownProperly(128 + 2);
});

process.on("SIGTERM", () => {
  console.info("Caught SIGTERM");
  shutdownProperly(128 + 2);
});

process.on("exit", () => {
  console.info("Exiting");
});

function shutdownProperly(exitCode) {
  Promise.resolve()
    .then(() => server.close())
    .then(() => mongooseConfig.doDisconnect())
    .then(() => {
      console.info("Shutdown complete");
      process.exit(exitCode);
    })
    .catch((err) => {
      console.error("Error during shutdown", err);
      process.exit(1);
    });
}

mongooseConfig
  .doConnect()
  .then(() => {
    console.log("DB connection established!!!");

    server.listen(port, () =>
      console.log("Zuper server running on port ", port),
    );
  })
  .catch((err) => console.error({ err }, "Mongoose connection error"));

// server.listen(port, () => console.log("Zuper server running on port ", port));
