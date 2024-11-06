// REFERENCE TYPE
// Arrays or objects are not primitives in JS, that means that they are created by the language
// Instead of saving a value in a variable, they reference the memory
import chalk from "chalk";

var obj1 = { value: 1 };
var obj2 = obj1;
var obj3 = { value: 1 };

console.log(
  chalk.blue("obj1 === obj2 ="),
  obj1 === obj2,
  chalk.green(". Is True because they point to the same memory rerefence"),
  "\n",
  chalk.blue("obj1 === obj3 ="),
  obj1 === obj3,
  chalk.green(". Is False because they point to a different memory rerefence even if the value is the same."),
  "\n",
  chalk.blue("obj1.value === obj3.value = "),
  obj1.value === obj2.value,
  chalk.green(". Is True because they compare the values and are the same."),
  "\n",
  chalk.blue("obj1.value = 5.changing obj1.value to"),
  (obj1.value = 5),
  chalk.blue("makes obj2 also change to"),
  obj2.value,
  chalk.green(". It changes because the reference of obj2 is the same as obj1.")
);

// CONTEXT VS SCOPE
function log1() {
  let a = 1;
}

// console.log(a); will not log the value inside of the function due to different scope

// The context shows where you are within an Object. In the browser would be the window object
class ThisIsThis {
  data: { data: string };
  length: number;
  constructor() {
    this.data = { data: "someData" };
    this.length = 1;
  }
  logThis() {
    console.log(chalk.green("Logging This:"), "\n");
    console.log(this);
  }
}
const that = new ThisIsThis();

that.logThis();
console.log(chalk.yellow("Now I change the context using Bind"));
const boundLogThis = that.logThis.bind(this);
boundLogThis();

// INSTANTIATION:
// Making a copy of an object and reuse the code

class Player {
  name: string;
  type: string;
  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(chalk.gray(`Hi I am ${this.name} and I am a ${this.type}`));
  }
}

// Now I want to do an Instance
class Wizard extends Player {
  constructor(name: string, type: string) {
    super(name, type);
  }
  play() {
    console.log(chalk.gray(`I am ${this.type} and I can use Magic`));
  }
}

const wizard1 = new Wizard("Pepe", "Healer");
const wizard2 = new Wizard("Jose Luis", "Tank");

wizard1.introduce();
wizard2.play();

// Actually the classes are sintactic sugar. This would be the Classic Inheritance Version

// Player constructor function
function ClassicPlayer(this: any, name: any, type: any) {
  this.name = name;
  this.type = type;
}

// Adding method to Player prototype
ClassicPlayer.prototype.introduce = function () {
  console.log(chalk.gray(`Hi I am ${this.name} and I am a ${this.type}`));
};

// Wizard constructor function
function ClassicWizard(this: any, name: string, type: string) {
  // Call the parent constructor
  ClassicPlayer.call(this, name, type);
}

// Set up inheritance
ClassicWizard.prototype = Object.create(ClassicPlayer.prototype);
ClassicWizard.prototype.constructor = ClassicWizard;

// Adding method specific to Wizard
ClassicWizard.prototype.play = function () {
  console.log(chalk.gray(`I am ${this.type} and I can use Magic`));
};

// Creating instances
const classicWizard1 = new (ClassicWizard as any)("Classic Pepe", "classic Healer");
const classocWizard2 = new (ClassicWizard as any)("Classic Jose Luis", "classic Tank");

// Using methods
classicWizard1.introduce();
classocWizard2.play();
