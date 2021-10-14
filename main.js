const Subzero = {
	name: 'Subzero',
	hp: 100 ,
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif', 
	weapon: ['Knife', 'Shark', 'Dick'], 
	attack: function (name) {
		console.log(name + ` - Fight...`)
	}
}

const Sonya = {
	name: 'Sonya',
	hp: 70 ,
	img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif', 
	weapon: ['Knife', 'Axe', 'Sword'], 
	attack: function (name) {
		console.log(name + ` - Fight...`)
	}
}


const arena = document.querySelector('.arenas')



function createPlayer(user, hero) {

	const player = document.createElement('div')
	player.classList.add(user)

	const progressBar = document.createElement('div')
	progressBar.classList.add('progressbar')

	const character = document.createElement('div')
	character.classList.add('character')

	const life = document.createElement('div')
	life.classList.add('life')

	const name = document.createElement('div')
	name.classList.add('name')
	
	const img = document.createElement('img')
	img.src = `${hero.img}`


	character.appendChild(img)
	player.appendChild(character)
	player.appendChild(progressBar)
	arena.appendChild(player)
	progressBar.appendChild(life)
	progressBar.appendChild(name)


	name.innerText = `${hero.name}`
	life.style.width = `${hero.hp}%`

}

createPlayer('player1', Subzero)
createPlayer('player2', Sonya)



