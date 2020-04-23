"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var arg1 = process.argv[2];
var arg2 = process.argv[3];
var arg3 = process.argv[4];
var baseUrl = "https://jsonplaceholder.typicode.com/posts/";
var firstPromise = axios_1["default"].get(baseUrl + arg1.toString());
var secondPromise = axios_1["default"].get(baseUrl + arg2.toString());
var thirdPromise = axios_1["default"].get(baseUrl + arg3.toString());
Promise.all([firstPromise, secondPromise, thirdPromise]).then(function (result) {
    result.map(function (post) {
        console.log("Titulo do Post: ", post.data.title);
    });
})["catch"](function (err) {
    console.log(err);
});
