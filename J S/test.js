const person = {
    firstName: "John",
    age: 50,
    address:{
        state:"plkd",country:"ind"
    }
  };
  const {name,age,address:{state}}=person
  console.log(state);