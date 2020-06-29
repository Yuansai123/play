<template>
    <div class="box" >
        <div class="content">
            <p class="p1">+已缴{{yijihushu}}户</p><p class="p2">－未缴{{weijihushu}}户</p>
        </div>
        <div class="deep">
            <div class="green" ref='green'>
                <div class="green0" >
                    <span class="green1">{{yijibfb}}</span><span class="green2">%</span>
                </div>
                </div>
            <div class="smak" ref='smak'></div>
            <div class="red" ref='red'><span class="red1">{{weijibfb}}</span><span class="red2">%</span></div>
        </div>
        <button @click="btn">点击修改数据</button>
        <button @click="btn">点击修改数据</button>
        <button @click="btn">111</button>
        <button @click="btn">3333</button>
        <button @click="btn">11</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            nums:10000,//总数
            yijihushu:5000,//
            weijihushu:5000,//
            yijibfb:50,//
            weijibfb:50//
        }
    },
    methods:{
        btn(){
            this.yijihushu = 6000;this.weijihushu =this.nums-this.yijihushu;
            this.yijibfb = parseInt(6000/this.nums*100);
            console.log(this.yijibfb,this.yijihushu,this.nums)
            this.weijibfb = parseInt(100 - this.yijibfb)
            this.$refs.green.style.width =this.yijibfb+'%' 
            this.$refs.red.style.width =this.weijibfb+'%' 
            this.$refs.smak.style.left = parseInt(this.yijibfb-2.5)+'%'
        }
    }
}
</script>
<style >
.box{width: 400px;height: 100px;}
.content{
    width: 400px;
    height: 50px;
    display: flex;
    justify-content: space-around;
}
.p1{color: green;}
.p2{color: red;}
.deep{
    height: 50px;
    display: flex;
    justify-content: space-around;
    line-height: 50px;
    position: relative;
}
.green{
    width: 50%;
    border-top-left-radius:25px ;
    border-bottom-left-radius:25px ;
    text-align: left;
    color: honeydew;
    border-top: 50px solid green;
}
.green .green0{
    position: absolute;
    top: 0;
    left: 10px;
}
.green .green1{
    font-size: 30px;
    font-weight: bolder;
}
.green .green2{
   color: honeydew;
}
.red{
    width: 50%;
    border-radius:0 25px 25px 0 ;
    text-align: right;
    color: honeydew;
    border-bottom: 50px solid red;
}
.red .red1{
    font-size: 30px;
    font-weight: bolder;
}
.red .red2{
    margin-right:10px ;
}
.smak{
    position: absolute;
    /* left: 50%; */
    width: 5%;
    height: 50px;
    background: #ffffff;
    -webkit-transform: skew(-20deg);
    -moz-transform: skew(-20deg);
    -o-transform: skew(-20deg);
}
</style>