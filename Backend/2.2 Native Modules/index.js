const fs = require("fs");

fs.writeFile("message.text", "hello from angela yu", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.readFile("./message.text", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
