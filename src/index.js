import $ from 'jquery'
import './css/1.css'
import './less/1.less'
import './scss/1.scss'
import './images/2.jpg'
//导入单文件组件
import App from'./components/App.vue'

$(function(){
    $('li:odd').css('background','grey')
    $('li:even').css('background','Blue')
})

class Person{
    static info ='aaa'
}

console.log(Person.info)


