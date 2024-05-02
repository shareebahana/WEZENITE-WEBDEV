console.log('Hello world!')
const myFirstVariable = 250
console.log(myFirstVariable)
let myVariable = 260
console.log(myVariable)
myVariable = 261
console.log(myVariable)
var var1 = "hello"
console.log(var1)
const myage = 22
const myName= "nehu"
const IamAbove18 = true
console.log(IamAbove18)
const friends =[22, true, "nehu"]
console.log(friends[0])
const typeofMyage = (typeof myAge)

const updateage = myage +1
console.log(updateage)
const friendsage = [20, 19, 22, 21, 23]
const sum = friendsage[0] + friendsage[1] + 
friendsage[2] + friendsage[3] + friendsage[4] 
console.log("sum of friends age", sum)
const totalfriends = 5
console.log("total friends", totalfriends)
const average = sum/totalfriends
console.log("average friends age", average )

function makeConsolelog() {
    console.log('want to work with us??')
}
makeConsolelog()
function printAllvariable() {
    console.log('My age is', myage)
    console.log('My name is', myName)
    console.log('My sum is', sum)
    console.log('total', totalfriends)
}
printAllvariable()
function addto(incrementBy){
    myVariable = myVariable + incrementBy
    
}
addto(5)
console.log(myVariable)

function shouldigetthelicense(age){
    if (age>18){
        return true
    }
    else{
        return false
    }
}
shouldigetthelicense(17)
shouldigetthelicense(25)
let myfriends = []
function myfriendslist(friend){
    myfriends.push(friend)
    console.log(myfriends)
}
myfriendslist('neha')
myfriendslist('someine')
myfriendslist(3)
console.log(myfriends.length)
myfriends.pop()
console.log('Final array', myfriends)

for(let i=0;i<10;i++){
    console.log(i)
}

const result = 1==1
console.log(result)

//objects
const myobj ={
    'keyname1' : 'value1',
    'keyname2' : {
        'keyname2.1' : 'hello world'
    }
}
console.log(myobj)
console.log(myobj['keyname1'])
console.log(myobj['keyname2']['keyname2.1'])

//document object model
console.log(document)

const heading = document.querySelector ('h1')
heading.innerText = "hello nehul"
console.log(heading)

const incrementBtn = document.querySelector('#increment')
let counter = 0
function incrementCounter(){
   const counterEl = document.getElementById('counter')
   counter++
   counterEl.innerText = counter
}
incrementBtn.addEventListener('click', incrementCounter)


const promiseObject = fetch('D:\wenzenite internship\course 2\data.json')

const promiseObjectagain = promiseObject.then(response => {
    const promiseObject2 = response.json()
    promiseObject2.then(data => {
        console.log(data)

        return undefined
    })
    return null
    
}).then(finalData => {
    console.log('Final data is', finalData)
})

