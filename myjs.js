alert('Hello, Yuta!');  /* JSは'' ""　のどちらでも良い */
alert(1+1);
alert(Math.sqrt(1+1));
alert(Math.sqrt(2+3));
alert(Math.sqrt(1/0));  // 無限大の平方根はNaNになります
alert(Math.sqrt(0/0));  // NaNの平方根はNaNになります
alert(Math.sqrt(2+3));
alert(Math.sqrt('2'+'3'));  // 文字列の連結'23'の平方根はエラーになります
alert(Math.sqrt(Number('2')+Number('3')));  // 修正: 閉じ括弧を追加
alert(Math.sqrt('2'+3));  // 文字列の連結'23'の平方根はエラーになります
alert(Math.sqrt(Number('2')+3));
