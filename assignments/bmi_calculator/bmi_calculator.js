// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if(typeof(mass) == Number and typeof(height) == Number){
    let BMI = mass / (height * height);
    return BMI
    }
    else{
        return ''
    }
}

module.exports = BMICalculator;
