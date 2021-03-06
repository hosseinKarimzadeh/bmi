function getInputValue() {
    let heightVal = parseInt(document.getElementById("height").value);
    let weightVal = parseInt(document.getElementById("weight").value);
    let result = document.getElementById("result")
    let normal = document.getElementById("normal-weight")
    let bmiNumber = document.getElementById("bmi-index")

    if (heightVal === "" || isNaN(heightVal)) {
        result.innerHTML = "Provide a valid Height!";
    } else if (weightVal === "" || isNaN(weightVal)) {
        result.innerHTML = "Provide a valid Weight!";
    } else {
        let bmi = (weightVal / ((heightVal ** 2) / 10000)).toFixed(1);
        let normal1 = (((heightVal ** 2) * 18.5) / 10000).toFixed(0);
        let normal2 = (((heightVal ** 2) * 24.9) / 10000).toFixed(0);
        if (bmi < 18.5) {
            result.innerHTML = `Oops You are under weight`;
            bmiNumber.innerHTML = `Your body mass index: ${bmi}`
            normal.innerHTML = `The ideal weight is between: ${normal1}kg - ${normal2}kg`;
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result.innerHTML = `Congratulations you are normal weight`;
            bmiNumber.innerHTML = `Your body mass index: ${bmi}`
            normal.innerHTML = `The ideal weight is between: ${normal1}kg - ${normal2}kg`;
        } else if (bmi >= 25 && bmi < 29.9) {
            result.innerHTML = `Oops You are overweight`;
            bmiNumber.innerHTML = `Your body mass index: ${bmi}`
            normal.innerHTML = `The ideal weight is between: ${normal1}kg - ${normal2}kg`;
        } else {
            result.innerHTML = `Unfortunately, you are obese`
            bmiNumber.innerHTML = `Your body mass index: ${bmi}`
            normal.innerHTML = `The ideal weight is between: ${normal1}kg - ${normal2}kg`;
        }
    }
}
