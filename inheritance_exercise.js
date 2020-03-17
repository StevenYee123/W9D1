// Function.prototype.inherits = function(parentClass) {
//     function Surrogate(){};
//     Surrogate.prototype = parentClass.prototype; 
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this; 
// }

Function.prototype.inherits = function(parentClass){
    //Creates new instance of specified object 
    this.prototype = Object.create(parentClass.prototype);
    this.prototype.constructor = this;
}
