document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {
    
    let square = event.target;
    let postion = square.id; 

    if (handleMove(postion)) {
        updateSquare();

        setTimeout(() => {
            alert(" O jogo acabou - O vencedor foi" + playerTime );

        },10);

    };
    updateSquare(postion);

}

function updateSquare(postion){
    let square = document.getElementById(postion.toString())
    let symbol = board[postion];
    square.innerHTML = `<div class='${symbol}'></div>`
}

//Reset game

// function updateSquares(postion) {
//     let square = document.querySelectorAll(".square");


//     squares.forEach((square) =>{
//         let position = square.id;
//         let symbol = board[postion];

//         if (symbol != "") {
//             square.innerHTML = `<div class= '${symbol}'></div>`
//         }
//     })


// }