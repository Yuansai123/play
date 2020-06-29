<template>
    <div>
        <!-- <el-card class="box-card" width='180'>
            <chart ref="chart1" :options="orgOptions" :auto-resize="true"></chart>
        </el-card> -->
        <div class="centent">
        <div class="box">
            <div class="echarts" ref="chart1"></div>
            <div class="echarts" ref="chart2"></div>
        </div>
        <div class="box">
            <div class="echarts" ref="chart3"></div>
            <div class="echarts" ref="chart4"></div>
        </div>
        <div class="box">
            <div class="echarts" ref="chart5"></div>
            <div class="echarts" ref="chart6"> </div>
        </div>
        </div>
        <div class="stylebox">
            <div class="stylebox1"></div>
            <div class="stylebox2"></div>
            <div class="stylebox3"></div>
            <div class="stylebox4"></div>
            <div class="stylebox5"></div>
        </div>
    </div>
</template>
<script>
import icon1 from '../assets/1.jpg'
export default {
    data(){
        return{
            orgOptions: {},
            
        }
    },
    mounted(){
        this.charts1()
        this.charts2()
        this.charts3()
        this.charts4()
        this.charts5()
        this.charts6()
        console.log(icon1)
    },
    methods:{
        charts1(){
            var chart1 = this.$echarts.init(this.$refs.chart1)
            chart1.setOption({
                title:{
                    text:'贯彻执行党和国家决策部署的重大措施',
                    left:'center',
                    padding:[20,0,0,0],
                    subtextStyle:{
                        color:'#333',
                    }
                },
                 toolbox: {
                     show:true,
                     right:10,
                     top:10,
                    feature: {
                        myTool:{
                            show:true,
                            title:'设置',
                            z:'99',
                            icon:"image://data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QNVaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc3REEwMDM5QjA5QzExRUFBMDI5RkE1ODQ2NEVCQTRBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc3REEwMDM4QjA5QzExRUFBMDI5RkE1ODQ2NEVCQTRBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3NThlOTVjZC1mOTA0LTExN2QtOWU3Mi1mYjNjOWQwNTlkNDYiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3NThlOTVjZC1mOTA0LTExN2QtOWU3Mi1mYjNjOWQwNTlkNDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCAASABMDASIAAhEBAxEB/8QAZQABAAIDAAAAAAAAAAAAAAAAAAMEAQIGAQEBAAAAAAAAAAAAAAAAAAAAARAAAgEDAgQHAAAAAAAAAAAAAQIAERIDITFRYXETgZEiMjMEFBEBAAMAAAAAAAAAAAAAAAAAAAExQf/aAAwDAQACEQMRAD8A7XJldy6oVVV0ZidRzmisQS2FwwA9QcnTnrMZCoyZRlqL6UIGlOMOQpPdNzMtBYNhxNYEn6lpWmll3jW2kSO3Nbtr2qbc9vKJUWM/wv0lb6PvbpESRa4uxEQP/9k=",
                            onclick:function(){
                                alert('成功')
                            }
                        },
                    },
                },
                graphic:{       //图形中间文字
                    type:"text",
                    left:"68%",
                    top:"23%",
                    style:{
                        text:"议题总数：9   会议总数：7",
                        textAlign:"center",
                        fill:"#333",
                        fontSize:12
                    }
                },
                legend:{
                    x:30,      //可设定图例在左、右、居中
                    y:60,
                    data: ['议题数量', '会议数量'],
                    // title:['议题数量:9']
                },
                tooltip:{},
                xAxis:{
                    axisLabel:{interval: 0},
                    data:['上级重要决定','路线方针政策','法律法规']
                },
                yAxis:[{
                    type:'value',
                },
                ],
                 grid:{
                        top:100,
                        x:45,
                        x2:30,
                        y2:50,
                    },
                series:[
                    {
                        name:"议题数量",
                        type:'bar',
                        data:['3','4','2'],
                        itemStyle:{
                            normal:{
                            color:"#0069ac",
                           label:{
                               show:true,
                               position:'top',
                               textStyle:{
                                   color:'#333',
                                   fontSize:12
                               }
                           }
                        }
                        }
                    },{
                        name:"会议数量",
                        type:'bar',
                        data:['3','3','2'],
                        itemStyle:{
                            normal:{
                            color: "#f7ab00",
                           label:{
                               show:true,
                               position:'top',
                               textStyle:{
                                   color:'#333',
                                   fontSize:12
                               }
                           }
                        }
                        }
                    }
                    
                ]
            })
        },
        charts2(){
            var chart2 = this.$echarts.init(this.$refs.chart2)
            chart2.setOption({
                title:{
                    text:'三重一大决策议题',
                    left:'center',
                    padding:[20,0,0,0],
                    // subtext:'',
                    subtextStyle:{
                        color:'#333',
                    }
                },
                color:['#f7ab00','#00aae8','#8fc31f',"#0069ac"],
                graphic:{       //图形中间文字
                    type:"text",
                    left:"center",
                    top:"55%",
                    style:{
                        text:"合计：9",
                        textAlign:"center",
                        fill:"#888",
                        fontSize:20
                    }
                },
                tooltip: {
                    // trigger 设置触发类型，默认数据触发，可选值：'item' ¦ 'axis'
                    trigger: 'item',
                    // showDelay: 20,   // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
                    // hideDelay: 20,   // 隐藏延迟，单位ms
                    // backgroundColor: 'rgba(255,0,0,0.7)',  // 提示框背景颜色
                    // textStyle: {
                    // fontSize: '16px',
                    // color: '#000'  // 设置文本颜色 默认#FFF
                    // },
                    // formatter设置提示框显示内容
                    // {a}指series.name  {b}指series.data的name
                    // {c}指series.data的value  {d}%指这一部分占总数的百分比
                    formatter: '{a} <br/>{b} : {c}个 ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: ['重要人事任免事项:0(0%)', '重大项目安排事项:0(0%)', '大额度资金运作事项:0(0%)', '重大决策事项:9(100%)']
                },
                series: [
                    {
                        name: '重大事项',
                        type: 'pie',
                        radius: ['35%', '55%'],
                        center:['50%','60%'],
                        avoidLabelOverlap: true,
                        label: {
                            normal:{
                                formatter: '  {b}:{c} ({d}%) ',       //图形外文字上下显示
                                borderWidth: 20,
                                borderRadius: 4,
                                padding: [0, -80],
                                // rich:{
                                //     a:{
                                //         color:'red'
                                //     }
                                // }
                                }
                            },
                        labelLine: {
                            show: true,
                            left:'left'
                        },
                        itemStyle:{
                            normal:{
                            label:{
                                show:true,
                                position:'top',
                                textStyle:{
                                    color:'#333',
                                    fontSize:12
                                }
                            }
                        }
                        },
                        data: [
                            {value: 0, name: '重要人事任免事项'},
                            {value: 0, name: '重大项目安排事项'},
                            {value: 0, name: '大额度资金运作事项'},
                            {value: 9, name: '重大决策事项'},
                        ]
                    }
                ]
            })
        },
        charts3(){
            var chart3 = this.$echarts.init(this.$refs.chart3)
            chart3.setOption({
                title:{
                    text:'三重一大决策会议',
                    left:'center',
                    padding:[20,0,0,0],
                    subtextStyle:{
                        color:'#333',
                    }
                },
                graphic:{       //图形中间文字
                    type:"text",
                    left:"85%",
                    top:"20%",
                    style:{
                        text:"次数总数：7",
                        textAlign:"center",
                        fill:"#333",
                        fontSize:12
                    }
                },
                tooltip:{},
                xAxis:{
                    axisLabel:{interval: 0},
                    data:['党组会','董事会','党委会','总经理办公会','党支部会议','职代会','股东会','其他']
                },
                yAxis:[{
                    type:'value',
                    name:'次数'
                },
                ],
                 grid:{
                        top:100,
                        x:45,
                        x2:30,
                        y2:50,
                    },
                toolbox:{
                    show:true,
                    feature: {
                        myTool: {
                            show: true,
                            title: '自定义扩展方法',
                            icon:'image://images/more.png',
                            z:'999',
                            left:'center',
                            onclick: function (){
                                alert('myToolHandler2')
                            }
                        }
                    }
                },
                series:[{
                    name:'总次数：7',
                    type:'bar',
                    barWidth:50,
                    itemStyle:{
                        normal:{
                            color: function (params){
                            var colorList = ["#0069ac",'#f7ab00','#00aae8','#8fc31f','#2d530c'];
                            return colorList[params.dataIndex];
                           },
                           label:{
                               show:true,
                               position:'top',
                               textStyle:{
                                   color:'#333',
                                   fontSize:12
                               }
                           }
                        }
                    },
                    data:['0','4','1','2','0','0','0','0'],
                   
                }]
            })
        },
        charts4(){
            var chart4 = this.$echarts.init(this.$refs.chart4)
            chart4.setOption({
                title:{
                    text:'异常报告',
                    left:'center',
                    padding:[20,0,0,0],
                    subtextStyle:{
                        color:'#333',
                    }
                },
                color:['#f7ab00','#8ebbd8','#8fc31f',"#0069ac",'#f19548','#f7ab00'],
                graphic:{       //图形中间文字
                    type:"text",
                    left:"center",
                    top:"55%",
                    style:{
                        text:"合计：6",
                        textAlign:"center",
                        fill:"#888",
                        fontSize:20
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}个 ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: ['重要人事任免事项:0(0%)', '重大项目安排事项:0(0%)', '大额度资金运作事项:0(0%)', '重大决策事项:9(100%)']
                },
                series: [
                    {
                        name: '异常报告',
                        type: 'pie',
                        radius: ['35%', '55%'],
                        center:['50%','60%'],
                        avoidLabelOverlap: true,
                        label: {
                            normal:{
                                formatter: '  {b}:{c} ({d}%) ',       //图形外文字上下显示
                                borderWidth: 20,
                                borderRadius: 4,
                                padding: [0, -80],
                                }
                            },
                        labelLine: {
                            show: true,
                            left:'left'
                        },
                        itemStyle:{
                            normal:{
                            label:{
                                show:true,
                                position:'top',
                                textStyle:{
                                    color:'#333',
                                    fontSize:12
                                }
                            }
                        }
                        },
                        data: [
                            {value: 0, name: '党委会未前置'},
                            {value: 0, name: '决策顺序异常'},
                            {value: 0, name: '议题表决异常'},
                            {value: 0, name: '法律审核异常'},
                            {value: 0, name: '会议上报告延迟'},
                            {value: 6, name: '会议召开异常'},
                        ]
                    }
                ]
            })
        },
        charts5(){
            var chart5 = this.$echarts.init(this.$refs.chart5)
            chart5.setOption({
                title:{
                    text:'督办协议',
                    left:'center',
                    padding:[20,0,0,0],
                    subtextStyle:{
                        color:'#333',
                    }
                },
                
                legend:{
                    orient: 'vertical',
                    x:'right',      //可设定图例在左、右、居中
                    y:60,     //可设定图例在上、下、居中
                    padding:[0,50,0,0],   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
                    data: ['总次数：7']

                },
                tooltip:{},
                xAxis:{
                    axisLabel:{interval: 0},
                    data:['跟踪数量','完成数量','停止数量']
                },
                yAxis:[{
                    type:'value',
                },
                ],
                 grid:{
                        top:100,
                        x:45,
                        x2:30,
                        y2:50,
                    },
                toolbox:{
                    show:true,
                },
                graphic:{       //图形中间文字
                    type:"text",
                    left:"85%",
                    top:"20%",
                    style:{
                        text:"总数：4",
                        textAlign:"center",
                        fill:"#333",
                        fontSize:12
                    }
                },
                series:[{
                    name:'总次数：4',
                    type:'bar',
                    barWidth:50,
                    itemStyle:{
                        normal:{
                            color: function (params){
                            var colorList = ["#0069ac",'#f7ab00','#00aae8'];
                            return colorList[params.dataIndex];
                           },
                           label:{
                               show:true,
                               position:'top',
                               textStyle:{
                                   color:'#333',
                                   fontSize:12
                               }
                           }
                        }
                    },
                    data:['2','1','1'],
                   
                }]
            })
        },
        charts6(){
            var chart6 = this.$echarts.init(this.$refs.chart6)
            chart6.setOption({
                title:{
                    text:'三重一大管理制度总览',
                    left:'center',
                    padding:[20,0,0,0],
                    subtextStyle:{
                        color:'#333',
                    }
                },
                tooltip:{},
                xAxis:{
                    axisLabel:{interval: 0},
                    data:['公司章程','议事规则','实施办法','授权管理办法']
                },
                yAxis:[{
                    type:'value',
                },
                ],
                graphic:{       //图形中间文字
                    type:"text",
                    left:"85%",
                    top:"20%",
                    style:{
                        text:"总数：20",
                        textAlign:"center",
                        fill:"#333",
                        fontSize:12
                    }
                },
                 grid:{
                        top:100,
                        x:45,
                        x2:30,
                        y2:50,
                    },
                toolbox:{
                    show:true,
                },
                series:[{
                    name:'总次数：20',
                    type:'bar',
                    barWidth:50,
                    itemStyle:{
                        normal:{
                            color: function (params){
                            var colorList = ["#0069ac",'#f7ab00','#00aae8'];
                            return colorList[params.dataIndex];
                           },
                           label:{
                               show:true,
                               position:'top',
                               textStyle:{
                                   color:'#333',
                                   fontSize:12
                               }
                           }
                        }
                    },
                    data:['8','6','6','0'],
                   
                }]
            })
        },
    }
}
</script>
<style>
    .centent{
        width: 100%;
        height: 160vh;
    }
    .box{
        position: relative;
    }
    .echarts{
        width: 558px;
        height: 290px;
        border: 1px solid #999;
        background: #fafafa;
        float: left;
        margin: 10px;
    }
    .text{
        position: absolute;
        top:80px;left: 450px;
        font-size: 12px; 
    }
    .icon{
        position: absolute;
        top:20px;left: 535px;
        font-size: 20px; 
        color: #888;
    }
    .stylebox{
        width: 100%;
        height:60;
        border-bottom: 1px solid #888;
        background: red;
    }
    .stylebox1{
        width: 258px;
        height: 60px;
        border-top:3px solid #0069ac;
        float: left;
    }
    .stylebox2{
        width: 258px;
        height: 60px;
        border-top:3px solid #8fc320;
        float: left;
    }
    .stylebox3{
        width: 258px;
        height: 60px;
        border-top:3px solid #ec6c00;
        float: left;
    }
    .stylebox4{
        width: 258px;
        height: 60px;
        border-top:3px solid #00aae8;
        float: left;
    }
    .stylebox5{
        width: 258px;
        height: 60px;
        border-top:3px solid #f7ab00;
        float: left;
    }
    .cc{
        background: red;
        color: red;
        font-size: 30px;
        z-index: 999;
        position: absolute;
        top: 0;
    }
</style>