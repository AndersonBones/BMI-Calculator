var resultBMI = document.getElementById('user-bmi-result');
var statusBMI = document.getElementById('status-bmi-user');
var weight = document.getElementById('weightUser');
var height = document.getElementById('heightUser');
var age = document.getElementById('ageUser');

var colorStatus = document.getElementsByClassName('your-bmi')[0];

function CalculateBMI(){ 
    let weightUser = parseFloat(weight.value).toFixed(2); /* kg */
    let heightUser = parseFloat(height.value/100).toFixed(2); /* altura em Metros */ 
    let ageUser = parseFloat(age.value).toFixed(2); /* idade */

    let heightUserM = (heightUser*heightUser).toFixed(2); /* altura M elevado ao quadrado */
    let BMIresult = (weightUser/heightUserM).toFixed(2); /* calculo do IMC */
    

    if(!isNaN(BMIresult)){ /* se o valor for diferente de NaN */
        resultBMI.innerText = BMIresult; /* mostra o resultado */
        StatusBMI(BMIresult); /* chama a função que verifica o valor */
    }
    
}

function StatusBMI(bmi){ /* verifica se o usuario está com o peso ideal ou não. */

    if(bmi < 18.5){ /* abaixo do peso ideal */
        statusBMI.innerText = 'You are underweight.';
        colorStatus.style.backgroundColor = '#57797a';
    }
    else if(bmi > 18.5 && bmi <= 24.9){ /* peso ideal */
        statusBMI.innerText = 'You are healthy.';
        colorStatus.style.backgroundColor = '#336666';
    }

    else if(bmi > 24.9 && bmi <= 30){ /* acima do peso */
        statusBMI.innerText = 'You are overweight.';
        colorStatus.style.backgroundColor = '#FF9966';
    }

    else if(bmi > 30){ /* muito acima do peso */
        statusBMI.innerText = 'You are Very overweight.';
        colorStatus.style.backgroundColor = '#f85a5a';
    }

    else{
        statusBMI.innerText = 'Please Fill in everything correctly!'; /* Erro */
    }
}



