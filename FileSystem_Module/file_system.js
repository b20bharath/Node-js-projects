const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file is created by Node JS')
fs.appendFileSync('notes.txt', 'This is the text appended using appendFileSync')