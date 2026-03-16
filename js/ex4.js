//Declare studentList Array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];

const extraCredit = () => {
    studentList.forEach(s => {
        for (let i = 0; i < s.scores.length; i++) {
            s.scores[i] += 5;            
        }
    })
}

const missingScore = () => {
    studentList.forEach(s => {
        let avg = s.scores.reduce((acc, curr) => acc += curr, 0) / s.scores.length;
        s.scores.push(avg);
    })
}

const displayResults = () => {
    studentList.forEach(s => {
        console.log(`Full name (last, first): ${s.lastName}, ${s.firstName}`)
        console.log(`Updated scores are: ${s.scores.join(",")}`);
    })
}

const domLoaded = () => {
    extraCredit();
    missingScore();
    displayResults();
}

window.addEventListener("DOMContentLoaded", domLoaded);