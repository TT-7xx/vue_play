<template>
    <div class="bear-box">
        <div class="bear-top-bor">
            <img src="@/assets/images/disscues-bear-bi.png" alt="">
            <p>
                2021快看原创条漫大赛收到
                <span>
                    1400+投稿作品，
                </span>
            </p>
            <p>
                经大赛评审团最终评审，
                <span>
                    8部漫画
                </span>
                作品及
                <span>10部漫画剧本</span>
                作品荣誉获奖。
            </p>
            <p>恭喜各位获奖者！</p>
            <p>愿各位创作者在原创之路披荆斩棘，再创佳绩！</p>
        </div>

        <div class="bear-nav">
            <ul>
                <li>
                    <a :class="{active : current == 'Pain'}" @click="current='Pain'" class="nav-one">获奖漫画</a>
                    <a :class="{active : current == 'Scri'}" @click="current='Scri'" class="nav-two">获奖剧本</a>
                </li>
            </ul>
        </div>
        <component :is="current"></component>
    </div>
</template>

<script>
import Scri from '@/views/index/Scri'
import Pain from '@/views/index/Pain'
    export default{
        name:'Bear',
        data:function(){
            return{
                current:'Pain'
            }
        },
        components:{
            Pain,
            Scri
        }
    }
</script>