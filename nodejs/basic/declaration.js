/* hello, world */
'use strict';
console.log('hello, world!');


/* 変数の宣言 */
var x = 10      // ローカル変数とグローバル変数
let y = 20      // ブロックスコープのローカル変数

var a;                                      // undifined
if (!a) console.log('変数 a の値は ' + a);  // undifined は false

var a;              // undifined
console.log(a + 2); // NaN と評価される

var n = null;           // null は数値で 0、真偽値では false
console.log(n * 10);    // 0 と表示される


/* 変数の巻き上げ */
var a = 'global';
function test() {
    console.log(a);     // undefined
    var a = 'local';
    console.log(a);     // 'local' と表示される
}
test();
// 関数内で変数された変数は、関数内のどんな場所で宣言したとしても、
// 関数の先頭で宣言されたのと同じように動作する。
// 巻き上げられた変数は undefined を返すため、 test() 内の最初の console.log(a) は
// undefined を返す。
// コードを見やすくするためには、関数内の変数はできる限り先頭に書くべきである。

// ECMAScript 2015 では、let(const) は巻き上げが行われない。
// ブロック内の変数宣言前に変数を参照すると、ReferenceError になる。
console.log(c);     // ReferenceError
let c = 3;


/* 関数の巻き上げ */
// 関数については、関数宣言のみ先頭への巻き上げが行われ、
// 関数式については巻き上げられない。

/* 関数宣言 */
foo();      // "bar"

function foo() {
    console.log('bar');
}

/* 関数式 */
baz();      // TypeError: baz は関数ではない

var baz = function() {
    console.log('bar2');
};


/* グローバル定数 */
// 実際にはグローバルオブジェクトのプロパティのこと。
// window というグローバルオブジェクトの場合、window.変数名 という構文を用いて
// グローバル変数の設定やアクセスができる。


/* 定数 */
// const キーワードを用いて、定数を宣言できる。
const PI = 3.14;
// 定数のスコープルールは、let によるブロックスコープ変数と同じ。
// const キーワードを省略した場合、変数とみなされる。

// 定数が代入されたオブジェクトのプロパティは保護されない。
const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';
// 配列の中身も保持されないので、以下は問題なく実行できる。
const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];