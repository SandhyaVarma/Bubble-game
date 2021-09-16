var setTimer = document.querySelector('#settimer')
var hit = document.querySelector('#hit')
var scoreElm = document.querySelector('#score')
var bottom = document.querySelector('#bottom')
var song = document.querySelector('audio')

var timer = 60
var score = 0
var randomno

function initialize(){
    var template = ``

    for( var i=1 ;i<=84;i++){
        template += `<div class="circle">
        ${Math.floor(Math.random()*10)}
    </div>`
    }
    
    document.querySelector('#bottom').innerHTML = template
}

function time(){
    setInterval(() => {
        if(timer> 0){
            --timer
            setTimer.textContent = timer
        }
        else{
            bottom.innerHTML= `<h1>Game over</h1>`
        }
  
    },1000);

}


function getHit(){
    randomno = Math.floor(Math.random()*10)
    hit.textContent = randomno
}


function scoreIncrement(){
    score = score + 10
    scoreElm.textContent = score
}

function bubbleClickedfnctn(){
    bottom.addEventListener('click',function(val){
        var clicked = Number(val.target.textContent)
        if(clicked === randomno){
            song.play()
            scoreIncrement()
            initialize()
            getHit()
        }
        else{
            initialize()
            getHit()
        }
    })
}


bubbleClickedfnctn()
initialize()
time()
getHit()
