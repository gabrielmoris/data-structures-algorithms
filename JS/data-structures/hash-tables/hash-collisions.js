let user = {
  age: 55,
  name: "Miguel",
  magic: true,
  scream: function () {
    console.log(`I am ${this.name}!!!`);
  },
};

user.name; //O1
user.spell = "abra kadabra!"; //O1
user.scream(); //O1

//It can happen that there is a hash collision (same memory allocation for 2 different datas).
// In that case instead O(1) it would be O(n)
