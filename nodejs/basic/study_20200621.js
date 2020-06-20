// メタプログラミング

// Proxy
// 特定の操作に割り込んで動作をカスタマイズできる。
var handler = {
    get: function (target, name) {
        return name in target ? target[name] : 42;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b);      // 1, 42

// 用語集
// ハンドラ (handler): トラップを入れるためのプレースホルダ用オブジェクト。
// トラップ (trap): プロパティへのアクセスを提供するメソッド。オペレーティングシステムにおけるトラップの概念と同じようなもの。
// ターゲット (target): プロキシが仮想化するオブジェクト。これはプロキシのストレージバックエンドとしてしばしば使われる。拡張・設定可能でないプロパティを持つオブジェクトに関する不変条件（変更されないセマンティック、つまりオブジェクトの意味情報）は、このターゲットに対して検証される。
// 不変条件 (invariant): カスタマイズした動作を実装する際、変更されないセマンティックを不変条件と呼ぶ。ハンドラの不変条件に違反した場合、 TypeError が発生する。

// ハンドラとトラップ
// ※詳細はリファレンスページを参照。

// 取り消し可能 Proxy
// Proxy.revocable() メソッドは取り消し可能な Proxy オブジェクトの生成に使用される。revokr 関数で機能を停止したプロキシはその後いかなる操作も TypeError になる。
var revocable = Proxy.revocable({}, {
    get: function (target, name) {
        return "[[" + name + "]]";
    }
});
var proxy = revocable.proxy;
console.log(proxy.foo);     // "[[foo]]"

revocable.revoke();

console.log(proxy.foo);     // TypeError が発生
proxy.foo = 1;              // 再び TypeError
delete proxy.foo;           // ここでも TypeError
typeof proxy;               // "object" が返され, typeof はどんなトラップも引き起こさない

// リフレクション
// Reflect は割り込み操作を行うメソッドを提供する。

// より優れた apply 関数
// Reflect.apply(): 指定された引数とともに対象となる関数を呼び出す。

// プロパティ定義の成否チェック
// object.defineProperty(): プロパティの追加や変更に失敗した場合は TypeError を返し、成功したときはオブジェクトを返す。
