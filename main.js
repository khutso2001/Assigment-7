//.then().catch()

function mySetTimeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
//reject არ დამიწრია იმიტომ რომ პირობაში არაფერი არ იყო მასზე მაგრამ შემეძლო დამეწერა მაგალითად მსგავსად
// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.2) {
//        resolve();
//     } else {
//       reject('rejected');
//     }
//   }, delay);
// });
function toyMake(makingTime = 3000) {
  return mySetTimeout(makingTime).then(() => {
    console.log("It takes 3 seconds to make a toy");
    return "make a toy";
  });
}

function deliverToys(deliveryTime = 2000) {
  return mySetTimeout(deliveryTime).then(() => {
    console.log("It takes 2 seconds to delivery a toy");
    return "delivery a toy";
  });
}

function sellToys(sellTime = 1000) {
  return mySetTimeout(sellTime).then(() => {
    console.log("It takes 1 seconds to selling a toy");
    return "selling a toy";
  });
}

toyMake()
  .then(() => deliverToys())
  .then(() => sellToys())
  .then(() => {
    console.log(
      "The toy was successfully made, reached the addressee and was sold"
    );
  })
  .catch((error) => {
    console.error(error);
  });

//async/await

function mySetTimeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
async function toyMake(makingTime = 3000) {
  await mySetTimeout(makingTime).then(() => {
    console.log("It takes 3 seconds to make a toy");
    return "make a toy";
  });
}

async function deliverToys(deliveryTime = 2000) {
  await mySetTimeout(deliveryTime).then(() => {
    console.log("It takes 2 seconds to delivery a toy");
    return "delivery a toy";
  });
}

async function sellToys(sellTime = 1000) {
  await mySetTimeout(sellTime).then(() => {
    console.log("It takes 1 seconds to selling a toy");
    return "selling a toy";
  });
}

async function myToys() {
  try {
    await toyMake();
    await deliverToys();
    await sellToys();
    console.log(
      "The toy was successfully made, reached the addressee and was sold"
    );
  } catch (error) {
    console.error(error);
  }
}

myToys();
