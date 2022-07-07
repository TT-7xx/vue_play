<template>
    <div class="dis-box">
        <div class="dis-header">
            <p></p>
            <span>条漫大赛</span>
        </div>
        <div class="dis-video">
            <video src="@/assets/video/disscues-back.mp4" type="video/mp4" autoplay="autoplay" loop="loop" muted="muted"></video>
            <div class="dis-video-bot">
                <img src="@/assets/images/diffcuse-bot.png" alt="">
            </div>
        </div>
        <div class="dis-nav">
            <ul>
                <li>
                    <a :class="{active : current == 'Bear'}" @click="current='Bear'">获奖公示</a>
                    <a :class="{active : current == 'Works'}" @click="current='Works'">入围作品</a>
                    <a :class="{active : current == 'Introduce'}" @click="current='Introduce'">赛事介绍</a>
                    <a :class="{active : current == 'Answer'}" @click="current='Answer'">答疑及资讯</a>
                </li>
            </ul>
        </div>
        <component :is="current"></component>
    </div>
</template>

<script>
import Answer from '@/views/index/Answer'
import Introduce from '@/views/index/Introduce'
import Works from '@/views/index/Works'
import Bear from '@/views/index/Bear'
export default {
    name:'disscues',
    data:function(){
        return{
            current:'Bear'
        }
    },
    components:{
        Bear,
        Works,
        Introduce,
        Answer
    }
}
</script>