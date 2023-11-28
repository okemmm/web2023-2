function determineLeapYear() {
    var year = Number(document.getElementById('yearInput').value);
    var result2;

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        result2 = '閏年';
    } else {
        result2 = '平年';
    }

    document.getElementById('result2').innerText = '西暦' + year + '年は' + result2 + 'です。';
}
