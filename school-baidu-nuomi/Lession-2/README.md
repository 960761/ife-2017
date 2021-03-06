# [动态数据绑定（一）](http://ife.baidu.com/course/detail/id/15)

[梁少峰](http://ife.baidu.com/mentor/detail/id/26) | [斌斌学院](http://ife.baidu.com/college/detail/id/10)

时间  平均用时0.0天

### 课程概述

作业提交截止时间：04-24

## 重要说明

百度前端技术学院的课程任务是由百度前端工程师专为对前端不同掌握程度的同学设计。我们尽力保证课程内容的质量以及学习难度的合理性，但即使如此，真正决定课程效果的，还是你的每一次思考和实践。<br />
课程多数题目的解决方案都不是唯一的，这和我们在实际工作中的情况也是一致的。因此，我们的要求不仅仅是实现设计稿的效果，更是要多去思考不同的解决方案，评估不同方案的优劣，然后使用在该场景下最优雅的方式去实现。那些最终没有被我们采纳的方案，同样也可以帮助我们学到很多知识。所以，我们列出的参考资料未必是实现需求所必须的。有的时候，实现题目的要求很简单，甚至参考资料里就有，但是背后的思考和亲手去实践却是任务最关键的一部分。在学习这些资料时，要多思考，多提问，多质疑。相信通过和小伙伴们的交流，能让你的学习事半功倍。

## 任务目的

1. 了解 getter 和 setter
2. 了解 new

## 任务描述

这是“动态数据绑定”系列的第一题。<br />
我之前经常使用 Vue，后来不满足于仅仅使用它，我想了解其内部实现原理，所以就尝试学习其源码，获益匪浅。所以，如果你跟我一样，希望挑战这高难度的事情，那就开启这一系列吧！<br />
我们从最简单的开始。<br />
其中，动态数据绑定就是 Vue 最为基础，最为有用的一个功能。这个系列将分成5部分，一步一步来理解和实现这一功能。<br />
ok，我们从最简单的开始。给定任意一个对象，如何监听其属性的读取与变化？也就是说，如何知道程序访问了对象的哪个属性，又改变了哪个属性？ 举个例子。<br />

```javascript
let app1 = new Observer({
  name: 'youngwind',
  age: 25
});

let app2 = new Observer({
  university: 'bupt',
  major: 'computer'
});

// 要实现的结果如下：
app1.data.name // 你访问了 name
app.data.age = 100;  // 你设置了 age，新的值为100
app2.data.university // 你访问了 university
app2.data.major = 'science'  // 你设置了 major，新的值为 science
```

请实现这样的一个 Observer，要求如下：

1. 传入参数只考虑对象，不考虑数组。
2. new Observer返回一个对象，其 data 属性要能够访问到传递进去的对象。
3. 通过 data 访问属性和设置属性的时候，均能打印出右侧对应的信息。

## 任务注意事项

1. 不能使用任何第三方的库
2. 程序执行环境为浏览器

## 在线学习参考资料

* [vue早期源码学习系列之一：如何监听一个对象的变化](https://github.com/youngwind/blog/issues/84)