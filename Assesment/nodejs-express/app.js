const { send } = require("process");

express = require("express");
app = express();

employee = require("./emp.json");


app.get("/details", function(req, res)
{
    nameList = [];
    employee.forEach(element =>
    {
        nameList.push(element.name) 
    });
    res.send(nameList);
})


app.get("/searchByCity", function(req, res)
{
    keyword = req.query.eCity;
    searchCity = [];
    employee.forEach(element =>
    {
        if(keyword == element.city)
        {
            searchCity.push(element.name); 
        }
    });
    res.send(searchCity);
})


app.get("/searchByType", function(req, res)
{
    keyword = req.query.eType;
    searchType = [];
    employee.forEach(element =>
    {
        if(keyword == element.type)
        {
            searchType.push(element.name);
        }
    });
    res.send(searchType);
})


app.get("/searchBySalary", function(req, res)
{
    keyword = req.query.eSalary;
    searchSalary = [];
    employee.forEach(element =>
    {
        if(keyword == element.type)
        {
            searchSalary.push(element.name);
        }
    });
    res.send(searchSalary);
})

app.listen(3000, function(req, res)
{
    console.log("Server listening to port 3000");
})
