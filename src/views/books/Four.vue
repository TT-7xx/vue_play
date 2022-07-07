<template>
        <div class="likely">
			<div class="like">
				<span class="cnxh">猜你喜欢</span>
				<a href=""><span class="change">换一组</span></a>
			</div>
			<div class="work">
				<div class="work1" v-for="(item,index) in changxiao" :key="index">
					<a href=""><img :src="item.imgs" alt=""></a>
					<a href=""><p class="word1">{{item.name}}</p></a>
					<p class="word2">{{item.author}}</p>
					<p class="word3">{{item.introduce}}</p>
					<div class="extra">
						<span class="word4"><img :src="item.icon" alt=""></span>
						<span class="word5">{{item.point}}</span>
						<span class="word6">|</span>
						<span class="word7">{{item.classify}}</span>
						<span class="word6">|</span>
						<span class="word7">{{item.classifies}}</span>
					</div>
				</div>
			</div>
        </div>
</template>
<script>
export default {
    data(){
		return{
			changxiao:[{
				imgs:require('@/assets/images/books/10.jpg'),
				name:'天下无仙',
				author:'木石君',
				introduce:'她是一介凡人，却一路逆袭成仙，誓要改变仙贵凡贱的世界。',
				icon:require('@/assets/images/books/star.jpg'),
				point:'9.6',
				classify:'幻想',
				classifies:'架空'
			},{
				imgs:require('@/assets/images/books/11.jpg'),
				name:'不二良犬',
				author:'坡西米',
				introduce:'神仙男友的标准：帅、暖、忠心不二，还得是只会变身的良犬！',
				icon:require('@/assets/images/books/star.jpg'),
				point:'9.8',
				classify:'言情',
				classifies:'轻松'
			},{
				imgs:require('@/assets/images/books/12.jpg'),
				name:'二十四番',
				author:'夜遥',
				introduce:'西园已负，绿窗春近，二十四番花信。',
				icon:require('@/assets/images/books/graystar.jpg'),
				point:'暂无评分',
				classify:'言情',
				classifies:'古代言情'
			},{
				imgs:require('@/assets/images/books/13.jpg'),
				name:'噩梦列车',
				author:'王措',
				introduce:'噩梦里的列车启动了，在无尽黑暗中，没有下一站。',
				icon:require('@/assets/images/books/star.jpg'),
				point:'9.6',
				classify:'悬疑',
				classifies:'罪案故事'
			},{
				imgs:require('@/assets/images/books/14.jpg'),
				name:'局外之人',
				author:'袁知鱼',
				introduce:'一本多方追讨的账本，揭开黑金煤矿下的邪恶交易。',
				icon:require('@/assets/images/books/star.jpg'),
				point:'9.4',
				classify:'悬疑',
				classifies:'罪案故事'
			}],
		}
	}
}
</script>