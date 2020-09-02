require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure tell champion rice place maid coral light army gaze'; 
let testAccounts = [
"0x6ece9e87cf7b7526e5feb693607ee58a0919d7e7f87d2d0dfd6c264d95392eae",
"0xe591a910dc11933a1150dba245591920bbf989b65beaac0abd505c5405f474f3",
"0xd61193a57f384e848a7890d9dfe18d0ce6387a99e1f2e173faf77c7141bff6f6",
"0xc8f0913ec2be55d1ecc35f8888b672846b727af1f748747a3e71a29ffe5f781a",
"0x03b875b63bc34cafc4e89056d8a690e8ee05ad049c2f79452efe7aa58b2d4948",
"0x597f79b67153c4beb815985d5e49d7c26ccdc49a3698a41e289c0ec4b537b314",
"0x6b02a39b37077ca79ba361a6279e388f1ca361a98527afb33cdf5f8a4b4ea5ab",
"0x3cd790220c9719ca49f3c580d7f2de6e859471cfe8a015c4faa3578a9c9d84fa",
"0x5e1954fdc622cb39094f4df1683a702d4523a8ec041ed75da9cbfa22b225073b",
"0x8ea6fac24f510d625474e8d18c2c6212c65370c1e3bde881b481208bfc3946b1"
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
