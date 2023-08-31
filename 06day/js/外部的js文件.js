// javascript 文件后缀就是js 需要放到浏览器中运行 引入到html文件中

document.write("<h1>苏琪你好，恭喜你中奖一千万</h1>")


/* 

多行注释快捷键 Alt+Shift+A



*/

// 弱类型 的编程语言 定义变量的时候不需要指定具体变量的数据类型
var a = 10;
var b = "你好";

// js中 字符和字符串是没有区分 都叫字符串类型 可以使用双引号 也可以使用单引号 
var str1 = '你好';
var str2 = 'a';
var str3 = "a";

// 单引号都能用的好处就是 当你需要单引号的时候就可以使用双引号来包裹 反过来也一样
str1 = '"123"';
str2 = "'123'";

document.write(str1 + "<br>");
document.write(str2 + "<br>");

// 上面的写法都是可以的
var c = true;
document.write(a + "<br>");
document.write(b + "<br>");
document.write(c + "<br>");

