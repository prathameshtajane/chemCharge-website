module.exports=function (app) {
    app.post("/admin/login",findUserByCredentials);
    console.log("user.service.server.js initialted successfully");

    function findUserByCredentials(req,res){

        adminUsername="admin";
        adminPassword="admin";

        userCredentialsparams=req.body;
        username=userCredentialsparams.username;
        password=userCredentialsparams.password;

        if(username == adminUsername && password==adminPassword){
        console.log("User Authentication succesful");
            res.send(200);}else{
            console.log("User Authentication failed");
            res.send(404);
        }
    }
};

