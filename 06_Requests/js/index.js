const output = document.getElementById('output');
let data;

let grades = [{
        name: 'John',
        grade: 8,
        sex: 'M'
    },
    {
        name: 'Sarah',
        grade: 12,
        sex: 'F'
    },
    {
        name: 'Bob',
        grade: 16,
        sex: 'M'
    },
    {
        name: 'Johnny',
        grade: 2,
        sex: 'M'
    },
    {
        name: 'Cyrus',
        grade: 4,
        sex: 'M'
    },
    {
        name: 'Paula',
        grade: 18,
        sex: 'F'
    },
    {
        name: 'Jeff',
        grade: 5,
        sex: 'M'
    },
    {
        name: 'Jennifer',
        grade: 13,
        sex: 'F'
    },
    {
        name: 'Courtney',
        grade: 15,
        sex: 'F'
    },
    {
        name: 'Jane',
        grade: 9,
        sex: 'F'
    }
]


let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";

let getBoys = grades => grades.filter(isBoy);
let getGirls = grades => grades.filter(isGirl);

let average = grades => grades.reduce((acc, curr) => (acc + curr.grade), 0) / grades.length;

let maxGrade = grades => grades.map(student => student.grade).reduce((acc, next) => Math.max(acc, next));
let minGrade = grades => grades.map(student => student.grade).reduce((acc, next) => Math.min(acc, next));


let classRoomAverage = average(grades);
let boysAverage = grades => grades.filter(student => student.sex === 'M')
    .map(student => student.grade)
    .reduce((acc, next) => acc + next) /
    grades.length;

boysAverage = function (grades) {
    return grades
    .filter(student => student.sex === 'M')
    .map(student => student.grade).reduce((acc, next) => acc + next) / grades.length;
}
let girlsAverage = average(getGirls(grades));






function xhrGet() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json');
    request.onload = function () {
        console.log('Response received!');
        data = request.response;
    }
    request.send();
    console.log('Request Sent!');
}

function fetchUsers() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.error('Stop trying to make fetch happen', err));
}

function fetchUser() {
    fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.error('Stop trying to make fetch happen', err));
}

function createUser() {
    fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify({
                name: 'JH',
                job: 'weapon'
            })
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.error('Stop trying to make fetch happen', err));
}

function registerUser() {
    fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify({
                email: 'j.h@weapon.co.uk',
                password: 'password'
            })
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.error('Stop trying to make fetch happen', err));
}

function failUser() {
    fetch('https://reqres.in/api/register', {
            method: 'POST',
            body: JSON.stringify({
                email: 'j.h@weapon.co.uk'
            })
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.error('Stop trying to make fetch happen', err));
}