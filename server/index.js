const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "04c4193fbaad092eafe3755beb7fbb2866475c924fc1bc1bba7ab2499a9dc3ff0504bf3608ec22e75b319dd9085272a4e9fe2bae7c8f442ae0b31b3315314128ec": 100,
  "042973e64a5c8ab1a64a6eedf92adbb2de768eadf7d23fd9ed109987795d76b8d9e5c0062fc6980bc6b3671ed7bef4b3fac0e46773f5465f9fe2300695c7a4a0e9": 50,
  "04c3d89c8cc8bb135f1906f9501ce2d09c87f856aba61afe5a08daf33795a4e4bc47f5042a892b7cf761c25e55bf37d9818b659114c68ba201d36af70b723f098b": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
