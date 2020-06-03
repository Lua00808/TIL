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
switch (x) {
    case 1:
        console.log("x は1");
        break;
    case 2:
        console.log("x は2");
        break;
    default:
        console.log("x は"+x);
        break;
}

// throw 文
// 例外を throw するために使用する。

// throw "Error2"; // 文字列型
// throw 42;       // 数値型
// throw true;     // 論理型
/* 
throw {toString: function() {
    return "これはオブジェクトです!";
}};
*/
// 例外をスローする際にオブジェクトを指定することができる。そして、catch でそのオブジェクトのプロパティを参照することができる。

// try...catch 文
// スローされる例外に対する1つ以上の対処方法を指定する。
// 成功した場合に実行したい try ブロックと、失敗した場合に制御を移行させたい catch ブロックで構成される。
// try ブロックのいずれかの文が例外をスローすると catch ブロックに移る(されなかった場合はスキップされる)。
// finally ブロックは try 及び catch ブロックの後に実行されるが、try...catch 文の後に続く文より先に実行される。
function getMonthName(mo) {
  mo = mo - 1; // 月の数字を配列のインデックスに合わせる (1=Jan, 12=Dec)
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[mo]) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo'; //throw キーワードが使われている
  }
}

try { // 実行を試みる文
  monthName = getMonthName(myMonth); // この関数が例外をスローする場合がある
}
catch (e) {
  monthName = 'unknown';
  logMyErrors(e); // 例外オブジェクトをエラーハンドラーに渡す
}

// catch ブロック
// catch の引数には、throw で指定される値を保持していく識別子を指定する。
// 識別子のスコープは catch の中だけ。
try {
    throw 'myException';    // 例外を生成
}
catch (err) {
    // ここには例外を扱う文が入る
    logMyErrors(err);       // 例外オブジェクトをエラーハンドラに渡す
}
/*
ベストプラクティス: catch ブロック内でコンソールにエラーをログ出力する場合は、console.log() よりも console.error() がデバッグ目的では推奨されています。これはメッセージをエラーとして書式化し、ページによって生成されたエラーメッセージの一覧に追加します。
*/

// finally ブロック
// try 及び catch ブロックの実行後に実行される文が入る。
// finally ブロックは例外が発生するかどうかにかかわらず実行される。例外が発生された場合 catch ブロックで処理されなくても実行される。
openMyFile();
try {
  writeMyFile(theData); // ここでエラーがスローされる可能性がある
} catch(e) {  
  handleError(e); // エラーを受け取り、それを処理する
} finally {
  closeMyFile(); // 常にリソースが閉じられる
}

// finally ブロックが値を返す場合、その値は try および catch ブロックの return 文にかかわらず try…catch…finally 全体が生成する返値になる。
function f() {
  try {
    console.log(0);
    throw 'bogus';
  } catch(e) {
    console.log(1);
    return true;    // この返値は、finally ブロックが
                    // 完了するまで保留となる
    console.log(2); // ここまで到達しない
  } finally {
    console.log(3);
    return false;   // 直前の "return" が上書きされる
    console.log(4); // ここまで到達しない
  }
  // ここで "return false" が実行される
  console.log(5);   // ここまで到達しない
}
console.log(f()); // 0, 1, 3, false

// finally ブロックによる返値の上書きは、catch ブロック内で発生した、または再発生した例外にも適用される。
function f() {
  try {
    throw 'bogus';
  } catch(e) {
    console.log('caught inner "bogus"');
    throw e; // この throw 文は finally ブロックが
             // 完了するまで保留になる
  } finally {
    return false; // 直前の "throw" が上書きされる
  }
  // ここで "return false" が実行される
}

try {
  console.log(f());
} catch(e) {
  // ここには到達しない
  // f() を実行した際、`finally` ブロックが false を返し、
  // 上記の `catch` の中にある `throw` を上書する
  console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"
// false

// try...catch の入れ子
// 1つ以上の try...catch 文を入れ子にすることができる。
// 内側の try...catch に catch ブロックがない場合は以下のようになる:
//      1. finally ブロックを含む必要がある。
//      2. 囲んでいる try...catch ブロックがエラーの照合先としてチェックされる。
//      ※詳しくは後で勉強する。


// Error オブジェクトの活用
// エラーの種類に応じて、name や message プロパティを使ってより詳細なメッセージが得られるようにすることができる。
// name は Error クラスの全般を表し、一方 message は通常、エラーオブジェクトを文字列に変換したものより簡潔なメッセージを表す。
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
// ⋮
try {
  doSomethingErrorProne();
} catch (e) {               // ここで、実際には `console.error()` を使用
  console.error(e.name);    // 'Error' をログ出力
  console.error(e.message); // 'The message'、または JavaScript のエラーメッセージをログ出力
}
