let computerMove = `kamień`;

function printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!'){
	let div = document.createElement('div');
	div.innerHTML = 'Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!';
    document.getElementById('messages').appendChild(div);
}

let playerMove = `papier`;

function printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to kamień, to wygrywasz!'){
	let div = document.createElement('div');
	div.innerHTML = 'Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!';
    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}