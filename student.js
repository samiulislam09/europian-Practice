var students = [
    {
        1: {
            names: "asif",
            subject: {
                bangla: 80,
                english: 85,
                math: 90,
                religious_study: 75,
                science: 100
            }
        }
    }
];

// Adding second Student
var another = {
    names: "sakib",
    subject: {
        bangla: 80,
        english: 80,
        math: 70,
        religious_study: 65,
        science: 80
    }
};
var element = {};
element[2] = another;
students.push(element);

// Adding third Student
var another = {
    names: "rahat",
    subject: {
        bangla: 10,
        english: 40,
        math: 60,
        religious_study: 65,
        science: 90
    }
};
var element = {};
element[3] = another;
students.push(element);


// Adding fourth Student
var another = {
    names: "rubayet",
    subject: {
        bangla: 100,
        english: 90,
        math: 60,
        religious_study: 75,
        science: 80
    }
};
var element = {};
element[4] = another;
students.push(element);

// Adding fifth Student
var another = {
    names: "salman",
    subject: {
        bangla: 10,
        english: 10,
        math: 20,
        religious_study: 30,
        science: 15
    }
};
var element = {};
element[5] = another;
students.push(element);

// Adding sixth Student
var another = {
    names: "liton",
    subject: {
        bangla: 100,
        english: 15,
        math: 25,
        religious_study: 50,
        science: 75
    }
};
var element = {};
element[6] = another;
students.push(element);

// Adding seventh Student
var another = {
    names: "abbas",
    subject: {
        bangla: 90,
        english: 50,
        math: 25,
        religious_study: 50,
        science: 75
    }
};
var element = {};
element[7] = another;
students.push(element);

// Adding eighth Student
var another = {
    names: "nurul",
    subject: {
        bangla: 90,
        english: 50,
        math: 60,
        religious_study: 70,
        science: 80
    }
};
var element = {};
element[8] = another;
students.push(element);

// Adding Ninth Student
var another = {
    names: "hasan",
    subject: {
        bangla: 60,
        english: 65,
        math: 65,
        religious_study: 90,
        science: 80
    }
};
var element = {};
element[9] = another;
students.push(element);

// Adding tenth Student
var another = {
    names: "Babar",
    subject: {
        bangla: 100,
        english: 100,
        math: 100,
        religious_study: 100,
        science: 100
    }
};
var element = {};
element[10] = another;
students.push(element);

var fail = [];
var grade_a_plus = [];
var grade_a = [];
var grade_b = [];
var others = [];

for (var student of students) {
    // accessing individual student from object
    for (var key in student) {
        var nameOfStudent = student[key].names;
        var total = 0;
        var subjects = student[key].subject;
        // calculating total number
        for (let value in subjects) {
            total += subjects[value];
        };
        // calculating average
        var average = total / 5;
        // adding conditional statements
        if (average >= 80) {
            grade_a_plus.push(nameOfStudent)
        }
        else if (average >= 70 && average < 80) {
            grade_a.push(nameOfStudent)
        }
        else if (average >= 60 && average < 70) {
            grade_b.push(nameOfStudent)
        }
        else if (average >= 33 && average < 60) {
            others.push(nameOfStudent)
        }
        else if (average < 33) {
            fail.push(nameOfStudent)
        }
    };
};
console.log(fail.join(',')+" deleted");
console.log("A+ = "+grade_a_plus.join(', '));
console.log("A = " + grade_a.join(', '));
console.log("B = " + grade_b.join(', '));
console.log("Others = " + others.join(', '))