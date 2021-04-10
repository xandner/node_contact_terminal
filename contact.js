const fs = require("fs");
const chalk = require("chalk");

const addContact = (fullName, phone, email) => {
  const contact = readContact();
  const duplicateContact = contact.find((c) => c.fullName === fullName);
  if (!duplicateContact) {
    contact.push({ fullName, phone, email });
    console.log(chalk.green("saved"));
  }
  else{
      console.log(chalk.red('exists'));
      
  }
};

const readContact = () => {
  try {
    const dataBufffer = fs.readFileSync("./contact.json");
    const contact = dataBufffer.toString();
    return JSON.parse(contact);
  } catch (ex) {
    console.log(ex);
    return [];
  }
};
module.exports = {
  addContact,
};
