const users = [
    {
        name: 'shawon',
        password: 1234,
    },
    {
        name: 'osim',
        password: 467,
    }
];
function login(name, pass) {
    var message = "";
    for (let user of users) {
        if ((user.name == name) && (user.password == pass)) {
            message = "Hello user";
        } else {
            message = "wrong username or password";
        }

    }
    return message;
    
}



const user = login('shawon', 123);
console.log(user);