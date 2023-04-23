//help
function log(message){
  console.log('>' + message)
}
//app
const cardis = document.querySelectorAll('.card')
const cardus = document.querySelectorAll('.cards')

// all card
cardis.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener("drag", drag)
  card.addEventListener("dragend", dragend)
})

function dragstart(){
  //log('CARD: Start dragging') 
  cardus.forEach(cards => cards.classList.add('highlight'))
  this.classList.add('is-dragging')
}

function drag() {
 // log("CARD: in dragging") 
}

function dragend() {
 // log("CARD: stop drag!") 
   cardus.forEach(cards => cards.classList.remove("highlight"))
   this.classList.remove("is-dragging")
}

//local de soltar os cartões
cardus.forEach(cards => {
  cards.addEventListener('dragenter', dragenter)
  cards.addEventListener("dragover", dragover)
  cards.addEventListener("dragleave", dragleave)
  cards.addEventListener("drop", drop)
})

function dragenter() {
 // log('cards: in the zone')
}

function dragover() {
  //log("cards: over")
  this.classList.add('over')
  //get dragging card
  const cardBeingDragged = document.querySelector('.is-dragging')

  this.appendChild(cardBeinDragged)
}

function dragleave() {
  //log("cards: leave")
    this.classList.remove("over")

}

function drop() {
  //log("cards: dropped")
  this.classList.remove('over')
}



