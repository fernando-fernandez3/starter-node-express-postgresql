const port = process.env.PORT || 4000;
const app = require("./app");
const listener = () => console.log(`Listening on Port ${port}!`);
app.listen(port, listener);
