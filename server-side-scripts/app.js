module.exports=function (app) {
  require("./services/user.service.server")(app);
  require("./services/calculations.service.server")(app);
  console.log("server-side-scripting app.js initiated");
};
