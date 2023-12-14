import coinRouter from "./routers/coinapirouter";

const express = require("express");
const app = express();
require("dotenv").config();
// const mongoDB = require("./db");
var cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cors());
// app.use((req,res,next) => {
//     res.setHeader("Access-Control-Allow-Origin",process.env.REACT_APP_FRONTEND_URL);
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-requested-With, Content-Type, Accept"
//     );
//     next();
//   })
// const userRouter = require("./Routes/UserRouter");
// const planRouter = require("./Routes/PlanRouter");
// mongoDB();
app.use(cookieParser());
app.use(express.json());
// app.use("/user", userRouter);
// app.use("/plan",planRouter);
// console.log(process.env.PORT_NUMBER);
app.use('/coins', coinRouter);

app.listen(8000, () => {
  console.log(`server listening on PORT 8000`);
});
