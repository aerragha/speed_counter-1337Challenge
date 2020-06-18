const downBtn = document.getElementById('down')
const upBtn = document.getElementById('up')
const rwida1 = document.getElementById('rwida1')
const rwida2 = document.getElementById('rwida2')
const carContainer = document.getElementById('carContainer')
const currentSp = document.getElementById('current')
const audio = document.getElementById('audio');
const fin_ghadi = document.getElementById('fin_ghadi');



// Init speed
let currentSpeed = 0;

let indexCar = 13;

let indexRwida = 12;

// set New Speed
function setNewSpeed() {
    console.log(currentSpeed)
    if (currentSpeed === 0) {
        currentSp.innerHTML = `${currentSpeed} Km`;
        carContainer.style.animation = `drive 0s linear infinite`
        rwida1.style.animation = `turn 0s linear infinite`
        rwida2.style.animation = `turn 0s linear infinite`
        indexCar = 13;
        indexRwida = 12;
    }
    else {
        currentSp.innerHTML = `${currentSpeed} Km`;
        carContainer.style.animation = `drive ${(1.25 * indexCar)}s linear infinite`
        rwida1.style.animation = `turn ${(0.416 * indexRwida)}s linear infinite`
        rwida2.style.animation = `turn ${(0.416 * indexRwida)}s linear infinite`
    }
}

upBtn.addEventListener('click', () => {
    if (currentSpeed >= 120) {
        fin_ghadi.classList.add('active')
        audio.play()
        setTimeout(() => {
            window.location.reload()
        }, 2900);
    }
    else {
        currentSpeed += 10;
        indexCar--;
        indexRwida--;
        setNewSpeed()
    }
})

downBtn.addEventListener('click', () => {
    if (currentSpeed <= 0) {
        currentSp.innerHTML = `${currentSpeed} Km`;
        carContainer.style.animation = `drive 0s linear infinite`
        rwida1.style.animation = `turn 0s linear infinite`
        rwida2.style.animation = `turn 0s linear infinite`
        indexCar = 13;
        indexRwida = 12;
    }
    else {
        currentSpeed -= 10;
        indexCar++;
        indexRwida++;
        setNewSpeed()
    }
})