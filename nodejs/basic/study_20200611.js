// 数値
//2進数、8進数、16進数

// Number オブジェクト
// Number オブジェクトプロパティ、Number オブジェクトメソッド
// Number.prototype メソッド

// Math オブジェクト
// 数学定数及び数学関数のためのプロパティとメソッドを有する。

// Date オブジェクト
// 日付の設定、取得、操作を行うたすうのメソッドを有する。


// テキスト処理

// 文字列

// String オブジェクト
// 文字列プリミティブデータ型のためのラッパ

// マルチインラインテンプレート文字列
// 式を埋め込むことができる文字列リテラル
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."


// 国際化
// 各言語に応じた文字列比較、数値フォーマット、日時フォーマットを提供する。

// 日時フォーマット
// 数値フォーマット
// 照合


// 正規表現
// 正規表現の作成: 2パターンある(スラッシュで囲う or RegExp オブジェクトを使用する)

// 特殊文字
// いろいろあるので後で調べる(ひととおり目は通す)。

// JavaScript での正規表現の使い方
// 正規表現を使用するメソッド
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");

var myRe = new RegExp('d(b+)d', 'g');
var myArray = myRe.exec('cdbbdbsbz');

// 括弧で囲まれた部分文字列のマッチの使用
var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);
// "Smith, John"

// フラグを用いた高度な検索
// 正規表現フラグ

// フラグを含める
var re = /pattern/flags;

var re = new RegExp('pattern', 'flags');

// 例
// 入力文字列の順序変更

// 特殊文字を用いた入力の確認
