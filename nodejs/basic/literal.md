### リテラル
* 配列リテラル
* 真偽値リテラル
* 浮動小数点リテラル
* 数値リテラル
* オブジェクトリテラル
* 正規表現リテラル
* 文字列リテラル

#### 配列リテラル
```
var coffees = ['French Roast', 'Colombian', 'Kona'];
```
配列内での未指定の要素は```undefined```として解釈される。
```
var fish = ['Lion', , 'Angel'];
```
リストの最後にコンマをつけると無視される(古いブラウザではエラーの原因になるのでつけないのがベスト)。
```
var myList = ['home', , 'school', ];
```
配列の長さは4。[0]と[2]が抜けている。
```
var myList = ['home', , 'school', , ];
```
配列の長さは4。[1]と[3]が抜けている。最後のコンマは無視される。

#### 真偽値リテラル
```true``` と ```false``` がある。

#### 数値リテラル
```Number``` 及び ```BigInt``` 型は、10進数、16進数、8進数、2進数で表現することができる。
```
0, 117, -345, 123456789123456789n             (10進数)
015, 0001, -0o77, 0o777777777777n             (8進数) 
0x1123, 0x00111, -0xF1A7, 0x123456789ABCDEFn  (16進数)
0b11, 0b0011, -0b11, 0b11101001010101010101n  (2進数)
```

#### 浮動小数点リテラル
例:
```
3.1415926
-.123456789
-3.1E+12
.1e-23
```

#### オブジェクトリテラル
プロパティとそれに関連付けられたオブジェクトの値と0個以上の組が波括弧で囲まれたもので作られたリストのこと。
```car``` オブジェクトの最初の要素には```myCar```プロパティが定義され、新規文字列```"Saturn"```が割り当てられている(以下の説明は省略)。
```
var sales = 'Toyota';

function carTypes(name) {
    if (name === 'Honda') {
        retun name;
    } else {
        return "Sorry, we don`t sell" + name + ".";
    }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota 
```
さらに、数値リテラルや文字列リテラルをプロパティ名に指定したり、オブジェクトを別のオブジェクトに入れ子にすることができる。以下例:
```
var car = { manyCars: {a: 'Saab', b: 'Jeep'}, 7: 'Mazda' };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```
プロパティが Javascript で有効な識別子か数値でなければ、引用符で囲む必要がある。
有効でない識別子にプロパティ名にアクセス、設定するには、配列のような表記法("[]")を使う。
```
var unusualPropertyNames = {
  '': '空文字列',
  '!': 'バン！'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string が発生
console.log(unusualPropertyNames['']);  // 空文字列
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token ! が発生
console.log(unusualPropertyNames['!']); // バン！
```

#### 正規表現リテラル
後で詳しく説明。以下例:
```
var re = /ab+c/;
```

#### 文字列リテラル
シングルクォートかダブルクォートで囲む。
```
'foo'
"bar"
'1234'
```
文字列リテラルを持つ値は、String オブジェクトのメソッドを呼び出せる。
```
console.log("John's cat".length) 
// ホワイトスペースを含む文字列の文字の数を出力する。 
// この場合は 10 が出力される。
```

逆引用符を使用して、テンプレートリテラルを利用できる。
```
// 基本的な文字列リテラルの作成
`In JavaScript '\n' is a line-feed.`

// 複数行の文字列
`In JavaScript template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`

// 文字列補完
var name = 'Bob', time = 'today';
`Hello ${name}, how are you ${time}?`

// 置換や構築を解釈するために使用される HTTP リクエストの接頭辞を構築
POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);
```
##### 特殊文字
特殊文字はググってください。
他の言語と大して変わらない印象。

##### 文字のエスケープ
ググってください。
バックスラッシュでエスケープ。

