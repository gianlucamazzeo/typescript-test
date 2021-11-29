// Interface

interface IUser {
    lastname: string, 
    firstname:string
}

function showUser(user:{lastname: string,firstname:string}){
    console.log(user.firstname + ',' +user.lastname)
}

function showUser2(user:IUser){
    console.log(user.firstname + ',' +user.lastname)
}

showUser({lastname: 'Gianluca',firstname:'Mazzeo'})

showUser2({lastname: 'Gianluca',firstname:'Mazzeo'})

function showUser3(user:IUser2){
    console.log(user.firstname + ',' +user.lastname)
}

function showUser4(user:IUser3){
    console.log(user.firstname + ',' +user.lastname + user.age)
}

interface IUser2 {
    lastname: string, 
    firstname:string,
    address? : string
}

showUser3({lastname: 'Gianluca',firstname:'Mazzeo'})


interface IUser3 {
    lastname: string, 
    firstname:string,
    address? : string,
    [propName: string]: any
}

showUser4({lastname: 'Gianluca',firstname:'Mazzeo',age:45, title:'Engineer'})
