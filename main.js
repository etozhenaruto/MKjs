const arena = document.querySelector('.arenas')
const randomButton = document.querySelector('.button')

const player1 = {
	player: 1,
	name: 'Subzero',
	hp: 100 ,
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif', 
	weapon: ['Knife', 'Shark', 'Dick'], 
	attack: function (name) {
		console.log(name + ` - Fight...`)
	}
}

const player2 = {
	player: 2,
	name: 'Sonya',
	hp: 100 ,
	img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif', 
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
	playerLife.style.width = player.hp + '%' 

	console.log(playerLife.style.width)
	console.log(player.hp)

	if (player.hp > 0 ) {
		player.hp = player.hp - randomDamage(1,20)	
	}
	else if (player2.hp < 0) {
		arena.appendChild(playerWin(player1.name))
		randomButton.classList.add('disable')
	}
	else if (player1.hp < 0) {
		arena.appendChild(playerWin(player2.name))
		randomButton.classList.add('disable')
	}
	
}



function playerWin(name) {	
	const loseTitle = createBlock('winTitle')
	loseTitle.innerText = name + ' win'
	return loseTitle
}



randomButton.addEventListener('click', () => {
	changeHP(player1)
})



function randomDamage(min, max) { 
	return Math.floor(Math.random() * (max - min + 1) + min)
 }


arena.appendChild(createPlayer(player1))
arena.appendChild(createPlayer(player2))




