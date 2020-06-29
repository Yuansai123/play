<template>
    <div class="content">
        <header>
            <h2>这里是头部</h2>
        </header>
        <nav>
            <li>1</li><li>2</li><li>3</li><li>4</li>
        </nav>
        <main>
            <section class="con">
                <article>
                    <img src="" alt="">
                </article>
                <aside>
                    <li contenteditable="true">title</li>
                    <li contenteditable="true">prcit</li>
                </aside>
                
            </section>
            <section class="xcon">
                <li>详情简介:<span class="text" contenteditable="true" style="border:solid 1px #333">真的好</span></li>
                <li>活动相关:<span class="text" contenteditable="true" style="border:solid 1px #333">秒杀</span></li>
                <li>推荐指数:<span class="text" contenteditable="true" style="border:solid 1px #333">赶紧买</span></li>
            </section>
             <section class="con">
                <article>
                    <img src="" alt="">
                </article>
                <aside>
                    <li contenteditable="true">title</li>
                    <li contenteditable="true">prcit</li>
                </aside>
                
            </section>
            <section class="xcon">
                <li>详情简介:<span class="text" contenteditable="true" style="border:solid 1px #333">真的好</span></li>
                <li>活动相关:<span class="text" contenteditable="true" style="border:solid 1px #333">秒杀</span></li>
                <li>推荐指数:<span class="text" contenteditable="true" style="border:solid 1px #333">赶紧买</span></li>
            </section>
            <section class="con">
                <article>
                    <img src="" alt="">
                </article>
                <aside>
                    <li contenteditable="true">title</li>
                    <li contenteditable="true">prcit</li>
                </aside>
                
            </section>
            <section class="xcon">
                <li>详情简介:<span class="text" contenteditable="true" style="border:solid 1px #333">真的好</span></li>
                <li>活动相关:<span class="text" contenteditable="true" style="border:solid 1px #333">秒杀</span></li>
                <li>推荐指数:<span class="text" contenteditable="true" style="border:solid 1px #333">赶紧买</span></li>
            </section>
            <section class="con">
                <article>
                    <img src="" alt="">
                </article>
                <aside>
                    <li contenteditable="true">title</li>
                    <li contenteditable="true">prcit</li>
                </aside>
                
            </section>
            <section class="xcon">
                <li>详情简介:<span class="text" contenteditable="true" style="border:solid 1px #333">真的好</span></li>
                <li>活动相关:<span class="text" contenteditable="true" style="border:solid 1px #333">秒杀</span></li>
                <li>推荐指数:<span class="text" contenteditable="true" style="border:solid 1px #333">赶紧买</span></li>
            </section>
        </main>
        <footer class="foolter-p">
            <section class="foolter-child">
                <canvas id="can" ref="can" width="20%" height="20px">请升级浏览器</canvas>
                <span>首页</span>
            </section>
            <section class="foolter-child">
                <canvas id="can2" ref="can2" width="20%" height="20px">请升级浏览器</canvas>
                <span>工作台</span>
            </section>
            <section class="foolter-child">
                <canvas id="can3" ref="can3" width="20%" height="20px">请升级浏览器</canvas>
                <span>地图</span>
            </section>
            <section class="foolter-child">
                <canvas id="can4" ref="can4" width="20%" height="20px">请升级浏览器</canvas>
                <span>我的</span>
            </section>
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){
        let can=this.$refs.can
        let ctx = can.getContext('2d')
        ctx.fillStyle='red';
        ctx.beginPath();
        ctx.arc(10,10,5,0,2*Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        console.log(can)
        //_________________________
        // let can2=this.$refs.can2
        // let ctx2 = can2.getContext('2d')
        // ctx2.fillStyle='red';
        // ctx.fillRect(10,5,80,20)
        //_________________________
        // let can3=this.$refs.can3
        // let ctx3 = can3.getContext('2d')
        // ctx3.fillStyle='red';
        // //____________________________
        // let can4=this.$refs.can4
        // let ctx4 = can4.getContext('2d')
        // ctx4.fillStyle='red';
        
    }
}
</script>
<style>
li{
    list-style: none;
}
/* 容器 */
.content{
    width: 400px;
    display: flex;
    flex-direction: column;
    background: greenyellow;
}
/* 头部 */
header{
    background: hotpink;
}
/* 导航 */
 nav{
     display: flex;
     list-style: none;
     justify-content: space-around;
 }
 nav li{
     text-align: center;
     background: chocolate;
     display: inline-block;
     width: 23%;
 }
 /* 内容 */
 main{
     /* flex: 1; */
     height: 500px;
     overflow: auto;  
 }
 .con{
     width: 100%;
     min-height: 200px;
     display: flex;
     justify-content: space-around;
 }
aside{
    width: 200px;
    height: 200px;
}
aside li{
    height: 90px;
    text-align: center;
    line-height: 90px;
    border: darkcyan solid 5px;
    color: darkkhaki;
}
 img{
     display: block;
     width: 200px;
     height: 200px;
     background: darkblue;
 }
 .xcon{
     width: 400px;
     height: 100px;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     border-bottom: darksalmon 10px solid;
 }
 .xcon li{
     width: 400px;
     text-align: left;
     position: relative;
 }
 .xcon li span{
     position: absolute;
     color: darkorchid;
 }
 .text{
     width: 300px;
     display: inline-block;
     max-width: 300px;
     overflow: hidden;
 }
/* 注脚 */
footer{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
}
.foolter-child{
    width: 24%;
    height: 50px;
    display: flex;
    flex-direction: column;
    background: cyan;
}
</style>