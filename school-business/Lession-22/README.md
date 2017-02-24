# [虚拟画笔](http://ife.baidu.com/course/detail/id/69)

[高博](http://ife.baidu.com/mentor/detail/id/8) | [商业平台学院](http://ife.baidu.com/college/detail/id/5)

时间  平均用时0.0天

### 课程概述

作业提交截止时间：04-24

## 任务描述

* 首先，我们需要能够响应鼠标的画布
>* 鼠标左键按下，相当于画笔落下
>* 鼠标左键抬起，相当于画笔抬起
>* 鼠标左键从按下到抬起，相当于一次用笔，用笔一次会在画布上留下某些痕迹
* 第二，我们需要一把刷子
>* 在选择了刷子工具后，鼠标用笔一次，会在画布上留下类似刷子的痕迹
>
> ![http://bj.bcebos.com/fcnp-ip/101/pic/f6a6d0b738e508413055bd7f0cb9564e.png](http://bj.bcebos.com/fcnp-ip/101/pic/f6a6d0b738e508413055bd7f0cb9564e.png)
>
* 第三，我们需要一个喷枪
>* 在选择喷枪工具后，鼠标用笔一次，可在一定范围内喷上墨迹
>* 在某片区域内多次喷洒后，这个区域的墨迹就会越来越浓重
>* 在某片区域内多次喷洒后，这个区域的墨迹就会越来越浓重
>
> ![http://bj.bcebos.com/fcnp-ip/100/pic/a8e5d66b235e99c6337e314b249b33c0.png](http://bj.bcebos.com/fcnp-ip/100/pic/a8e5d66b235e99c6337e314b249b33c0.png)
* 第四，我们需要一块橡皮
>* 橡皮工具可以把某个区域擦成白色，也可以擦成指定颜色
>* 橡皮的形状可以定成矩形或者圆形
>* 橡皮的大小可以自由设计
>
> ![http://bj.bcebos.com/fcnp-ip/100/pic/efbca9d8649a73ae4435f4cda5f6184a.png](http://bj.bcebos.com/fcnp-ip/100/pic/efbca9d8649a73ae4435f4cda5f6184a.png)
>
* 最后，我们需要切换这些功能的操作区域
>* 可以设计成图标按钮，也可以使用原生按钮，能切换功能就行

## 任务注意事项

* 请提交工程在github的托管地址
* **请尽量使用JS原生API开发**，允许使用jQuery等简单框架
* 请合理组织代码结构，添加必要的注释
* 工程以index.html启动，第三方库放在dep文件夹中，项目代码放在src文件夹中
* 如工程需要构建或特殊启动流程，请在readme.md中提供