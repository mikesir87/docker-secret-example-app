const express = require('express');
const fs = require('fs');

const app = express();


app.get('/', (req, res) => {
  fs.readFile('/run/secrets/db-password', (err, contents) => {
    if (err && err.code == 'ENOENT') {
      console.log(err);
      return res.status(400).send("File /run/secrets/db-password doesn't exist");
    }

console.log(contents);
    res.send("Database password: " + contents);
  });
});

app.listen(3000, () => console.log("Server now listening to port 3000"));
