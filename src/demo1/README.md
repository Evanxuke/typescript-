# 在TypeScript中，有哪些基本数据类型
# 前言：
TypeScript的定义功能是将它与JavaScript和CoffeeScript分开，它是静态类型，它允许声明变量类型。编译器确保为变量分配正确的值类型，并且如果省略类型声明，它甚至可以进行推断。除了“数字”，“布尔”和“字符串”等几种原始类型之外，还可以使用名为“any”的动态类型。它允许为变量分配任何类型的值。因此，TypeScript不会标记“任何”变量的类型错误。

1.布尔值 boolean,跟js一样仅仅用来表示true/false
```js
let isDone: boolean = false;
```
2.数值 number,除了支持所有的浮点型数字，还支持十六进制，八进制，二进制。
```js
let hexadecimal: number = 0xf00d,//十六进制
    binary: number = 0b1010,//二进制
    octal: number = 0o744//八进制
```
3.文本类型 string,可以使用单引号''或者双引号""来包含字符串数据
```js
let color: string = "blue";
color = 'red';
```
当然，你也可以用模板内嵌表达式来表示
```js
let fullName: string = `fullName`;
let sentence: string = `Hello, my name is ${ fullName }.
```
4.数组 Array,你可以用两种方式来声明一个数组类型
```js
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```
5.Tuple类型，该类型允许你创建一个已知数量的数组，里面的元素必须严格按照声明的类型顺序，但是不同的是声明的元素类型不一定要是相同的。
```js
// 声明一个Tuple类型
let x: [string, number];
x = ["hello", 10]; // OK
x = [10, "hello"]; // Error
```
6.枚举类型 enmu,它可以友好的为一组数字定义名称
```js
//如果不给于赋值的话，那么默认将会以0,1,2以此类推
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
//如果给其中的一个赋值，后面的不赋值那么后面的会以此类推，前面的将会从0开始
enum Color {Red, Yellow, Green = 4, Blue}
//c=2
let c: Color = Color.Yellow;
//c=5
c = Color.Blue;
```
7.任意类型 Any，很多时候我们不知道一个数据他的类型的时候，那么久可以使用any
```js
let a: any;
a = true;//ok
a = 6;//ok
a = "some string";//ok
```
虽然你可以为他们赋任何值，但是你却不能随意调用任何方法，代码不会报错，但是编译会挂掉，如：
```js
let a: any;
a = "6";
a.toFixed();//代码校验不会报错，但是编译会报错
```
你也可以为数据定义any类型
```js
let ar : any[];
ar = [6,"string",{name:"xuke"}];
```
8.空类型 void，一般用作函数的返回值
```js
const fn = (): void=>{}
```
9.never 类型，用于函数永远返回异常
```js
const fn = (): never => {
      throw new Error('message')
}
```
10.object 类型，用来表述引用类型
```js
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error

```
11.类型断言，当你明确的知道某个数据类型的时候，可以使用类型断言，它有两种表现形式：

第一种：
```js
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```
第二种：
```js
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```
