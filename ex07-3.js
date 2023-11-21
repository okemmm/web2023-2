function BMI() {
    var height = Number(document.getElementById('height').value) / 100; // 身長をメートルに変換
    var weight = Number(document.getElementById('weight').value);
    var bmi = weight / (height * height); // BMIの計算

    document.getElementById('result').innerHTML = 'あなたのBMIは <strong>' + bmi.toFixed(2) + '</strong> です。';

}
