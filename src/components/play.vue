<template>
    <div>
        <h1>play</h1>
        <!-- 音乐播放器 -->
        <!-- @ended='ended'
            @canplay='canplay'
            @timeupdate="timeupdate" -->
        <div>  
            <audio ref='audio' id="music"
            controls='controls'
            controlsList="nodownload" oncontextmenu="return false"
            :src='mp3'>
            您目前的版本不支持播放，请升级浏览器版本或者更换浏览器播放！
            </audio><br>
            <button v-on:click='playPause()'>{{playFlag?'暂停':'播放'}}</button>
        </div>
        <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
         <!-- <vue-audio-native
        :url="mp3"
        :show-current-time="true"
        :show-controls="false"
        :show-download="true"
        :autoplay="false"
        :wait-buffer="true"/> -->
    </div>
</template>
<script>
import Mp3 from '../assets/1.mp3'
export default {
    data(){
        return{
            listmisc:[],
            loop:[],
            mp3:Mp3,//音乐地址
            playFlag:false,//设置一个flag去判断当前的播放状态
            options: [{//模拟的菜单选择栏
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '0'
        }
    },
    methods:{
        playPause:function(){
            var audio = document.getElementById('music')
            // console.log(this)
            if(audio !== null){
                if(this.playFlag){
                    audio.pause()
                    this.playFlag = false
                }else{
                audio.currentTime = 0 
                audio.play()
                this.playFlag = true
            }
            }
        }
    }
}
</script>
<style >
/* audio::-webkit-media-controls {
    overflow: hidden !important
} 
audio::-webkit-media-controls-enclosure {
    width: calc(100% + 32px);
    margin-left: auto;
} */

</style>