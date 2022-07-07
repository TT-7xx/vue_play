<template>
    <div class="TV-left-main">
        <div class="TV-left-main-left " @mouseenter="enter()" @mouseleave="leave()">
                    <div class="TV-box TV-lefts"> 
                        <img src="@/assets/images/video-clip/TV/国王排名.png" alt="">
                    </div>
                    <span class="font-top">国王排名</span><br>
                    <span class="font-bottom">波吉人生的巨变将要开始啦</span>
        </div>
        <div class="TV-left-main-right">
            <div class="TV-main-right-box TV-right1" v-for="(item, index) in lists" :key="index"
                @mouseenter="enters(index)" @mouseleave="leaves()">
                <div class="TV-box2"><img :src="item.imgurl" alt=""></div>
                <span class="TV-fonts-top">{{item.name}}</span><br>
                <span class="TV-fonts-bottom">{{item.names}}</span>
            </div>        
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data(){
        return{
            current: 'China',
            lists:[{
                imgurl : require('@/assets/images/video-clip/TV/银魂.png'),
                name:'银魂',
                names:'江户时代之末的物语！ '
            },{
                imgurl : require('@/assets/images/video-clip/TV/火影忍者.png'),
                name:'火影忍者',
                names:'孤独少年忍者世界英雄梦'
            },{
                imgurl : require('@/assets/images/video-clip/TV/名侦探柯南.png'),
                name:'名侦探柯南',
                names:'万年小学生的推理生涯'
            },{
                imgurl : require('@/assets/images/video-clip/TV/半妖的夜叉姬.png'),
                name:'半妖的夜叉姬',
                names:'半妖与人类的纠葛才刚开始 '
            }]
        }
    },
    
     methods:{
        show: function (value) {
			this.$router.push({name: value});//页面跳转
		},
		enter(){
            $(".TV-lefts img").css({"transform": "scale(1.1)"});
        },
        leave(){
            $(".TV-lefts img").css({"transform": "scale(1)"});
		},
        enters(index){
            $(".TV-right1 img").eq(index).css({"transform": "scale(1.2)"});
        },
        leaves(){
            $(".TV-right1 img").css({"transform": "scale(1)"}); 
		},
    }
}
</script>