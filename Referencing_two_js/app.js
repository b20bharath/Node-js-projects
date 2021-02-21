const { type } = require('os')
const { describe } = require('yargs')
const yargs = require('yargs')

const square = (x) => {
    return x * x
}

yargs.command({
    command: 'multiple',
    describe: 'multiply two numbers',
    builder: {
        number:{
            describe: 'number to be multiplied',
            demandOption: true,
            type: 'int'
        }
    },
    handler: function(argv){
        console.log(square(argv.number))
    }
})

yargs.parse()


    