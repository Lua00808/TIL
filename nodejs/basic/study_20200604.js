// ループと反復処理

// JavaScript で提供されているループ文一覧
// for 文
// do...while 文
// while 文
// label 文
// break 文
// continue 文
// for...in 文
// for...of 文

// for 文
// JavaScript の for 文は Java や C 言語と同じ。

// do...while 文
// 指定された条件が false になるまで処理を繰り返す。
var a = 0;
do {
    a+=1;
    console.log(a);
} while (a < 5);

// while 文
// 指定した条件が true である限り処理が実行され続ける。
let n = 0;
let x = 0;
while (n < 3) {
    n++;
    x += n;
    console.log("n = "+n, "x = "+x);
}
// 無限ループには気をつけよう。

// ラベル付き文
// label を使って、プログラム内の他の場所から参照できる識別子を組み込んだ文が作成できる。
// break や continue 文で使用することができる。

// break 文
// ループ、switch、ラベル分を使った関連付けを終了させるときに使用する。
// ラベル無し(break;): 一番内側の、while、do...while、for、switch を終了する。
// ラベル付き(break [ラベル]): 指定したラベル付き文まで終了する(外側のループ処理まで一気に終了できる)。
var a = [10,9,8,7,6,0,5,4,3,2,1];
var theValue = 0;
label: while(true) {
    
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
        if (a[i] === theValue) {
            break label;
        } else if (a[i]==1) {
            break;
        }
    }
}
console.log("終了");

// continue 文
// while、do-while、for、label 文を再開するときに使用される。
// ラベル無し(continue;): 内側の反復を終了し、次のループを実行する。
// ラベル付き(continue [ラベル];): ラベルによって指定した動作が継続される。
let i = 0;
let j = 10;
checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) === 0) {
          continue checkj;
        }
        console.log(j + ' is odd.');
      }
      console.log('i = ' + i);
      console.log('j = ' + j);
  }

// for...in 文
// オブジェクトにある全ての列挙可能なプロパティに対し指定された変数を通して反復処理を行う。
// それぞれの異なるプロパティに指定された文を実行する。
var car = {'make':'Ford', 'model':'Mustang'};
function dump_props(obj, obj_name) {
  var result = "";
  for (var i in obj) {
    result += obj_name + "." + i + " = " + obj[i] + "<br>";
  }
  result += "<hr>";
  return result;
}
console.log(dump_props(car, "car"));
// car.make = Ford
// car.model = Mustang

// 配列の要素に対して反復処理を行うには、for 文がいいらしい(理由書いてたけど難しくてよくわからんかった)。
// https://qiita.com/may88seiji/items/2e8fec8391fea0a17dbc

// for...of 文
// 反復可能オブジェクト(Array, Map, Set, arguments オブジェクトなど)の要素に対し処理を実行する。
// for...in は連想配列(オブジェクト)に使用するが、for...of は列挙可能なオブジェクトに使用できる。

// for...in はプロパティに対して処理をしているのに対し、for...of ではプロパティの要素に対して処理を行っている。
const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // "0", "1", "2", "foo" が出力される
}

for (let i of arr) {
   console.log(i); // 3, 5, 7 が出力される
}