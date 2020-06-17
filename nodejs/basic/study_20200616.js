// オブジェクトモデルの詳細
// クラスベース言語とプロトタイプベース言語
// クラスの定義
// サブクラスと継承
// プロパティの追加と削除
// 相違点の概要

// 事例 : 従業員モデル

// 階層の作成
function Employee() {
    this.name='';
    this.dept='general';
}
function Manager() {
    Employee.call(this);
    this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

function WorkerBee() {
    Employee.call(this);
    this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);
WorkerBee.prototype.constructor = WorkerBee;

function SalesPerson() {
    WorkerBee.call(this);
    this.dept = 'sales';
    this.quota =100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);
SalesPerson.prototype.constructor = SalesPerson;

function Engineer() {
    WorkerBee.call(this);
    this.dept = 'engineering'
    this.machine = '';
}
Engineer.prototype = Object.create(WorkerBee.prototype);
Engineer.prototype.constructor = Engineer;

// 簡単な定義によるオブジェクトの作成
var jim = new Employee;         // 括弧は省略可能
var sally = new Manager;
var mark = new WorkerBee;
var fred = new SalesPerson
var jane = new Engineer;

// オブジェクトのプロパティ
// プロパティの継承

// プロパティの追加

// より柔軟なコンストラクター
function Employee(name, dept) {
    this.name = name || '';
    this.dept = dept || 'general';
}

function WorkerBee(projs) {
    this.name = '';
    this.projects = projs || [];
}
WorkerBee.prototype = new Employee;

function Engineer(mach) {
    this.dept = 'engoneering';
    this.machine = mach || '';
}
Engineer.prototype = new WorkerBee;

// その2
function Engineer(name, projs, mach) {
    this.base = WorkerBee;
    this.base(name, 'engineering', projs)
    this.machine = mach || '';
}
// 新しい Engineer オブジェクトを作成する
var jane = new Engineer('Doe, jane', ['navigator', 'javascript', 'belau']);

// call() / apply() メソッドを使う
function Engineer(name, projs, mach) {
    WorkerBee.call(this, name, 'engineering', projs);
    this.machine = mach || '';
}


// プロパティの継承、再び
// ローカル値と値継承
/* オブジェクトのプロパティにデフォルトの値を持たせて、実行時にデフォルト値を変更したいのであれば、コンストラクター関数内でなく、コンストラクターのプロトタイプ内でプロパティを設定するようにしてください。 */

// インスタンス関係の決定
