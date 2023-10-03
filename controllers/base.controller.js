function getHome(req, res) {
  res.render("home");
}

function getString(req, res) {
  const string = "Dupa" 
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ string: string }));

}

module.exports = { getHome: getHome, getString: getString };
