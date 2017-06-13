
 // Generic class that can work over a variety of types
 
var generics = (function () {
    function generics(profile) {
        this._profile = profile;
    }
    generics.prototype.greetMessage = function () {
        return "" + JSON.stringify(this._profile);
    };
    return generics;
}());
// Object creation generic type of class
var Config = new generics({ xpID: "khan" });
var xpid = JSON.parse(Config.greetMessage());
console.log(xpid);
// Object creation generic type of class
var Profile = new generics({ xpID: "khan", username: "shaquib" });
var info = JSON.parse(Profile.greetMessage());
console.log(info);