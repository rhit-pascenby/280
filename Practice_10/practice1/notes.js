const getNotes = function() {
    return 'Your notes ..'
 }
 module.exports = getNotes; 

 console.log(process.argv);
 console.log(process.argv[2]);

 const addNote = function(title, body) {
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote
    }
    
  
    
    
  const loadNotes = function() {
    try {
     const dataBuffer = fs.readFileSync('notes.json')
     const dataJSON = dataBuffer.toString()
     return JSON.parse(dataJSON)
        }
  
  catch(e) {
   return []
  }
  
  
  }
  const saveNotes = function(notes){
    const dataJSON = JSON.stringify(saveNotes)
    fs.writeFileSync('notes.json',dataJSON)
  }
// output { _: [], '$0': 'app.js' }
