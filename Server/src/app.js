const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const authRouter = require("./routes/auth.route");
const taskRouter = require("./routes/task.route");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Logger
morgan.token("status-colored", (req, res) => {
  const status = res.statusCode;

  const color =
    status >= 500 ? 31 ://--red
    status >= 400 ? 33 ://--yellow
    status >= 300 ? 36 ://--//cyan
    status >= 200 ? 32 ://--green
    0;

  return `\x1b[${color}m${status}\x1b[0m`;
});

app.use(
  morgan("\x1b[35m[API]\x1b[0m :method :url :status-colored :response-time ms")
);

// Routes
app.use("/api/auth", authRouter);
app.use("/api", taskRouter);

module.exports = app;