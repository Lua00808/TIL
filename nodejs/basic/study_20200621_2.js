// JavaScript モジュール

// モジュールの背景

// ブラウザーのサポート状況
// import
// ※IE 非対応

// export
// ※IE 非対応

// 使用例の紹介
// サンプルコード: https://github.com/mdn/js-examples/blob/master/modules/basic-modules/main.js

// 構造の具体的な例
// basic-modules を参照
/* 注意: ネイティブの JavaScript モジュールは、拡張子 .mjs を持つことが重要です。なぜなら、ブラウザーは JavaScript と互換性のある MIME タイプ text/javascript を持つファイルをインポートします。この拡張子を使うことにより、 "The server responded with a non-JavaScript MIME type" のような厳密な MIME タイプのチェックエラーを避けることができます。また、.mjs という拡張子は明確さ (つまり、このファイルはモジュールであり、通常の JavaScript ではないということ) や、他のツールとの相互利用性の観点からもよいことです。Google のさらに詳細なメモも参照してください。 */

// モジュール機能のエクスポート
// モジュール外部に公開したい項目の前に export をつける。
export const name = 'square';

export function draw(ctx, length, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, lrngth);

    return {
        length: length;
        x: x;
        y: y;
        color; color;
    };
}
// エクスポートできるものは、関数、var、let、const 及びクラス。これらは最上位の階層にある必要がある(関数内では export できない)。
// 以下のように末尾にまとめて記述することも可能。
export { name, draw, reportArea, reportPerimeter };

// スクリプトへの機能のインポート
import { name, draw, reportArea, reportPerimeter } from './modules/square.mjs';

// HTML にモジュールを適用する
// 最初に type="module" を <script> 要素に含めることで、そのスクリプトがモジュールであることを宣言する。
<script type="module" src="main.mjs"></script>

// モジュールの通常のスクリプトの間のその他の違い

// デフォルトエクスポートと名前付きエクスポート
// デフォルトエクスポート
export default randomSquare;        // 中括弧はなし
// 関数の場合
export default function(ctx) {
  ...
}
// インポートする
import randomSquare from './modules/square.mjs';    // 中括弧はなし

// 名前の衝突を避ける

// インポートやエクスポートの名前を変更する
// 名前の衝突を避けるためにモジュールに新しく名前をつけることができる
// module.mjs の内部
export {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName
};

// main.mjs の内部
import { newFunctionName, anotherNewFunctionName } from './modules/module.mjs';

// module.mjs の内部
export { function1, function2 };

// main.mjs の内部
import { function1 as newFunctionName,
         function2 as anotherNewFunctionName } from './modules/module.mjs';

// インポート側を変更するほうが賢明(モジュールがこちらで制御をできない可能性があるため)

// モジュールオブジェクトの作成
import * as Module from './modules/module.mjs';
// これは、module.mjs の中にある全てのエクスポートを取得して、それらを Module というオブジェクトのメンバーとして利用できるようにすることで、独自の名前空間を持たせるような効果がある。次のようにして使う。
Module.function1()
Module.function2()
// など
import * as Canvas from './modules/canvas.mjs';

import * as Square from './modules/square.mjs';
import * as Circle from './modules/circle.mjs';
import * as Triangle from './modules/triangle.mjs';

let square1 = Square.draw(myCanvas.ctx, 50, 50, 100, 'blue');
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);

// モジュールとクラス
// クラスをエクスポートしたりインポートしたりできる

// モジュールの集約
// 親モジュールで次の形式によるエクスポート構文を使用することが可能。
export * from 'x.mjs'
export { name } from 'x.mjs'

// 一つのファイルでまとめてエクスポートすることで以下のように記述できる。
import { Square, Circle, Triangle } from './modules/shapes.mjs';

// 動的なモジュールの読み込み
// モジュールを必要なときに動的に読み込むことができる。
import('./modules/myModule.mjs')
  .then((module) => {
    // モジュールを使って何かをする。
  });

// トラブルシューティング
// ※必要なときに参照する
