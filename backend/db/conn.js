const mongoose = require('mongoose')

async function main() {
    const uri = "mongodb://root:example@localhost:27017/getpetdb?authSource=admin";
    await mongoose.connect(uri)
    console.log('Conectou com Mongoose!')
}

main().catch((err) => console.log(err))

module.exports = mongoose