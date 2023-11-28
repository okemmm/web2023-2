function BMI2() {
    var height2 = Number(document.getElementById('height2').value) / 100; // 身長をメートルに変換
    var weight2 = Number(document.getElementById('weight2').value);
    var bmi2 = weight2 / (height2 * height2); // BMIの計算

    var classification;
    if (bmi2 < 18.5) {
        classification = '低体重';
    } else if (bmi2 < 25) {
        classification = '普通';
    } else {
        classification = '肥満';
    }

    alert('あなたのBMIは ' + bmi2 + ' です。この数値は「' + classification + '」の範囲に分類されます。');
}
