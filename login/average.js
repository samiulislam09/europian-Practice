const students = {
    name: 'name',
    roll: 1,
    subject: {
        bangla: 50,
        english: 80,
        math: 80
    },
    average: function () {
        var total = 0;
        var totalSubject = 0;
        for (var i in this.subject) {
            total += this.subject[i];
            totalSubject++;
        }
        const average = total / totalSubject;
        return average;
    }

}

const student = students.average()
console.log(student);