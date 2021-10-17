const arena = document.querySelector('.arenas')
const randomButton = document.querySelector('.button')

const player1 = {
	player: 1,
	name: 'Subzero',
	hp: 100 ,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif', 
	weapon: ['Knife', 'Shark', 'Dick'], 
	attack: function (name) {
		console.log(name + ` - Fight...`)
	}
}

const player2 = {
	player: 2,
	name: 'Sonya',
	hp: 30 ,
	img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif', 
	weapon: ['Knife', 'Axe', 'Sword'], 
	attack: function (name) {
		console.log(name + ` - Fight...`)
	}
}

function createBlock(className, tag = 'div') {
		const block = document.createElement(tag)
		if (className) {
		block.classList.add(className)
	}
		return block 
	}

function createPlayer(hero) {
	const player = createBlock('player'+ hero.player )
	const progressBar = createBlock('progressbar')
	const character = createBlock('character')
	const life = createBlock('life')
	const name = createBlock('name')
	const img = document.createElement('img', 'img')
	
	img.src = `${hero.img}`
	character.appendChild(img)
	player.appendChild(character)
	player.appendChild(progressBar)
	progressBar.appendChild(life)
	progressBar.appendChild(name)


	name.innerText = `${hero.name}`
	life.style.width = `${hero.hp}%`

	return player
}






function changeHP(player) {
	const playerLife = document.querySelector('.player' + player.player+' .life')
	const damage = randomNum(1,20)
	
	player.hp -=  damage	
	playerLife.style.width = player.hp < 0 ? '0%' : player.hp + '%' 
	
	if (player.hp < 0 ) {
		const playerWinName = player.name === player1.name ? player2.name : player1.name
		playerWin(playerWinName)
		
	}
	
}



function playerWin(name) {	
	const winTitle = createBlock('winTitle')
	winTitle.innerText = name + ' win'
	arena.appendChild(winTitle)
	randomButton.classList.add('hidden')
	
}



randomButton.addEventListener('click', () => {
	const whoTakeDamage = randomNum(1,2)
	switch (whoTakeDamage) {
		case 1 :
			changeHP(player1)
			break;
		case 2 :
			changeHP(player2)
			break;
		default:
			break;
	} 
})



function randomNum(min, max) { 
	return Math.floor(Math.random() * (max - min + 1) + min)
 }


arena.appendChild(createPlayer(player1))
arena.appendChild(createPlayer(player2))




