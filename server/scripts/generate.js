const secp = require("ethereum-cryptography/secp256k1");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");


const privateKey = secp.utils.randomPrivateKey();
console.log('private key:', toHex(privateKey));

const publicKey = (secp.getPublicKey(privateKey));
console.log('public key:', toHex(publicKey));

const pkFormat = publicKey.slice(0,1);
const pk = publicKey.slice(1);
const pkHashed = keccak256(pk);
const ethAddress = pkHashed.slice(-40);
const ethHex = toHex(ethAddress);
console.log('EthHex Address:', ethHex);

