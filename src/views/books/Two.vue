<template>
    <div class="two-main">
			<div class="two-font"><span class="two-tj">重磅推荐</span></div>
            <div class="two-inner">
				<div class="two-look" v-for="(item,index) in tuijian" :key="index">
					<div class="two-left">
						<a href=""><img :src="item.imgs" ></a>
					</div>
					<div class="two-center">
							<p class="two-center1">{{item.name}}</p>
							<p class="two-center2">{{item.author}}</p>
							<p class="two-center3">{{item.introduce}}</p>
							<p class="two-center4">{{item.classify}}</p>
							<p class="two-center5">{{item.classifies}}</p>
					</div>
				</div>
			</div>
    </div>
</template>
<script>

export default {
	data:function(){

		return{
			tuijian:[{
				imgs:require('@/assets/images/books/01.jpg'),
				name:'十一点要准时睡觉',
				author:'六熏',
				introduce:'「无限游戏」征稿第二期短名单作品：梦特别美，你不要醒。',
				classify:'穿越',
				classifies:'幻想言情'
			},{
				imgs:require('@/assets/images/books/02.jpg'),
				name:'六界淘鲜达',
				author:'侑栗',
				introduce:'想要晋升上仙得跑快递历练，小花精上天入地送货顺便拯救世界。',
				classify:'玄幻',
				classifies:'幻想言情'
			},{
				imgs:require('@/assets/images/books/03.jpg'),
				name:'神的回车键',
				author:'狐三火',
				introduce:'「无限游戏」征稿第二期短名单作品：我以身涉险，渡三界众生。',
				classify:'脑洞',
				classifies:'幻想言情'
			},{
				imgs:require('@/assets/images/books/04.jpg'),
				name:'不思议杂货店',
				author:'随想-Whatever',
				introduce:'火爆VR游戏暗藏杀机，副本故事穿透现实人生。',
				classify:'奇幻',
				classifies:'都市幻想'
			}]	
		}

		
	}
}

</script>
<style scoped>

</style>