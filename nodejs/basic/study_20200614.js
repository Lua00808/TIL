// キー付きコレクション

// Map
// 挿入順に要素を反復処理させることができる。

// Object  と Map との比較
// Object のキーは Strings オブジェクト。Map は何でも使える。
// Map は簡単にキーを取得できるのに対し、Object は手作業で追跡する必要がある。
// Map の反復処理は要素の挿入順に行われる。
// Object はプロトタイプを持っているので、オブジェクトによるマップにはデフォルトキーが存在する（これは map = Object.create(null) を使って回避できる）。

// 基本的には Map のほうが便利なので、Map を使用する。個々の要素を操作する場合は、オブジェクトのほうがよい。

// WeakMap オブジェクト
// キーはオブジェクトのみ、値任意の値にできる。

// Set
// 挿入順に要素を反復処理できる。値は一意。
var mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"

// Array と Set 間の変換
// Array.from またはスプレッド構文を用いて Set から Array を生成できる。逆変換も可能。ただし Set は一意の値を格納するので、重複した値は変換時に削除される。
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);

// Array と Set との比較
// 配列の indexOf は低速
// Set は値を使って要素を削除できる
// NaN 値は配列の indexOf で検索できない
// Set は一意の値を格納する(重複は自動で削除される)

// WeakSet オブジェクト
// オブジェクトは列挙可能ではない。

// Set との主な違い
// Set とは対象的に、WeakSet はオブジェクトのみのコレクション
// コレクションでのオブジェクトでの参照は弱く保持されている(WeakSet 内に格納されているオブジェクトに対する参照がなくなった場合、ガベージコレクションされます。これはまた、現在コレクション内に格納されているオブジェクトのリストがないということを表しています。WeakSet は列挙可能ではありません。)
// WeakSet の使用は限定的

// Map とSet におけるキーと値の等値性
// "===" で判定される。
// -0 と +0 は等しいとみなされる。
// NaN は(=== とは逆に)自身と等しいとみなされる。


// オブジェクトでの作業

// オブジェクトの概要

// オブジェクトとプロパティ
// オブジェクトに割り当てられていないプロパティは null ではなく undefined

// オブジェクトの全プロパティの列挙
// for...in: 列挙可能なプロパティを全て横断する
// Object.keys(o): 列挙可能な全てのプロパティ名("keys")を配列で返す
// Object.getOwnPropertyNames(o): オブジェクト独自の全てのプロパティを列挙可能かどうかに関わらず配列で返す

// 新しいオブジェクトの作成
// オブジェクト初期化子の使用
var obj = { property_1:   value_1,   // property_# は識別子だったり、
            2:            value_2,   // 数値だったり、
            // ...,
            'property n': value_n }; // 文字列だったりします

// コンストラクター関数の使用
// 1. コンストラクター関数を記述してオブジェクトの型を定義
// 2. new でオブジェクトのインスタンスを作成する
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
// 以下のようにして mycar と呼ばれるオブジェクトを作成する
var mycar = new Car('Eagle', 'Talon TSi', 1993);

// Object.create メソッドの使用
// Animal のプロパティとメソッドをカプセル化
var Animal = {
  type: 'Invertebrates', // プロパティの既定値、「無脊椎動物」
  displayType: function(){  // Animal の種類を表示するメソッド
    console.log(this.type);
  }
}

// animal1 という新しい animal 型を作成
var animal1 = Object.create(Animal);
animal1.displayType(); // 出力 : Invertebrates

// Fishes という新しい animal 型を作成
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // 出力 : Fishes


// 継承
// 継承元になるオブジェクトをプロトタイプといい、継承されたプロパティはコンストラクタの prototype オブジェクトにある。

// オブジェクトプロパティのインデックス付け

// オブジェクト型に対するプロパティの定義
// prototype プロパティを使用すると定義済みのオブジェクトに対しプロパティを追加することができる。

// メソッドの定義
// this はメソッドが属するオブジェクトを参照しているということを表す。
function displayCar() {
  var result = '美しい ' + this.year + '年式 ' + this.make
    + ' ' + this.model;
  pretty_print(result);
}
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.displayCar = displayCar;
}

// オブジェクト参照のための this 使用
// メソッド内で現在のオブジェクトを参照するために使う(メソッド内の this 歯呼び出し元オブジェクトを参照する)。

// ゲッターとセッターの定義
// ゲッター: 特定のプロパティ値を取得するためのメソッド
// セッター: 特定のプロパティ値を設定するためのメソッド
var o = {
  a: 7,
  get b() { 
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a); // 25

// オブジェクト初期化子を使用して定義する
// ゲッターやセッターを追加するメソッドを使用した、任意のオブジェクトへの後からの追加
var o = {
  a: 7,
  get b() { return this.a + 1; },
  set c(x) { this.a = x / 2; }
};
// Object.defineProperties を使用して生成後のオブジェクトにいつでも追加可能
var o = { a: 0 };

Object.defineProperties(o, {
    'b': { get: function() { return this.a + 1; } },
    'c': { set: function(x) { this.a = x / 2; } }
});

o.c = 10; // 'a' プロパティに 10 / 2 (5) を代入するセッターを実行します
console.log(o.b); // a + 1 つまり 6 を与えるゲッターを実行します

// プロパティの削除
// 継承されたものでないプロパティは delete 演算子で削除可能。

// オブジェクトの比較
// JS では、オブジェクトは参照型なので、同じプロパティを持っていても等値とはみなされない。同じオブジェクトへの参照を比較したときのみ真となる。
// 2 つの変数は、同じプロパティを持つ 2 つの異なるオブジェクト
var fruit = {name: 'apple'};
var fruitbear = {name: 'apple'};

fruit == fruitbear; // false が返される
fruit === fruitbear; // false が返される

// 2 つの変数、オブジェクトは 1 つ
var fruit = {name: 'apple'};
var fruitbear = fruit;  // fruitbear に fruit オブジェクトへの参照を代入

// fruit と fruitbear は同じオブジェクトを指している
fruit == fruitbear; // true が返される
fruit === fruitbear; // true が返される

fruit.name = 'grape';
console.log(fruitbear);    // { name: "apple" } ではなく { name: "grape" } と出力される