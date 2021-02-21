const { describe, demand } = require("yargs");
const yargs = require("yargs");


yargs.version('1.1.0')

yargs.command({
    command: 'sort',
    describe: 'This will the sort the array',
    builder: {
        title: {
            describe: 'This is note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        console.log('The array is sorting')
        console.log('My title is:',argv.title)
    }

})

console.log(yargs.argv) // instead we can use yargs.parse() for parsing all the commands and arguments  