// 演算子
// あまり詳細なことは書かない、わからなかったら調べる。

// 代入演算子

// 分割代入
var foo = ['one', 'two', 'three'];

// 分割を行わない代入
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// 分割代入
var [one, two, three] = foo;

// 比較演算子
// 他の言語と変わらない。厳密等価、厳密不等価くらい。

// 算術演算子

// ビット演算子

// 論理演算子
// 短絡評価というものがある。

// 文字列演算子
// 比較演算子、結合演算子が使える。

// 条件 (三項) 演算子
// 構文: 条件 ? 値1 : 値2
// 条件が真の場合、演算子は「値1」の値を選択する。そうでない場合、「値2」の値を選択する。標準的な演算子を使用できる場所ならどこでも条件演算子を使用できる。

// 例えば、
var status = (age >= 18) ? 'adult' : 'minor';
// age が 18 以上の場合、変数 status に "adult" の値が代入される。そうでない場合には、"minor" が代入される。

// カンマ演算子
// for ループ内で使用される。
const
  ABCD = ['a', 'b', 'c', 'd'],
  EFGH = ['e', 'f', 'g', 'h'];

let i, j;

for (i = ABCD.length, j = 0; j < EFGH.length; i++, j++) {
  ABCD[i] = EFGH[j];
}

console.log(ABCD);
// ["a", "b", "c", "d", "e", "f", "g", "h"]

// 単項演算子

// delete
// 削除した要素、変数は undefined となる。
x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4;    // プロパティ h を作成
delete x;       // true を返す (暗黙的に定義された場合は削除可)
delete y;       // false を返す (var つきで宣言された場合は削除不可能)
delete Math.PI; // false を返す (定義済みプロパティは削除不可能)
delete myobj.h; // true を返す (ユーザー定義プロパティは削除可能)
delete myobj;   // true を返す (暗黙的に宣言された場合は削除可能)

// typeof
// 未評価の被演算子の型を指す文字列を返す。
var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();
// 変数の型に応じて以下の値を返す。
typeof myFun;       // "function" を返す
typeof shape;       // "string" を返す
typeof size;        // "number" を返す
typeof foo;         // "object" を返す
typeof today;       // "object" を返す
typeof doesntExist; // "undefined" を返す

// void
// 値を返さずに評価する式を指定する。
// void 演算子を使用することで、式をハイパーリンクとして指定できる。
<a href="javascript:void(document.form.submit())">
Click here to submit</a>

// 関係演算子
// 被演算子を比較し、比較結果が真かどうかに基づいて Boolean の値を返す。

// in
// 指定したプロパティが指定のオブジェクトにある場合に true を返す。
// 配列
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // true を返す
3 in trees;        // true を返す
6 in trees;        // false を返す
'bay' in trees;    // false を返す（添字の指す値ではなく、
                   // 添字の数字を指定しなければならない）
'length' in trees; // true を返す（length は Array のプロパティ）

// 定義済みオブジェクト
'PI' in Math;          // true を返す
var myString = new String('coral');
'length' in myString;  // true を返す

// ユーザー定義オブジェクト
var mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar;  // true を返す
"model" in mycar; // true を返す

// instanceof
// 指定されたオブジェクトが指定されたオブジェクトの種類である場合に ture を返す。
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // 実行する文
}

// 演算子の優先順位
// 必要なときに調べる。括弧を使用することで演算子の優先順位を上書きできる。


// 式
// ある値へと決定される有効なコード単位のこと

// 基本式
// 以下のような関数があるとする:
function validate(obj, lowval, hival) {
  if ((obj.value < lowval) || (obj.value > hival))
    console.log('Invalid Value!');
}
// 以下の例のように、各フォーム要素の onChange イベントハンドラにおいて、validate を呼び出し、その関数にフォーム要素を渡すのに this を使うことができる。
// <p>Enter a number between 18 and 99:</p>
// <input type="text" name="age" size=3 onChange="validate(this, 18, 99);">

// グループ化演算子
// 値を括弧で囲むことで演算の優先順位を上書きすることができるというやつ。

// 左辺式
// new: オブジェクトのインスタンス作成時に使用する。
// var オブジェクト名 = new objectType([引数1, 引数2, ..., 引数N]);

// super: 自分の親のオブジェクトの関数を呼び出すのに使用される。
// super([引数]); // 親のコンストラクタを呼び出す。
// super.親の関数([引数]);

// 展開演算子
// 複数の引数(関数呼び出し時)や要素(配列リテラルを書く場合)が来るべき場所にそれらを展開できる式を書くことができる。
// var parts = ['shoulder', 'knees'];
// var lyrics = ['head', ...parts, 'and', 'toes'];

function f(x, y, z) { }
var args = [0, 1, 2];
f(...args);
