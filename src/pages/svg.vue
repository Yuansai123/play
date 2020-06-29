<template>
    <div>
        <svg width='600' height='300' version='1.1' 
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
        <rect x='0' y='0' rx='20' ry='20' width='50' height='50'
        style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.3;stroke-opacity:0.8" />
        <circle cx='100' cy='50' r='20' stroke='black' stroke-width='2' fill='green' />
        <ellipse cx='100' cy = '100' rx='20' ry='30' style='fill:rgb(200,100,50);stroke:rgb(0,0,100);stroke-width:2' />
        <line x1='0' y1='0' x2='100' y2='100' style='stroke:rgb(99,99,99);stroke-width:2' />
        <polygon points='220,100 300,210 170,250 140,300' style='fill:#ccccccc;stroke:#000000;stroke-width:7' />
        <polyline points='0,0 0,20 20,20 20,40 40,40 40,60' style='fill:white;stroke:red;stroke-width:2' />
        <path d='M250 150 L150 350 L350 350 Z' />
        <defs>
            <filter id='Gaussian_Blur'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='3' />
            </filter>
        </defs>
        <ellipse cx='200' cy='150' rx='70' ry='40' style='fill:#ff0000;stroke:#000000;stroke-width:2;filter:url(#Gaussian_Blur)' />
        <defs>
            <linearGradient id='orange_red' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' style='stop-color:rgb(255,255,0);stop-opacity:1' />
            <stop offset='100%' style='stop-color:rgb(255,0,0);stop-opacity:1' />
            </linearGradient>
        </defs>
        <ellipse cx='200' cy='190' rx='85' ry='55' style='fill:url(#orange_red)' />
        <defs>
            <linearGradient id="orange_red1" x1='0%' y1='0%' x2='0%' y2='100%'>
                <stop offset='0%' style="stop-color:rgb(255,255,0);stop-opacity:1" />
                <stop offset='100%' style="stop-color:rgb(255,0,0);stop-opacity:1" />
            </linearGradient>
        </defs>
            <ellipse cx='300' cy='200' rx='85' ry='55' style='fill:url(#orange_red1)' />
        <defs>
        <radialGradient id="grey_blue" cx='50%' cy='50%' r='50%' fx='50%' fy='50%'>
            <stop offset='0%' style='stop-color:rgb(200,200,200);stop-opacity:0' />
            <stop offset='100%' style='stop-color:rgb(0,0,255);stop-opacity:1' />
        </radialGradient>
        </defs>
            <ellipse cx='230' cy='200' rx='110' ry='100' style='fill:url(#grey_blue)' />
        </svg>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style>

</style>