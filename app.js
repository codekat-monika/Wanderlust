if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
// console.log(process.env);
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
// const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
// const { ListingSchema, reviewSchema } = require("./schema.js");
// const Review = require("./models/review.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

// const port = 8080;

// SETTING OF CONNECTION WITH DB
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
// const dbUrl = process.env.ATLASDB_URL;
// main()
//   .then(() => {
//     console.log("connected to db");
//   })
//   .catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect(dbUrl);
// }

// const mongoose = require("mongoose");

const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("✅ Connected to DB");
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err);
  });

async function main() {
  await mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true, // ✅ Force TLS
    tlsAllowInvalidCertificates: false,
    serverSelectionTimeoutMS: 10000, // ✅ Don’t hang forever
  });
}

// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });

app.get("/", (req, res) => {
  res.redirect("/listings");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.json());

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", () => {
  console.log("ERROR IN MONGO-SESSION STORE", err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  // console.log(res.locals.success);
  res.locals.currUser = req.user;
  next();
});

// app.get("/demouser", async (req, res) => {
//   let fakeUser = new User({
//     email: "student@gmail.com",
//     username: "delta-student",
//   });

//   let registeredUser = await User.register(fakeUser, "helloworld");
//   res.send(registeredUser);
// });

// This code adds a test house listing (a villa) to your
//  MongoDB and shows a success message when you open
// /testListing in your browser.
// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     image:
//       "https://unsplash.com/photos/a-person-hikes-towards-a-house-in-the-mountains-NRSqHq7gLbM",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("successful testing");
// });

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// app.post("/listings", (req, res) => {
//   console.log("Received:", req.body);
//   res.send("Listing received");
// });

//giving error
// app.all("*", (req, res, next) => {
//   next(new ExpressError(404, "Page Not Found!"));
// });
// app.use((err, req, res, next) => {
// const { statusCode = 500, message = "error" } = err;
// let { statusCode, message } = err;
// res.send("Something went wrong!");
// res.status(statusCode).send(message);
// });

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Something went wrong!";
  res.status(statusCode).send(err.message);
});

app.listen(8080, () => {
  console.log("server is listening: 8080");
});
