function getMoveName(move) {
    if (move == 1) {
        return 'kamień';
    } else if (move == 2) {
        return 'papier';
    } else if (move == 3) {
        return 'nożyce';
    } else {
        return 'nieznany ruch';
    }
}

function displayResult(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Mój ruch: ' + argComputerMove);
    printMessage('Twój ruch: ' + argPlayerMove);
    
    if (argComputerMove == argPlayerMove) {
        printMessage('Remis!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Wygrywasz!');
    } else {
        printMessage('Ja wygrywam!');
    }
}



let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput);

displayResult(computerMove, playerMove);