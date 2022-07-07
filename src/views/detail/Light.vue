<template>
    <div class="detail-box detail-box-1">
        <div class="detail-back">
            <a @click="back">>>返回</a>
        </div>
        <div class="detail-bor detail-bor-1">
            <div class="detail-main">
                <div class="detail-main-img">
                    <img src="@/assets/images/Light-1.jpg" alt="">
                </div>
                <div class="detail-main-rigth">
                    <p class="rigth-text1">透过指尖的光</p>
                    <p class="rigth-text2">九三橙子</p>
                    <p class="rigth-text3">漫画简介</p>
                    <p class="rigth-text4">自从和他同居，我竟然变成了一个正义勇敢的好少年，是责任吗？还是欠他钱了？</p>
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
                        <a href="javascript:;" class="detail-cartton-img1 detail-cartton-img4">
                            <img :src="item.imgUrl" class="detail-cartton-img3">
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
    name:'Light',
    data:function(){
        return{
            data:[{
                imgUrl:require('@/assets/images/Light-2.jpg'),
                dz:require('@/assets/images/detail-2.png'),
                name:'06保持安静',
                num:410,
                time:"11-27"
            },{
                imgUrl:require('@/assets/images/Light-3.jpg'),
                dz:require('@/assets/images/detail-2.png'),
                name:'05天黑睡觉',
                num:591,
                time:'11-13'
            },{
                imgUrl:require('@/assets/images/Light-4.jpg'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'04你在看啥',
                num:942,
                time:'10-30'
            },{
                imgUrl:require('@/assets/images/Light-5.jpg'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'03尊老爱幼',
                num:1901,
                time:'10-16'
            },{
                imgUrl:require('@/assets/images/Light-6.jpg'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'02之间差距',
                num:2195,
                time:'10-02'
            },{
                imgUrl:require('@/assets/images/Light-7.jpg'),
                logo:require('@/assets/images/detail-5.png'),
                dz:require('@/assets/images/detail-2.png'),
                name:'01一起吃呀',
                num:2478,
                time:'09-18'
            }
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
@import '~@/assets/css/detail.css';
</style>