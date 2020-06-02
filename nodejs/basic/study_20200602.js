// 制御フローとエラー処理

// ブロックスコープ
// 重要: ECMAScript 2015 より前の Javascript にはブロックスコープがない。
// ブロック内で使用した変数のスコープは、そのブロックがある関数やスクリプトになる。
// ECMAScript 2015 からは、let や const でブロックスコープ変数を宣言できる。

// 条件文
// if...else と switch が使える。
var x = 1;
var y = 1;

if (x==y) {
    console.log("true");
}

if (x===y) {
    console.log("型も同じです");
}

// false と評価されるもの: false, undefined, null, 0, NaN, 空の文字列("")

// switch 文
