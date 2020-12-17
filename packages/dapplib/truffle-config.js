require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remind humble hunt cricket sugar tenant'; 
let testAccounts = [
"0x3bc715b6c4917dbbfb7115fb9069db7f494ad0849a6d2ad8942371132fc3c2d8",
"0xab2d4a4b56dd5bc447ee9cb90b6244c9d65f1e0a7d0100669a7c89ae4c47b11f",
"0xed54978ccc9dbb3216d4ff30c026a8577d0936f9ef071fc90ec67c196fc5b6ee",
"0x2f6c7322d88172e3ef246da773523d141de99b661774f640e67eb55cacec91b9",
"0xa47f6bd110af2563f919110cd3f856398238aff16dc04b5b69f91039aa66d4cd",
"0x35e78a3473631c66ad6fde488069a3873b1085859e590a8b1c85ebc4b9204916",
"0xca003e678c11c3265017dc4e8239cafdf98a5200130a34db36750173b6580f09",
"0x20412baec281333d345075240e1eb40ca4a10f51043c341419fdc9d7c51ee449",
"0xb7fa52306dddd90be72f8cfb1e6b47e3cfba6427c2e4548757729de09e2c7417",
"0xaef415893a35131cc0d4e9120aaffac6885073b0f57ae4ffa8f2b3f2e86118bd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
