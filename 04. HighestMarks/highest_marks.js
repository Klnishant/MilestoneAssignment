function find_highest_marks(marks){
    let highestMarks=0;

    for(let i=0; i<marks.length;i++){
        highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }
    return highestMarks;
}

const marks=[85, 92, 78, 95, 88]
const highestMarks=find_highest_marks(marks);
console.log("Highest Marks is:",highestMarks);