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
// TO DO - Write higher order functions / There are many solutions

//Declare cLastNameResults.  Use functional programming (filter, map, reduce, and pure functions) to generate a new array of objects (don’t use a traditional loop)
const cLastNameResults = studentList
    .filter(s => s.lastName.at(0) === "C")
    .map(s => {
        return {
            firstName: s.firstName,
            lastName: s.lastName,
            minScore: s.scores.reduce((acc, curr) => acc = curr < acc ? curr : acc, Number.MAX_SAFE_INTEGER),
            maxScore: s.scores.reduce((acc, curr) => acc = curr > acc ? curr : acc, Number.MIN_SAFE_INTEGER),
            avgScore: s.scores.reduce((acc, curr) => acc += curr, 0) / s.scores.length
        }
    })

//Output
console.log(cLastNameResults);
