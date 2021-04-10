const fs = require("fs");
const chalk = require("chalk");

const addContact = (fullName, phone, email) => {
  const contact = readContact();
  const duplicateContact = contact.find((c) => c.fullName === fullName);
  if (!duplicateContact) {
    contact.push({ fullName, phone, email });
    saveContact(contact);
    console.log(chalk.green("saved"));
  } else {
    console.log(chalk.red("exists"));
  }
};

const readContact = () => {
  try {
    const dataBufffer = fs.readFileSync("./contact.json");
    const contact = dataBufffer.toString();
    return JSON.parse(contact);
  } catch (ex) {
    // console.log(ex);
    return [];
  }
};

const listaContact=()=>{
  const contacts=readContact()
  if (contacts.length >0){
    console.log(chalk.blue("youre contact: \n"));
    console.table(contacts)
    // contacts.forEach(contact => {
    //   console.log(`\t ${chalk.green("fullname")}: ${contact.fullName} `);
    //   console.log(`\t ${chalk.green("phone")}: ${contact.phone} `);
    //   console.log(`\t ${chalk.green("email")}: ${contact.email} `);
    //   console.log(chalk.redBright("\t -------------------------"));
    // });
  }else{
    console.log(chalk.red("no contact"));
  }
}

const saveContact = (contacts) => {
  const data = JSON.stringify(contacts);
  fs.writeFileSync("contact.json", data);
};

module.exports = {
  addContact,
  listaContact
};
