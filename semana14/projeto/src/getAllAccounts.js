var fs = require('fs');
var fileName = "../accounts.json";
try {
    var data = fs.readFileSync(fileName);
    var treatedData = data.toString();
    console.log(treatedData);
}
catch (err) {
    console.log(err);
}
