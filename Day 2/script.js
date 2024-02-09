// p1 = document.getElementById('p1');
// p2 = document.getElementById('p2');
// p3 = document.getElementById('p3');
// p4 = document.getElementById('p4');
// p5 = document.getElementById('p5');

// p1.addEventListener('mouseover', function run(){
//     p1.style.color = 'white';
//     p1.style.backgroundColor = 'black';
// })
// p1.addEventListener('mouseout', function run(){
//     p1.style.color = 'black';
//     p1.style.backgroundColor = 'white'; // You can put '' to let it change back to its orginal color
// })

/*
DOM and Events to set up:

1.) Click - show and hide menus
     - Create a button "See Food Menu"/ "See Drink Menu"
     - Challenge: .innerText so that the button text changes

2.) Mouse over and out - highlight to the user which link they are currently on
      - will need to change text and background color as minimum

3.) Mouse enter and leave - current openings (work for us)
      text will become larger when entered and return left 

//Code on all sheets will need to be altered!
4.) Create a Basic form, the text inputs will change background color and 
      text color when keypress event activated - make the form relevant to
      the site.


 Think about what we want to target and how we want to achieve this, 
  you may need to combine multiple methods we have learnt in JS to
  accomplish the end result.
  */

//!Task 1
let food = document.getElementById('food');
let drink = document.getElementById('drink');
drink.style.display = 'none'
food.style.display = 'block'
let fdbtn = document.getElementById('foodDrinkbtn');
console.log(typeof food)

fdbtn.addEventListener('click', function run() {
    if (food.style.display != 'block') {
        drink.style.display = 'none'
        food.style.display = 'block'
        console.log('Food menu')
        fdbtn.innerText = 'Drinks Menu'
    }
    else {
        food.style.display = 'none'
        drink.style.display = 'block'
        console.log('Drink menu')
        fdbtn.innerText = 'Food Menu'
    }
})

//!Task 2
let links = document.querySelectorAll('nav a');

//for each item in links
//!THE WAY THE FOR LOOP WORKS
//It loops through each item initially and applies the event to them, at the start.
//It does not loop each time your mouse hover to work out wich one needs to grow.
//It just applies the add event listener to all elements that you need it to
//Then when the mouse over happens the event is called on whichever one its over
//And applies to condition.
//!IMPORTANT PART - It does loop not when mouse hovers but when the page is loaded.
for (let link = 0; link < links.length; link++) {
    links[link].addEventListener('mouseover', function run() { //for selected item do event...
        links[link].style.backgroundColor = 'Green'
        links[link].style.fontFamily = 'Impact'
    })
}
for (let link = 0; link < links.length; link++) {
    links[link].addEventListener('mouseout', function run() { //for selected item do event...
        links[link].style.backgroundColor = ''
        links[link].style.fontFamily = ''
    })
}

//!Task 3
let work = document.getElementById('work')

work.addEventListener('mouseenter', function run() {
    work.style.fontSize = '2rem'
    console.log('mouse is over')
})

work.addEventListener('mouseleave', function run() {
    work.style.fontSize = ''
})

//!Task 4
let inputs = document.getElementsByClassName("inputbox")

for (let i = 0; i < inputs.length; i++){
    console.log('inside for loop');
    inputs[i].addEventListener('keypress', function run() {
        inputs[i].style.backgroundColor = 'Red'
        inputs[i].style.Color = 'beige'
    })
}
