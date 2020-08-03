// Classes
const option = {
  name: "End",
  age: 20,
  gender: "남성",
};
class Human {
  constructor(option) {
    this.humanname = option.name;
    this.age = option.age;
    this.gender = option.gender;
    this.jong = "cat";
    this.arm = 2;
  }
  say() {
    console.log("Talk");
  }
}

const firstUser = new Human(option);
const secUser = new Human("Vins", 20, "남성");
console.log(firstUser.humanname, firstUser.age, firstUser.gender);

class Baby extends Human {
  constructor(humanOption, admin) {
    super(humanOption);
    this.admin = admin;
  }
  bye() {
    console.log("Bye");
  }
}

const thirdUser = new Baby(option);
console.log(thirdUser);
thirdUser.say();
thirdUser.bye();
