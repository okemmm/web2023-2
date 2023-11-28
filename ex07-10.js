function BMI() {
    var height = Number(document.getElementById('height').value) / 100; // 身長をメートルに変換
    var weight = Number(document.getElementById('weight').value);
    var bmi = weight / (height * height); // BMIの計算

    var classification;
    if (bmi < 18.5) {
        classification = '低体重';
    } else if (bmi < 25) {
        classification = '普通';
    } else {
        classification = '肥満';
    }

    alert('あなたのBMIは ' + bmi + ' です。これは「' + classification + '」の範囲に分類されます。');
}
