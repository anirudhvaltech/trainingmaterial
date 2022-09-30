setTimeout(function init(){

var $a = $("#pong"), ballM = null, aiP = null, bulletSI = null, bulletSI1 = null
var $playerPedal = $("#user-pedal")
var $ball = $("#ball")
var score = 0
var $bullet = $("#bullet")
var score1 = 0
$("#scoreAi").text(score)
$("#scoreUser").text(score1)

const top_ball = 200
const top_left = -3 * Math.PI / 4
const bottom_left = 3 * Math.PI / 4
const top_right = -Math.PI / 4
const bottom_right = Math.PI / 4
let token1 = [top_left,bottom_left,top_right,bottom_right]
let randomNumber = Math.floor(Math.random() * token1.length)


var $aiPedal = $("#ai-pedal")

// const bulletSettings = {
//     direction: 1,
//     left: 1,
//     speed: 10
// }
// const bulletSettings1 = {
//     direction: 1,
//     right: 1,
//     speed: 10
// }


const aiPedalSettings = {
    direction: 1,
    speed: 8,
    top: 0
}
const ballSettings = {
    angle: token1[randomNumber],
    height: 25,
    speed: 2,
    left: top_ball,
    top: 200
}
// moveWithin()



$a.mousemove(function (evt) {
    const top = Math.min(
        $a.height() - $playerPedal.height(),
        evt.pageY - $a.offset().top)

    // console.log(evt.pageY,$a.offset().top,evt.pageY - $a.offset().top)
    $playerPedal.css({
        top: `${top}px`
    })
})


var r = Math.floor(Math.random() * (2000 - 1000) + 1000)
console.log(r)




function aiMove() {


    aiPedalSettings.top += aiPedalSettings.direction * aiPedalSettings.speed
    if (aiPedalSettings.top > $a.height() - $aiPedal.height()) {
        aiPedalSettings.direction = -1
    }
    if (aiPedalSettings.top < 0) {
        aiPedalSettings.direction = 1

    }

    $aiPedal.css({
        top: `${aiPedalSettings.top}px`
    })
}

function ballMove() {
    ballSettings.top += ballSettings.speed * Math.sin(ballSettings.angle)
    ballSettings.left += ballSettings.speed * Math.cos(ballSettings.angle)

    if (Aiwinner()) {

        $("#scoreAi").text(++score)
        let token1 = [top_left,bottom_left,top_right,bottom_right]
        let randomNumber = Math.floor(Math.random() * token1.length)
        ballSettings.angle = token1[randomNumber]
        ballSettings.top = 200
        ballSettings.left = top_ball
        if (score == 3) {
            clearInterval(bulletSI)
            clearInterval(bulletSI1)
            clearInterval(ballM)
            clearInterval(aiP)
            setTimeout(() => {
                $("#gameover").show(500)
               $("#who_win").text("PC WINS")
            }, 200)

        }
    }
    if (Userwinner()) {

        $("#scoreUser").text(++score1)
        let token1 = [top_left,bottom_left,top_right,bottom_right]
        let randomNumber = Math.floor(Math.random() * token1.length)
        ballSettings.angle = token1[randomNumber]
        ballSettings.top = 200
        ballSettings.left = top_ball
        if (score1 == 3) {
            clearInterval(ballM)
            clearInterval(aiP)
            clearInterval(bulletSI)
            clearInterval(bulletSI1)
            setTimeout(() => {
                $("#gameover").show(500)
               $("#who_win").text("YOU WIN")
            }, 200)

        }
        // console.log("saf")
    }

    if (ballPlayerPad()) {
        if (ballSettings.angle === top_left)
            ballSettings.angle = bottom_right
        if (ballSettings.angle === bottom_left)
            ballSettings.angle = top_right
    }
    if (onTop()) {
        if (ballSettings.angle === top_right)
            ballSettings.angle = bottom_right
        if (ballSettings.angle === top_left)
            ballSettings.angle = bottom_left
    }
    if (onBottom()) {
        if (ballSettings.angle === bottom_right)
            ballSettings.angle = top_right
        if (ballSettings.angle === bottom_left)
            ballSettings.angle = top_left
    }
    if (ballPlayerAi()) {
        if (ballSettings.angle === bottom_left)
            ballSettings.angle = top_left
        if (ballSettings.angle === bottom_right)
            ballSettings.angle = top_left
        if (ballSettings.angle === top_right)
            ballSettings.angle = top_left
    }


    $ball.css({
        top: `${ballSettings.top}px`,
        left: `${ballSettings.left}px`
    })

}

function ballPlayerPad() {
    var jk = $ball.collision($playerPedal)
    return $(jk[0]).attr("id") === "user-pedal"
}
function ballPlayerAi() {

    var jk = $ball.collision($aiPedal)

    return $(jk[0]).attr("id") === "ai-pedal"
}
function onTop() {
    return ballSettings.top <= 0
}
function onBottom() {
    return ballSettings.top > $a.height() - ballSettings.height

}
function Aiwinner() {
    return ballSettings.left <= 0

}
function Userwinner() {
    return (ballSettings.left > $a.width() - ballSettings.height)
    // console.log(t)

}

aiP = setInterval(aiMove, 7)
ballM = setInterval(ballMove, 1)
},5000)