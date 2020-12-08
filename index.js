const config = require(`config`);

const myFunction = () => {
  // TODO: make as many functions as you need
};

(async () => {
  try {
    const filePath = config.get(`filePath`);
    // TODO: Do the stuff here
  } catch (ex) {
    console.log(ex);
  }
})();
