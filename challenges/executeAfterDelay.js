const printHello = () => {
  console.log('Hello!');
}

const executeAfterDelay = (seconds, hellofunction) => {
  setTimeout(hellofunction, seconds * 1000);
}

executeAfterDelay(5, printHello);
