<template>
    <div class="banner-carousel" ref="carousel">
        <div class="banner-whole">
			<div class="banner-roll-img">
				<span class="banner-last" @click="after" v-show="showIndex"><</span>			  
				<!-- 图片容器 -->
				<ul id="banner-ul">
					<li v-on:click="change($event)" v-for="(item, index) in imgs" :class="classes[index]" :key="index"><a href="javascript:;"><img :src="item.cover" :title="item.name"></a>
					<div>
						</div>
						</li>
				</ul>
				<span class="banner-next" @click="before" v-show="showIndex">></span>
			</div>
		</div>
		<div class="banner-roll-nav">
			<ul>
				<li><a href="javascript:;">恋爱</a></li>
				<li><a href="javascript:;">校园</a></li>
				<li><a href="javascript:;">强剧情</a></li>
				<li><a href="javascript:;">古风</a></li>
				<li><a href="javascript:;">奇幻</a></li>
				<li><a href="javascript:;">原创</a></li>
				<li><a href="javascript:;">日漫</a></li>
				<li><a href="javascript:;">韩漫</a></li>
				<li><a href="javascript:;">完结</a></li>
				<li><a href="javascript:;">大女王</a></li>
				<li><a href="javascript:;">超越</a></li>
				<li><a href="javascript:;">萌系</a></li>
				<li><a href="javascript:;">热血</a></li>
			</ul>
		</div>
    </div>
</template>
 
<script>
import $ from 'jquery'
export default {
	name:'Banner',
	data: function() {
		return {
			showIndex : false, // 是否显示左右按钮
			imgs: [
				{
					cover:require('@/assets/images/lunbo11.jpg'),
					name:'坦白恶女的秘密'
				}, 
				{
					cover:require('@/assets/images/lunbo12.jpg'),
					name:'又被病娇缠上了'	
				}, 
				{
					cover:'https://tn1-f2.kkmh.com/image/211122/LrzcDfTDO-t.w750.webp.h',
					name:'被想杀我的他拥抱了'
				}, 
				{
					cover:require('@/assets/images/lunbo9.jpg'),
					name:'二哈和他的白猫师尊'
				}, 
				{
					cover:require('@/assets/images/lunbo5.png'),
					name:'登录武林系统'
				}, 
				{
					cover:require('@/assets/images/lunbo10.jpg'),
					name:'高等灵魂'
				}
				   ], // 图片库
			classes: ['left', 'center', 'right', 'after1', 'after2', 'after3']			,
			timer : null
		}
	},
	methods:{
		before() {
			let last = this.classes.pop();
			this.classes.unshift(last);
		},
		after() {
			let first = this.classes.shift();
			this.classes.push(first);
		},
		change(e) {
			if(e.target.parentNode.classList.contains('left')) {
				this.after();
			} else if (e.target.parentNode.classList.contains('right')) {
				this.before()
			} else {
				return false;
			}
		}
	},
	mounted() {
		var that = this;
		this.$refs.carousel.addEventListener('mouseover', function() {
			that.showIndex = true;
			clearInterval(that.timer)
		})
		this.$refs.carousel.addEventListener('mouseout', function() {
			that.showIndex = false;
			that.timer = setInterval(() => {
				that.before();
			}, 3000)
		})
		this.timer = setInterval(() => {
			this.before();
		}, 3000)
	},
	beforeDestroy() { 
		clearInterval(this.timer)
	}
}
</script>
