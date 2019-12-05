'use strict';


/*
function myLa(callback) {

    console.log("lals");

    setTimeout(callback,0);

}


myLa(myHandler());





setTimeout(()=>{
    console.log(6666);
},0);




console.log('hgdf')
console.log('hgdf')
console.log('hgdf')
console.log('hgdf')
console.log('hgdf')
console.log('hgdf')
console.log('hgdf')
console.log('hgdf')
console.log('hgdf')



function myHandler() {


    console.log("MY HANBLER");

}


const user = {
    name: 'Name',
    surname: 'Surname',
    age: 6666666,
    isMale: false,
    cat: null,

    car: {
        engine: {
            volume: 1.0,
            name: "V10",
        },
        doorCount: 5,
    },

    contacts: ['gdfgfdgdfg', 'fdgjhgfdjkhgjfdhgkfdjhgkjldfhgkdfjgh'],


    sayHi() {
        alert('fhgdghdf' + this.name)
    },

    test: null,

};



const  users = [];


for (let i = 0 ; i<10 ; i++){


    users.push({
        name: `Name${i}`,
        surname:`Surname${i}`,
        age:`age${i}`,
        isMale: false,
    })
}





*/

/*
const jsonUsers = JSON.stringify(users);



const  parserUser = JSON.parse(jsonUsers);
*/


/*

const store = {
    users:null,
    isFetching:false,
    error:null,
};


const request = new XMLHttpRequest();

const button = document.getElementById('loadButton');



button.onclick = function(){
    request.open("GET" , "./users.json" );
    request.send();
};

request.onloadstart = function () {
    store.isFetching = true;

};

request.onloadend = function () {

    store.isFetching = false;

    if (this.status >= 200 && this.status < 300){
        store.users = JSON.parse(this.responseText);
    }else {
        store.error = new Error(`${this.status}: ${this.statusText}`);
    }

};

const  loadUsersPromise = new Promise(function (resolve, reject) {

    const  request = new XMLHttpRequest();
    request.open("GET" , "./users.json" );

    request.o





    store.isFetching = false;

    if (this.status >= 200 && this.status < 300){
        resolve(JSON.parse(this.responseText));
    }else {
        store.error = new Error(`${this.status}: ${this.statusText}`);
    }

})

*/


/*
const request = new XMLHttpRequest();

const loadUsersPromise = new Promise(function (resolve, reject) {

    request.onload = () => {

        resolve(JSON.parse(request.responseText))
    };

    request.onerror = () => {
        reject(new Error(`${request.status}: ${request.statusText}`));
    };

    request.open("GET", "./users.json");
    request.send();

});


loadUsersPromise
    .then(function (users) {

        console.log(users)

    })
    .catch(function (err) {

        console.log(err);

    });*/


fetch('./users.json')
    .then(parseData)
    .then(logData)
    .catch(onLoadUsersReject);


function parseData(response) {

    return response.json();

}

function onLoadUsersReject(response) {
    console.log(response);

}


function logData(data) {
    console.log(data);

}