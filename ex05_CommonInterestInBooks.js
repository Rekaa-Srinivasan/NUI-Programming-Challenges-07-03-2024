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


