const name = "Junghun",
  age = 24,
  gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, youa are ${age}, you are a ${gender}`);
};

sayHi(name, age);

export {};
