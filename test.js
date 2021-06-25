const whois = require("./index");

whois.lookup("mora.fm").then((resp) => {
  console.log(resp);
});
