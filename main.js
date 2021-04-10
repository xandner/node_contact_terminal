const fs = require("fs");
const yargs = require("yargs");

const {addContact} = require('./contact');

yargs.command({
  command: "create",
  aliases: ["c", "ct"],
  describe: "[ create new contact ]",
  builder: {
    fullname: {
      describe: "person full name",
      demandOption: true,
      type: "string",
      alias: "f",
    },
    phone: {
      alias: "p",
      describe: "person phone number",
      demandOption: true,
      type: "number",
    },
    email: {
      alias: "e",
      describe: "person email",
      demandOption: true,
      type: "string",
    },
  },
  handler({ fullname, phone, email }) {
    // console.log(`phone:${phone}\n name:${fullname}`);
    addContact(fullname,phone,email)
  },
});
yargs.parse()
// console.log(yargs.argv);
