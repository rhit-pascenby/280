// const chalk = require('chalk');

// const msg = getNotes();
// console.log(msg)
// const greenMsg = chalk.green.bold(msg);
// console.log(greenMsg);
const chalk = require('chalk');
const success = chalk.green('success');
const failure = chalk.red.bold('failure');
console.log(success, ' and ', failure);

const chalk = require('chalk');
const getNotes = require('./notes.js');
const notes = require('./notes.js');



const yargs = require('yargs');
const command = process.argv[2]
// if (command === 'add') {
//     console.log('Adding notes');
//   }
  
  if (command==='add') {
    console.log('adding note');
 } else if (command==='remove') {
    console.log('removing note');
 }
 yargs.command({
  command: 'add',
  describe: 'Adding a new note',
  builder: {
    title: {
       describe:'Note title',
       demandOption:true,
       type:'string'
    },
    body: {
        describe:'Note body',
        demandOption:true,
        type:'string'
    }
},
handler: function(argv) {
  //console.log(`Title: ${argv.title}`  ),
  //console.log(`${argv.body}`)
  notes.addNote(argv.title,argv.body)
} 


  // handler: function(){
  // console.log('Adding a new note')
  // }
  }) 
  console.log(yargs.argv)
  yargs.command({
    command: 'remove',
    describe: 'Removing a new note',
    handler: function(){
    console.log('Removing a new note')
    }
    })
    yargs.command({
      command: 'list',
      describe: 'Listing all notes',
      handler: function(){
      console.log('Listing all notes')
      }
      })
      yargs.command({
      command: 'read',
      describe: 'Reading your note',
      handler: function(){
      console.log('Reading a note')
      }
      })
     
    // Add at the end of the file:
  
    const addNote = function(title,body) {
      const notes = loadNotes()
      //console.log(notes)
      notes.push({
       title: title,
       body: body
       })
    saveNotes(notes)
  }

//   const duplicateNotes = notes.filter(function(note){
//     return note.title ===title// quality operator - zero items if no duplicates
// })
// if (duplicateNotes.length === 0) {
//     notes.push({
//         title: title,
//         body: body
//     })
//     saveNotes(notes)
// }
// if (duplicateNotes.length === 0) {
//     notes.push({
//         title: title,
//         body: body
//     })
//     saveNotes(notes)
// console.log('New note added');
// }


// else {
//     console.log('Title is taken')
// }


      // handler: function (argv) {
      //   console.log(`Title: ${argv.title}`)
      // }
      // console.log(`Body: ${argv.body}`)
      yargs.parse();