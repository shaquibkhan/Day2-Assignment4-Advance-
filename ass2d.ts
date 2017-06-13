/**
 * Created by USER on 10/06/2017.
 */
/**
 * configuration interface contract
 */
interface Configuration {
    xpID: string;
}

/**
 * Login interface contract
 */
interface Login {
    xpID: string;
    username: string;
}
/**
 * Generic class that can work over a variety of types
 */
class generics<T> {
    _profile: T

    constructor(profile: T) {
        this._profile = profile
    }

    greetMessage(): any {
        return `${JSON.stringify(this._profile)}`;
    }
}
// Object creation generic type of class
let Config = new generics<Configuration>({xpID: "khan"});
let xpid = JSON.parse(Config.greetMessage());
console.log(xpid);
// Object creation generic type of class
let Profile = new generics<Login>({xpID: "khan", username: "shaquib"});
let info = JSON.parse(Profile.greetMessage());
console.log(info)