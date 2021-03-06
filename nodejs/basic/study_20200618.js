// Promise を使う

// 保証
// 旧来のコールバック渡しとは異なり、Promise では以下が保証される。
// 現在の javascript イベントループの実行完了より前にはコールバックが決して呼び出されない。
// 非同期処理が完了もしくは 失敗した後に then() により登録されたコールバックでも、上記のように呼び出される。
// then() を何回も呼び出して複数のコールバックを追加してもよく、それぞれのコールバックは追加順に独立して実行される。
// 最もすぐわかる Promise の利点は Promise チェーン。

// Promise チェーン
const promise = dosomething();
const promise2 = promise.then(successCallback, failureCallback);
// もしくは、
const promise2 = dosomething().then(successCallback, failureCallback);

// catch 後のチェーン
new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');
        
    console.log('Do this');
})
.catch(() => {
    console.log('Do that');
})
.then(() => {
    console.log('Do this whatever happened before');
});
// Initial
// Do that
// Do this whatever happened before
/* 注意:Do this のテキストは Something failed エラーが reject を引き起こしたため出力されないことに注意してください。 */


// エラーの伝播
async function foo() {
    try {
        const result = await doSomething();
        const newResult = await doSomethingElse(result);
        const finalResult = await doThirdThing(newResult);
        console.log(`Got the final result: ${finalResult}`);
    } catch(error) {
        failureCallback(error);
    }
}

// Promise 失敗のイベント
// rejectionhandled: Promise が失敗したとき、それが reject 関数などによって処理されたあとに送られる。
// unhadledrejection: Promise が失敗して、ハンドラーが存在しないときに送られる。

// 古いコールバック API をラップする Promise の作成

// 合成 (Composition)
// 以下のように複数の処理を平行に開始し、全ての処理が終了するのを待つことができる。
Promise.all([func1(), func2(), func3()])
.then(([result1, result2, result3]) => { /* result1, result2, result3 が使える */ });

// タイミング

// ネスト
// 単純な Promise チェーンならば、ネストは不用意な合成の結果生まれるものなので、ネストせず平らにしておくのがベスト。
doSomethingCritical()
.then(result => doSomethingOptional(result)
  .then(optionalResult => doSomethingExtraNice(optionalResult))
  .catch(e => {})) // オプションの処理が失敗すれば無視して進める
.then(() => moreCriticalStuff())
.catch(e => console.log("Critical failure: " + e.message));

// よくある間違い

// Promise とタスクが衝突するとき
