## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.

To run the scripts and create accounts we do….
```cd server```
```node scripts/generate.js```  

Run ```node scripts/generate.js``` 3 times to create accounts (public + private keys)The Ethereum 
Note the Ethereum Cryptography library is used here to generate private key. 
The following modules are used in the generate.js file to assist with priv key generation along with installing the modules...
```const secp = require("ethereum-cryptography/secp256k1");```
```const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");```
```const { keccak256 } = require("ethereum-cryptography/keccak");```

Now open the index.js and enter the public keys (as strings" into the balances object which will map up the each account to the balances of 100, 50, 75 respectively.

Now if you check the balances of the 3 accounts by entering your private key associated with each account on the website you will see it will reflect the correct balances of 100, 50, 75 respectively. 





