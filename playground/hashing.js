const { SHA256 } = require('crypto-js'); // eslint-disable-line no-unused-vars
const jwt = require('jsonwebtoken'); // eslint-disable-line no-unused-vars
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$dSKNuipPiXRqoS8Xmy/xtuZKtoBgH4hWSitGsDCoXIDVmxE01hXDy';

bcrypt.compare('abc123', hashedPassword, (err, result) => {
    console.log(result);
});

// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// var message = 'i am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data: data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//     console.log('data was not changed');
// } else {
//     console.log('data was changed.  do not trust!');
// }
