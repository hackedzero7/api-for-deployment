const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

/**import routers */
const userRoute = require('./router/userRouter');
const property = require('./router/propertyRoutes');
const intrustedUser = require('./router/interustedUserRoute');
const cors = require('cors');
const app = express();
const { isAuthenticated } = require('./middleware/auth');

dotenv.config({
  path: './config/config.env',
});

/**Middlewares */

app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
// app.use(cookieParser());

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods:["GET", "POST", "PUT", "DELETE"]
}))

/**routers */
app.use('/api/v1', userRoute);
app.use('/api/v1', isAuthenticated, property);
app.use('/api/v1', isAuthenticated, intrustedUser);

app.use('/', (req, res) => {
  res.send("api is working")
})

module.exports = app;
