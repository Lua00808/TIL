// クロージャ

var pet = function(name) {
    var getName = function() {
        return name;
    }
    return getName;             // 内側の関数を返すことで、外側の関数に公開する
}
myPet = pet("Viive");
myPet();

// 外側の関数の内部にある変数を操作するメソッドを含む、オブジェクトを返すことができる。

var createPet = function(name) {
    var sex;

    return {
        setName: function(newName) {
            name = newName;
        },
        setSex: function() {
            return sex;
        }
    }
}

var pet = createPet('Vivie');

pet.setName('Oliver');
pet.setSex('male');

// クロージャの落とし穴
// 内側の関数で外側のスコープにある変数と同じ名前の変数を定義した場合、外側のスコープにある変数を再び参照する方法がなくなる。

var createPet = function(name) {        // 変数 "name" を定義
    return {
        setName: function(name) {       // 外側の変数と同名の変数を定義
            name = name;                // 外側の変数にアクセスできなくなる
        }
    }
}

// arguments オブジェクトの使用
// 関数のオブジェクトは、配列のような表記で表せる。
// argumets[i]
function myConcat(separator) {
   var result = "", // リストを初期化する
       i;
    console.log(arguments.length);
   // 引数について繰り返し
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}
// "red, orange, blue, " を返す
p1 = myConcat(", ", "red", "orange", "blue");
// "elephant; giraffe; lion; cheetah; " を返す
p2=myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
// "sage. basil. oregano. pepper. parsley. " を返す
p3=myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");

// 区切られるのは separate と書くと多分引数の最初の値が出るからだと思う。

// 関数の引数

// デフォルト引数
// 関数の引数は デフォルトでは undifined となるが、別のデフォルト値を設定しておきたいことなどがある。
function multiply(a, b = 1) {       // b に 1 を代入できる。
  return a*b;
}

multiply(5); // 5

// 残余引数
// 関数の最後の引数に ... の接頭辞をつけると、その位置にある残りの引数を JavaScript の「標準の」配列の中に挿れることができる。
// arguments オブジェクトと違って sort,map,forEach,pop などのメソッドを直接適用できる。
function multiply(multiplier, ...theArgs) {
    console.log(multiplier);                    // 2
    console.log(theArgs);                       // [ 1, 2, 3 ]
  return theArgs.map(x => multiplier * x);
}
var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

// アロー関数(関数の短縮形)
/*
(param1, param2, …, paramN) => { statements } 
(param1, param2, …, paramN) => expression
// 上記の式は、次の式と同等です: => { return expression; }

// 引数が 1 つしかない場合、丸括弧 () の使用は任意です:
(singleParam) => { statements }
singleParam => { statements }

// 引数がない場合、丸括弧を書かねばいけません:
() => { statements }
*/
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]

// 定義済み関数
// 割愛。調べれば出てくるので必要なときにググる。
