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
