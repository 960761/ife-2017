class Observer {
    constructor(obj){
        // Object.freeze(obj);
        this.data = Observer.observer(obj); // 将数据转移到data上
    }
    static observer(obj){
        let res = {};
        for(let key in obj){
            if(typeof obj[key] === 'object')
                res[key] = Observer.observer(obj[key]); // 遍历对象里面所有属性，如果对象过深可能出现栈溢出
        }
        return new Proxy(res, {
            get: function(target, prop, receiver){
                console.log('你访问了 ' + prop);
                return Reflect.get(target, prop, receiver);
            },
            set: function(target, prop, value, receiver){
                if(typeof value === 'object'){
                    console.log('你设置了 ' + prop + '，新的值为 ' + JSON.stringify(value));
                    value = Observer.observer(value); // 对设置object进行遍历设置代理
                } else {
                    console.log('你设置了 ' + prop + '，新的值为 ' + value);
                }
                return Reflect.set(target, prop, value, receiver);
            }
        });
    }
}

var app1 = new Observer({
    name: 'youngwind',
    age: 25,
    edu: {
        university: 'bupt',
        major: 'computer'
    }
});

var app2 = new Observer({
  university: 'bupt',
  major: 'computer'
});

// 要实现的结果如下：
app1.data.name // 你访问了 name
app1.data.age = 100;  // 你设置了 age，新的值为 100
app1.data.edu.university;  // 你访问了 edu  你访问了 university
app1.data.edu.major = 'science';  // 你访问了 edu  你设置了 major，新的值为 science
app1.data.edu = {
    university: 'cnu',
    major: 'core'
};  // 你设置了 edu，新的值为 {university: 'cnu',major: 'core'}
app1.data.edu.university;  // 你访问了 edu  你访问了 university
app1.data.edu.major = 'science';  // 你访问了 edu  你设置了 major，新的值为 science

app2.data.university // 你访问了 university
app2.data.major = 'science'  // 你设置了 major，新的值为 science