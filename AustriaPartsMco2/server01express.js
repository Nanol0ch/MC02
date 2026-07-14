

const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const { engine } = require("express-handlebars");

const reservationsRoutes = require("./routes/reservations");
const adminRoutes = require("./routes/admin");

const app = express();

mongoose.connect("mongodb://localhost:27017/airroute");

app.engine("hbs", engine({
    extname: "hbs",
    defaultLayout: "main",
    helpers: {
        eq: function (a, b) {
            return a == b;
        }
    }
}));
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false
}));

// Austria's routers
app.use(reservationsRoutes);
app.use(adminRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
