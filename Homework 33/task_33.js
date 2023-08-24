"use strict"

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

// Task 1
const lessonNames = Object.keys(subjects).join();
console.log('Task 1: ', lessonNames);

// Task 2
let total = 0;
for (const key in subjects) {
    for (const key2 in subjects[key]) {
        total += subjects[key][key2];
    }
}
console.log('Task 2: ', total);

// Task 3
let quantity = 0;
for (const key in subjects) {
    for (const key2 in subjects[key]) {
        if (key2 === 'students') quantity += subjects[key][key2];
    }
}
const mean = quantity / Object.keys(subjects).length;
console.log('Task 3: ', mean);

// Task 4 
const lessonObject = Object.values(subjects);
console.log('Task 4: ', lessonObject);

// Task 5
const teachers = [];
for (const key in subjects) {
    for (const key2 in subjects[key]) {
        if (key2 === 'teachers') {
            const obj = [key, subjects[key][key2]]
            teachers.push(obj);
        };
    }
}
// сортировка 
const bubbleSort = (coll) => {
    let stepsCount = coll.length - 1;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < stepsCount; i += 1) {
            if (coll[i][1] < coll[i + 1][1]) {
                const temp = coll[i];
                coll[i] = coll[i + 1];
                coll[i + 1] = temp;
                swapped = true;
            }
        }
        stepsCount -= 1;
    } while (swapped);
    return coll;
};
bubbleSort(teachers);
const lessNames = [];
for (let index = 0; index < teachers.length; index++)
    lessNames.push(teachers[index][0]);
console.log('Task 5: ' ,lessNames);