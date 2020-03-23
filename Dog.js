var chalk = require('chalk');
function Dog(name){
    this.name = name;
    this.stomach = [];
};
Dog.prototype.eat = function(smth){
    this.stomach.push(smth);
}   

Dog.prototype.sayHi = function(){
    console.log('Hi everyone. I am very happy to be in front of you guys. My name is ' + chalk.red(this.name));
}
module.exports = Dog;