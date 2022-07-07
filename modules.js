
//path is core module
const path = require("path");
const voucher_generator = require('voucher-code-generator');
 const code = voucher_generator.generate({
    length:6,
    count:5
});
console.log(code)