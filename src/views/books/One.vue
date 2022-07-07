<template>
<div>
  	<div class="banner">
		<a href="javascript:;"><img src="@/assets/images/books/1.jpg" /></a>
		<a href="javascript:;"><img src="@/assets/images/books/2.jpg" /></a>
		<a href="javascript:;"><img src="@/assets/images/books/3.jpg" /></a>
	</div>
	<div class="choose">
		<ul>
			<li><a href="">完本频道</a></li>
			<li><a href="">悬疑频道</a></li>
			<li><a href="">女性频道</a></li>
			<li><a href="">幻想频道</a></li>
			<li><a href="">文艺频道</a></li>
			<li><a href="">历史频道</a></li>
		</ul>
	</div>
</div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'banner',
	mounted: function(){
		var len = $(".banner").find("a");//获取广告图片
	var pos = 0;//定义变量值为0
	setInterval(function(){
		len.eq(pos).hide();//隐藏元素
    	pos++;//变量值加1
    	if(pos == len.length) pos=0;//变量值重新定义为0
    	len.eq(pos).show();//显示元素
	},2000);//每隔2秒钟切换元素
	}
}
</script>
