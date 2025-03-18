import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
  .prompt([
    {
      name: "URL",
      message: "Enter a valid URL:",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const qrCode = qr.image(url, { type: "png" });
    const fileName = "qr-code.png";
    qrCode.pipe(fs.createWriteStream(fileName));
  })
  .catch((error) => {
    throw error;
  });
