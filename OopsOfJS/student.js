class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

  
    calculateAverage() {
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

 
    getGrade() {
        const avg = this.calculateAverage();

        if (avg >= 90) return 'A';
        else if (avg >= 75) return 'B';
        else if (avg >= 50) return 'C';
        else return 'F';
    }


    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Marks: ${this.marks}`);
        console.log(`Average: ${this.calculateAverage().toFixed(2)}`);
        console.log(`Grade: ${this.getGrade()}`);
        console.log('--------------------------');
    }
}


const s1 = new Student("Gunjan", [85, 92, 78, 88]);
const s2 = new Student("Shivam", [45, 55, 60, 50]);
const s3 = new Student("Riya", [95, 98, 97, 96]);


s1.display();
s2.display();
s3.display();