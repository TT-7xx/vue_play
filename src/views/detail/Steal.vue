<template>
    <div class="detail-box">
        <div class="detail-back">
            <a @click="back">>>返回</a>
        </div>
        <div class="detail-bor">
            <div class="detail-main">
                <div class="detail-main-img">
                    <img src="@/assets/images/steal-1.jpg" alt="">
                </div>
                <div class="detail-main-rigth">
                    <p class="rigth-text1">偷偷藏不住</p>
                    <p class="rigth-text2">竹已（原著）+橘枳（主笔）+郭晓（编剧）</p>
                    <p class="rigth-text3">漫画简介</p>
                    <p class="rigth-text4">那年，桑稚的心里偷偷地住进了一个人，喜欢上哥哥的朋友段嘉许，这个大哥哥有着好看的桃花眼，漫不经心的喊她“小孩”，初见的惊艳总是让桑稚忍不住想要靠近，但是7岁的年龄差仿佛又是他们无法逾越的鸿沟，不知从何时起，埋藏在心底的青涩暗恋逐渐发芽，慢慢地，也蔓延进了他的心里...【独家/每周五更新 责编：莫莉】</p>
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
    name:'steal',
    data:function(){
        return{
            data:[{
                imgUrl:require('@/assets/images/steal-2.jpg'),
                dz:require('@/assets/images/detail-2.png'),
                name:'01你整容了?',
                num:410,
                time:"11-27"
            },{
                imgUrl:require('@/assets/images/steal-3.jpg'),
                dz:require('@/assets/images/detail-2.png'),
                name:'02是段嘉许',
                num:591,
                time:'11-13'
            },{
                imgUrl:require('@/assets/images/steal-4.jpg'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'03别骗小孩',
                num:942,
                time:'10-30'
            },{
                imgUrl:require('@/assets/images/steal-5.jpg'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'04哭鼻子了？',
                num:1901,
                time:'10-16'
            },{
                imgUrl:require('@/assets/images/steal-6.jpg'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'05挺老的',
                num:2195,
                time:'10-02'
            },{
                imgUrl:require('@/assets/images/steal-7.jpg'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'06好听的话',
                num:2478,
                time:'09-18'
            },{
                imgUrl:require('@/assets/images/steal-8.jpg'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'07秘密名字',
                num:4729,
                time:'09-04'
            },{
                imgUrl:require('@/assets/images/steal-9.jpg'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'08都没对象',
                num:5600,
                time:'08-21'
            },{
                imgUrl:require('@/assets/images/steal-10.jpg'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'09当我小孩？',
                num:6387,
                time:'08-07'
            },{
                imgUrl:require('@/assets/images/steal-11.jpg'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'10我想得美',
                num:6766,
                time:'07-24'
            },{
                imgUrl:require('@/assets/images/steal-12.jpg'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'11写作业呀',
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