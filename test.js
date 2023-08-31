const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(8)
const hash = bcrypt.hashSync("wildan", salt)
console.log(hash);
console.log(bcrypt.compareSync("wildan",hash));
console.log(bcrypt.compareSync("wildan1",hash));