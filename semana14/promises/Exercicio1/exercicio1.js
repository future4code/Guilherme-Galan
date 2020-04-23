"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var handleFileRead = function (err, file) {
    if (err) {
        console.error(err);
        return;
    }
    var fileContent = file.toString();
};
var arrayFiles = fs_1.readdir("../textos", function (err, files) {
    if (err) {
        console.log(err);
        return;
    }
    else {
        files.map(function (file) {
            fs_1.readFile(file, handleFileRead);
        });
    }
});
var myPromise = new Promise(function (resolve, reject) {
    var result = arrayFiles.map(function (text) {
        return text;
    });
    resolve(result);
});
myPromise.then(function (result) {
    console.log(result);
})["catch"](function (error) {
    console.log(error);
});
