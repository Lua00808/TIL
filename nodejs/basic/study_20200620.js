// イテレーターとジェネレーター


// イテレーター
function makeRangeIterator(start=0, end=Infinity, step=1) {
    let nextIndex = start;
    let iterationCount =0;

    const rangeIterator = {
        next: function() {
            let result;
            if (nextIndex < end) {
                result = {value: nextIndex, done: false}
                nextIndex += step;
                iterationCount++
                return result
            }
            return {value: iterationCount, done: true}
        }
    };
    return rangeIterator;
}

// 上記のイテレーターを使う。
let it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
    console.log(result.value);
    result = it.next();
}

console.log("Iterated over sequence of size: ", result.value);
console.log(result.done);


// ジェネレーター関数
// function* : ジェネレーターオブジェクトを返すジェネレーター関数を定義
function* makeRangeIterator(start=0, end=Infinity, step=1) {
    let n = 0;
    for (let i=start; i <end; i+=step) {
        n+=1;
        yield i;
    }
    return n;
}


// 反復可能オブジェクト
var myIterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}
for (let value of myIterable) {
    console.log(value);
}

// ビルトイン反復可能オブジェクト
// String, Array, TypedArray, Map, Set は全てビルトイン反復可能オブジェクト。プロトタイプオブジェクトに Symbol.iterator メソッドを備えているため。

// 反復可能オブジェクトが必要な構文
for (let value of [...'abc']) {
    console.log(value);
}

function* gen() {
    yield* ['a', 'b', 'c'];
}

gen().next();

[a, b, c] = new Set(['a', 'b', 'c']);
a;

// 高度なジェネレーター
function* fibonacci() {
    var fn1 = 0;
    var fn2 = 1;
    while (true) {
        var current = fn1;
        fn1 = fn2;
        fn2 = current + fn1;
        var reset = yield current;
        if (reset) {
            fn1 = 0;
            fn2 = 1;
        }
    }
}
var sequence = fibonacci();
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.return());     // 2