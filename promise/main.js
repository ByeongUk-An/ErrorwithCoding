const name = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, "Error Test Message");
});

name.then((value) => console.log(value)).catch((value) => console.log(value));
