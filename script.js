const firstBtn = document.getElementById('firstBtn');
const firstForm = document.getElementById('measurementForm')
const imperial = document.getElementById('imperialMeasurement');
const metric = document.getElementById('metricMeasurement');

const weightImperial = document.getElementById('weight-imperial');
const heightFt = document.getElementById('height-ft');
const heightIn = document.getElementById('height-in');

const heightMetric = document.getElementById('height-metric');
const weightMetric = document.getElementById('weight-metric');

const submitBtn = document.getElementById('submit');
const form = document.getElementById('bmiCalculator');
const result = document.getElementById('bmi');
let fullheight;
let bmi;

// hide irrelevant element based on measurement selection
firstForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(document.getElementById('metricMeasurement').checked){
        Array.from(document.querySelectorAll('.imperial'))
        .forEach((element) => element.style.display = 'none');
        return;
    } else{
        Array.from(document.querySelectorAll('.metric'))
        .forEach((element) => element.style.display = 'none');
    }
});

getFullHeight = (ft, inches) => {
    fullheight = parseInt(ft)*12 + parseInt(inches);
}

calculate = (weightimperial, fullheight, weightmetric, heightmetric) => {
    if (document.getElementById('metricMeasurement').checked){
        heightmetric = heightmetric/100;
        bmi = (weightmetric/(heightmetric**2));
        result.innerText = bmi.toFixed(1);
        console.log(bmi);
    } else {
        bmi = (weightimperial / (fullheight**2)) * 703;
        console.log(bmi);
        result.innerText = bmi.toFixed(1);
        console.log(bmi);
    }
}

//submitting
form.addEventListener("submit", (e) => {
    e.preventDefault();
    getFullHeight(heightFt.value, heightIn.value);

    calculate(parseInt(weightImperial.value), fullheight, weightMetric.value, heightMetric.value);
})