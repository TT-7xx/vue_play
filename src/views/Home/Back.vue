<template>
    <div class="back-box">
        <div class="back-main">
             <a @click="to" class="main-1">
                <img src="@/assets/images/back-2.gif" alt="">
            </a>
            <a @click="to" class="main-2">
                <img src="@/assets/images/back-3.jpg" alt="">
            </a>
        </div>  
        <div class="back-nav">
            <!-- 快看 -->
            <div class="nav-box" v-on:mouseenter="visible" @mouseleave="invisible" @click="go">        
            </div>
            <div class="nav-img">       
            </div>
            <div class="nav-opc">
                <span>
                    哈 · 快看
                </span>
            </div>
            <div class="nav-opc-box" v-show="seen" id="opc">
                <img src="@/assets/images/back-7.jpg" alt="">
                <span>
                    哈 · 快看漫画是是引领行业的新生代漫画阅读平台和兴趣社区。它为用户提供优质原创漫画内容,营造良好的二次元社区氛围,成为年轻一代的潮流文化阵地。
                </span>
            </div>
            <div class="ff">
				<div class="ff3"><img src="@/assets/images/箭头1.png" alt=""></div>
				<div class="ff1"><img src="@/assets/images/箭头1.png" alt=""></div>
				<div class="ff2"><img src="@/assets/images/箭头1.png" alt=""></div>
			</div>     
        </div> 


            <!-- 动漫 -->
            <div class="back-nav">
            <div class="cart-box" v-on:mouseenter="is" @mouseleave="no" @click="gos">        
            </div>
            <div class="cart-img">       
            </div>
            <div class="cart-opc">
                <span>
                    哈 · 动漫
                </span>
            </div>
            <div class="cart-opc-box" v-show="cartoon" id="opc">
                <img src="@/assets/images/video-tx.jpg" alt="">
                <span>
                    哈 · 动漫让误入三次元的你重返二次元的动漫网站!无论你是宅男腐女、高富帅白富美、直男还是弯的!网站中定有你心中那迷の动漫的存在!</span>
            </div>  
            <div class="ff">
				<div class="ff3"><img src="@/assets/images/箭头1.png" alt=""></div>
				<div class="ff1"><img src="@/assets/images/箭头1.png" alt=""></div>
				<div class="ff2"><img src="@/assets/images/箭头1.png" alt=""></div>
			</div>      
        </div> 

        <!-- 阅读 -->
            <div class="back-nav">
            <div class="bookss-box" v-on:mouseenter="iss" @mouseleave="noo" @click="goss">        
            </div>
            <div class="bookss-img">       
            </div>
            <div class="bookss-opc">
                <span>
                    哈 · 阅读
                </span>
            </div>
            <div class="bookss-opc-box" v-show="bookss" id="opc">
                <img src="@/assets/images/bookss-tx.jpg" alt="">
                <span>
                    哈 · 阅读知识是我们人类发展的台阶，阅读则是掌握人生道路和获得专业知识的主要方法和最佳方式。读书能够给大家闯荡的信念和战胜困难的能量。</span>
            </div>  
            <div class="ff">
				<div class="ff3"><img src="@/assets/images/箭头1.png" alt=""></div>
				<div class="ff1"><img src="@/assets/images/箭头1.png" alt=""></div>
				<div class="ff2"><img src="@/assets/images/箭头1.png" alt=""></div>
			</div>      
        </div> 


        <!-- 音乐 -->
        <div class="back-nav">
            
            <div class="music-box" v-on:mouseenter="isss" @mouseleave="nooo" @click="gosss">        
            </div>
            <div class="music-img">       
            </div>
            <div class="music-opc">
                <span>
                    哈 · 音乐
                </span>
            </div>
            <div class="music-opc-box" v-show="music" id="opc">
                <img src="@/assets/images/music-tx.jpg" alt="">
                <span>
                    哈 ·音乐是指一部动漫（Animation&Comic）（动画+漫画）作品中的音乐，指的是片头曲（OP）片尾曲（ED），以及主题音乐、背景音乐和角色歌等。,营造良好的二次元社区氛围,成为年轻一代的潮流文化阵地。
                </span>
            </div>     
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name:'back',
    data:function(){
        return{
            seen:false,
            cartoon:false,
            bookss:false,
            music:false
        }
    },
    methods:{
        visible:function(){
            this.seen = true;

        },
        invisible:function(){
            this.seen = false;
        },
        is:function(){
            this.cartoon = true;

        },
        no:function(){
            this.cartoon = false;
        },
        iss:function(){
            this.bookss = true;

        },
        noo:function(){
            this.bookss = false;
        },
        isss:function(){
            this.music = true;

        },
        nooo:function(){
            this.music = false;
        },
        to(){
            document.documentElement.scrollTop=630
        },
        go(){
            this.$router.push('/collect')
        },
         gos(){
            this.$router.push('/Video')
        },
         goss(){
            this.$router.push('/content')
        },
         gosss(){
            this.$router.push('/collects')
        }
    },
}
</script>