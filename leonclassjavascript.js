document.getElementById('Purple').onclick = partyPurple
document.getElementById('Green').onclick = partyGreen
document.getElementById('Blue').onclick = partyBlue
document.getElementById('Yellow').onclick = partyYellow


function partyPurple() {
    document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
    document.querySelector('body').style.color = 'white'

}

function partyGreen() {
    document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
    document.querySelector('body').style.color = 'white'

}

function partyBlue() {
    document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
    document.querySelector('body').style.color = 'white'

}
function partyYellow() {
    document.querySelector('body').style.backgroundColor = 'yellow'
    document.querySelector('body').style.color = 'white'

}