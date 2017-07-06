module.exports=function (app) {
    app.post("/admin/calculations/battery-size",calculateBatterySize);
    console.log("calculations.service.server.js initiated successfully");

    function calculateBatterySize(req,res){
        var capPerModule=6.5;
        var marginFactForEstCost = 1.2;
        calculatedBatteryParameters={};
        var capacity=req.body.capacity;
        var costPerModule=req.body.costPerModule;
        var numOfModulesPerStack=Math.ceil(capacity/capPerModule);
        var numOfTotalModules=(2*numOfModulesPerStack);
        var estimatedCostWOCasing=costPerModule*numOfTotalModules*marginFactForEstCost;
        calculatedBatteryParameters={"numOfModulesPerStack":numOfModulesPerStack,
                                      "numOfTotalModules":numOfTotalModules,
                                      "estimatedCostWOCasing":estimatedCostWOCasing};
        res.json(calculatedBatteryParameters);
    }
};
