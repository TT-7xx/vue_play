<template>
    <div class="detail-box">
        <div class="detail-back">
            <a @click="back">>>返回</a>
        </div>
        <div class="detail-bor">
            <div class="detail-main">
                <div class="detail-main-img">
                    <img src="@/assets/images/detail-1.png" alt="">
                </div>
                <div class="detail-main-rigth">
                    <p class="rigth-text1">他的初恋对象是我</p>
                    <p class="rigth-text2">木夕JIANG</p>
                    <p class="rigth-text3">漫画简介</p>
                    <p class="rigth-text4">几年前和家人大吵一架的夏柯无意间听到了一首歌曲，轻柔的旋律安抚着烦躁的心灵从此便特别关注里有了一位音乐博主。谁想默默关注的up主突然空降变成了自己的同学！“要和太太成为朋友！”夏柯的高三除了高考又多了一个奋斗目标。音乐区小up主和小迷弟的校园日常【每隔周六更新】</p>
                    <span class="rigth-text5">
                            查看第一话
                    </span>
                    <span class="rigth-text6">
                        关注
                    </span>
                    <img src="@/assets/images/detail-3.png" alt="" class="rigth-img">
                    <span class="rigth-text7">
                        分享
                    </span>
                    <img src="@/assets/images/detail-4.png" alt="" class="rigth-img-1">
                    <span class="rigth-text8">
                        7888万
                    </span>
                    <img src="@/assets/images/detail-2.png" alt="" class="rigth-img-2">
                    <span class="rigth-text9">
                        13万
                    </span>
                </div>
            </div>
            <div class="detail-cartton">
                <ul>
                    <li v-for="(item,index) in data" :key="index">
                        <a href="javascript:;" class="detail-cartton-img1">
                            <img :src="item.imgUrl">
                        </a>
                        <a href="javascript:;" class="detail-cartton-text1">
                            {{item.name}}
                            <img src="@/assets/images/detail-5.png" alt="">
                        </a>
                        <span class="detail-cartton-img2">
                            <img :src="item.dz" > 
                            <span>
                                {{item.num}}
                            </span>
                        </span>
                        <span class="detail-cartton-text2">{{item.time}}</span>

                    </li>
                    
                </ul>
            </div>
        </div>
        <div class="tuijian">
            <div class="tj-header">
                <span class="tj-span-1"></span>
                <span class="tj-span-2">近期推荐</span>
            </div>
            <ul>
                <li>
                    <a href="javascript:;">
                        <img src="@/assets/images/tj-1.jpg" alt="">
                        <p>
                            <span>
                                教主喜欢大人
                            </span>
                        </p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="@/assets/images/tj-2.jpg" alt="">
                        <p>
                             <span>
                                与魔王的5500种暧昧方式
                            </span>
                        </p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="@/assets/images/tj-3.jpg" alt="">
                        <p>
                             <span>
                                敌将为奴
                            </span>
                        </p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="@/assets/images/tj-4.jpg" alt="">
                        <p>
                             <span>
                                DOLO命运胶囊
                            </span>
                        </p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="@/assets/images/tj-6.jpg" alt="">
                        <p>
                             <span>
                                朝花惜时
                            </span>
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'detail',
    data:function(){
        return{
            data:[{
                imgUrl:require('@/assets/images/detail-6.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'01打探敌情',
                num:410,
                time:"11-27"
            },{
                imgUrl:require('@/assets/images/detail-7.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'02啊失策了',
                num:591,
                time:'11-13'
            },{
                imgUrl:require('@/assets/images/detail-8.png'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'03逃呀逃呀',
                num:942,
                time:'10-30'
            },{
                imgUrl:require('@/assets/images/detail-9.png'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'04美好一天',
                num:1901,
                time:'10-16'
            },{
                imgUrl:require('@/assets/images/detail-10.png'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'05失眠了啦',
                num:2195,
                time:'10-02'
            },{
                imgUrl:require('@/assets/images/detail-11.png'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'06小姑来啦',
                num:2478,
                time:'09-18'
            },{
                imgUrl:require('@/assets/images/detail-12.png'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'07看到了么',
                num:4729,
                time:'09-04'
            },{
                imgUrl:require('@/assets/images/detail-13.png'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'08去吃饭了',
                num:5600,
                time:'08-21'
            },{
                imgUrl:require('@/assets/images/detail-14.png'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'09期中考试',
                num:6387,
                time:'08-07'
            },{
                imgUrl:require('@/assets/images/detail-15.png'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'10社团活动',
                num:6766,
                time:'07-24'
            },{
                imgUrl:require('@/assets/images/detail-16.png'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'11社团惊喜',
                num:6866,
                time:'07-10'
            },
           
            ]
        }
    },
    methods:{
        back(){
            this.$router.push('/collect')
        },
    }
}
</script>

<style scoped>
@import '~@/assets/css/detail.css'
</style>