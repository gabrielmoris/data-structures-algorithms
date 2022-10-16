const strings = ["a", "b", "c", "d"];
const stringsReallyAre = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
};
// 4 items taking 4 shells of store = 16 bytes of storage

strings[2]; //O(1)

//push
strings.push("e"); //O(1) If dynamic array needs to be allocated O(n)

//pop
strings.pop(); //O(1)

//unshift
strings.unshift("x"); //O(n) I have to change all indexes after I put x at the begginning

//splice
strings.splice(2, 0, "alien"); //O(n), I also have to change indexes. Args(where I divide, how many items I delete, item added)
