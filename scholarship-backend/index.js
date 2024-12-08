const express = require('express');
const connect = require('./db');
const cors = require('cors');
const blogs = require("./routes/blogs");
const scholarships = require("./routes/scholarships");
const users = require("./routes/users");

const app = express();
const port = 4001;


app.use(express.json());
app.use(cors({origin : '*'}));
connect.connect();



app.use("/blogs" , blogs.route);
app.use("/scholarships" , scholarships.route);
app.use("/users" , users.route);


app.listen(port, () => {
    console.log(`listening to port ${port}`);
    }
);
