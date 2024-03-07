function findCommonInterestInBooks(students){
    if(!Array.isArray(students)){
        return "Provide a valid array of student details";
    }
    const uniqueBookList = new Set();
    for(let studentId = 0; studentId < students.length; studentId++){
        if(typeof students.name == undefined || typeof students.books == undefined || !Array.isArray(students[studentId].books)){
            return "Provide a valid property/values";
        }
        for(const book of students[studentId].books){
            uniqueBookList.add(book);
        }
    }
    // console.log(uniqueBookList.values());
    for(const uniqueBook of uniqueBookList.values()){
        const groupingCommonInterest = [];
        outerloop: for(let studentId = 0; studentId < students.length; studentId++){
            for(const book of students[studentId].books){
                if(book == uniqueBook){
                    groupingCommonInterest.push(students[studentId].name);
                }
            }
        }
        console.log(uniqueBook + " - [ " + groupingCommonInterest + " ]");
    }
    
}

console.log(findCommonInterestInBooks([
    {
      id: 0,
      name: 'Arun',
      books: ['Wings of Fire', 'Chakra'],
    },
    {
      id: 1,
      name: 'Ashok',
      books: ['Chakra', 'War and Peace', 'The Shining']
    },
    {
      id: 2,
      name: 'Balu',
      books: ['Wings of Fire', 'All about Cricket'],
    },
    {
      id: 3,
      name: 'Cathi',
      books: ['Against the wind', 'The Shining', 'War and Peace']
    },
]))


