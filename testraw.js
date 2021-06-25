const whois = require("whois-raw");

whois.lookup("inmedia.im", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(data);
});
