// console.log('javascript is rad');

var number = 10;
var string = 'Hello There';
var israd = true;

var groceries = ['Milk', 'Eggs', 'Cheese'];

function listGroceries(){
    for (var i = 0; i < groceries.length; i++) {
        console.log(groceries[i]);   
    }
}

listGroceries();

document.getElementById('bax').addEventListener('click', function(){
    alert('I got clicked');
});

// if(number == 10){
//     console.log('Yeah buddy');
// }else{
//     console.log('Nope!');
// }
// document.getElementById('bax').innerHTML = number;

for(var i = 0; i < 10; i++){
    console.log(i);
}