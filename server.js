const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const port = process.env.PORT || 5050;

const app = express();

app.use(cookieParser('random'));

app.use(session({
    
}))

app.use((req, res, next) => {
    console.log('incoming request');
    console.log(port);

    next();
})

app.use("/user", require("./routes/ums"));
app.use("/api", require("./routes/api"));
app.use("/ums", require("./routes/ums"));

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})

// const express = require('express');
// const app = express();

// const port = process.env.PORT || 5050;

// app.use((req, res, next) => {
//     console.log('incoming request');
//     console.log(port);

//     next();
// })

// app.listen(port, () => {
//     console.log(`server is running on ${port}`);
// })

// app.use("/api", require("./routes/api"));
