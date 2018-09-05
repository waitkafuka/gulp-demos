### 常见的锚点定位页面位置--页面位置滚动联动锚点的插件   

### 使用
1. 比如导航为：语文 数学：  
 
    ```html
    <div class="sidebar">
        <a href="#yuwen">语文</a>  
        <a href="#shuxue">数学</a> 
        <a href="#gotop">回到顶部</a>
    </div>
    ```  
 
2. 需要有对应ID的html元素，比如： 
 
    ```html
    <div id="gotop"></div>
    <div id="yuwen"></div>  
    <div id="shuxue"></div>
    ```  

3. js代码：  

     ```javascript
    var buildBar = require('navbar-builder'); 
    buildBar({
        "anchors": ['gotop', 'yuwen', 'shuxue'],
        "activeClass": 'active',
        "autoHide": true,
        "autoHideThreshold": 200,
        "useFade": false,
        "sideBar": $(".sidebar")
    });
     ```
     
### options 

|名称|是否必须|描述|
|:--:|:--:|----|
| anchors  | 必须 | 锚点列表数组<br>**注意：锚点列表数组必须按位置从上到下的顺序排列** |
| activeClass | 可选 | 当前锚点的class，默认为active |
| autoHide | 可选 | 整个导航区域，是否是自动显示隐藏的。适合导航栏在右侧的情况，默认隐藏，往下滚动200px后显示  |
| autoHideThreshold | 可选 | 往下滚动多少后进行显示 |
| useFade | 可选 | 是否用fadeIn和fadeOut进行显示，默认false（用show()和hide()） |
| sideBar | 可选 | 导航的容器元素。默认为$('.sidebar') |
  


### 依赖jquery
 但项目中可能已经引入了jquery，所以不做硬性引入，以免版本不同造成的冲突。使用时请自行添加依赖

### 实现效果
1.点击锚点，页面可以滚动  

2.页面滚动到某个位置时，其对应的导航将高亮（默认加上active的class）  

### 示例界面  
[http://jsblog.cc/demo/ab/](http://jsblog.cc/demo/ab/)


#### 有问题请联系：zhen0578@qq.com

