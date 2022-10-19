let counter = 0;

const increment = () => {
  while (counter >= 0) {
    counter += 1
    console.log(`${counter}`);
  }
}

setInterval(increment, 2000); // increment will execute every 2 seconds