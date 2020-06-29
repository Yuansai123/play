<template>
    <div>
        <audio :src="mp3" controls='controls' controlsList="nodownload"></audio>
        <br>
        <div>
            <button @click="start()">开始录音</button>
            <button @click="pause()">暂停录音</button>
            <button @click="resume()">继续录音</button>
            <button @click="stop()">结束录音</button>
            <button @click="play()">录音播放</button>
            <button @click="destroy()">删除录音</button>
        </div>
    </div>
    
</template>
<script>
import Mp3 from '../assets/1.mp3'
import Recorder from 'js-audio-recorder'

let recorder = new Recorder()
export default {
    data(){
        return{
            mp3:Mp3,
        }
    },
    methods:{
        start(){
            console.log('开始录音')
            recorder.start()
        },
        pause(){
            console.log('暂停录音')
            recorder.pause()
        },
        resume(){
            console.log('继续录音')
            recorder.resume()
        },
        stop(){
           
            recorder.stop()
            console.log('结束录音',recorder.stop)
        },
        play(){
            console.log('播放录音')
            recorder.play()
        },
        destroy(){
            recorder.destroy(()=>{
                console.log('删除成功')
            });
            recorder = null;
        }
    }
}
</script>
<style>

</style>