const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const button = document.getElementById('button');
const result = document.getElementById('BMI');


function calculateBMI(event) {
event.preventDefault();
const weight =+weightInput.value;
const height = +heightInput.value / 100;
const doubledHeight = Math.pow(height, 2);
const BMI = weight / doubledHeight;
const finalBMI = BMI.toFixed(2);
result.innerHTML = finalBMI;
const p = document.createElement('p');

if (result.innerHTML < 18.5) {
    p.textContent = "Недостаточный вес";
} else if(result.innerHTML >= 18.5 && result.innerHTML < 24.9) {
    p.textContent = "Нормальный вес";
} else if(result.innerHTML >=24.9 && result.innerHTML < 29.9) {
    p.textContent = "Избыточный вес";
}
p.classList.add('text_result');
result.append(p);
}

button.addEventListener('click', calculateBMI);