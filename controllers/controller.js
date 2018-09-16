module.exports.controller = app => {
  app.get("/api/users", function(req, res) {
    res.send(JSON.stringify({ userName: "admin" }));
  });
  app.get("/api/dataset/:kind", function(req, res) {
    let jsonData = require(`../dataSet/${req.params.kind}.json`);
    res.send(JSON.stringify(jsonData));
  });
};
