import http from 'http';

const data = fetch('http://localhost:1337/Tasks/')
    .then(res => res.json())
    .then(info => console.log(info));