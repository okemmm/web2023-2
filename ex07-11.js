function determineLeapYear() {
    var year = Number(document.getElementById('yearInput').value);
    var result;

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        result = '閏年';
    } else {
        result = '平年';
    }

    // ウェブページに結果を表示
    document.getElementById('result2').innerText = '西暦' + year + '年は' + result + 'です。';

    // 結果をalertで表示
    alert('西暦' + year + '年は' + result + 'です。');
}
