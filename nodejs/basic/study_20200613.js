// インデックス付きコレクション

// Array オブジェクト
// 配列を操作するメソッド、プロパティが提供されている。
var arr = new Array(a0, a1, a2);
var arr = Array(a0, a1, a2);
var arr = [a0, a1, a2];

// 新規または既存のオブジェクトのプロパティへ配列を割り当てる
var obj = {};
// ...
obj.prop = [element0, element1, elementN];

// あるいは、
var obj = {prop: [element0, element1, elementN]};

// RangeError になる
var arr = Array(9.3);
// これはおｋ
var arr = [9.3];
let wisenArray = Array.of(9.3);  // wisenArray は1つの要素 9.3 だけを持つ配列

// 配列へのデータ追加
// arr[3.9] = 'aaaa' のように、角括弧内に非整数値を入れると配列オブジェクトのプロパティとして作成される。

// 配列要素の参照

// 配列の長さの理解
// length プロパティは常に最終要素の添字+1を返す。
// length プロパティに値を割り当てると、それより大きい添字の要素は削除される。

// 配列の反復処理
var colors = ['red', 'green', 'blue'];
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// 配列のメソッド
// いろいろあります。

// 多次元配列
var a = new Array(4);
for (i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (j = 0; j < 4; j++) {
    a[i][j] = '[' + i + ', ' + j + ']';
  }
}

// 配列と正規表現

// 配列様のオブジェクトを利用する

// 型付き配列

// ArrayBuffer
// 詳細は調べて
// 型付配列ビュー
// 詳細は調べて
