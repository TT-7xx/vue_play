<template>
    <div class="Banner-Rank Banner-Rank-1">
         <div class="right-rank">
            <div class="tab-handle clearfix">
                <h2>热门排行</h2>
                <ul id="top-rank">
                    <li class="active">
                        <a href="javascript">国漫</a>
                    </li>
                    <li>
                        <a href="javascript">日漫</a>
                    </li>
                    <li>
                        <a href="javascript">综合</a>
                    </li>
                </ul>
            </div>
            <div class="tab-content">
                <div class="tab-content-left">
                    <ul>
                        <li>
                            <span class="tab-content-left-text1">1</span>
                            <a href="javascript">龙珠</a>
                            <i class="rank-trend"></i>
                        </li>
                        <li>
                            <span class="tab-content-left-text1">2</span>
                            <a href="javascript">名侦探柯南</a>
                            <i class="rank-trend"></i>
                        </li>
                        <li>
                            <span class="tab-content-left-text1">3</span>
                            <a href="javascript">海贼王</a>
                            <i class="rank-trend"></i>
                        </li>
                            <li v-for="(item,index) in data" :key="index">
                            <p>{{item.number}}</p>
                            <a href="javascript:">{{item.name}}</a>
                            <i>{{item.trend}}</i>
                        </li>   
                    </ul>
                </div>

                <div class="tab-content-right">
                    <ul>
                        <li v-for="(item,index) in nums" :key="index">
                            <p>{{item.number}}</p>
                            <a href="javascript:">{{item.name}}</a>
                            <i>{{item.trend}}</i>
                        </li>   
                    </ul>
                </div>
            </div>
            <div class="in-rank-spacing"></div>
            <ul class="in-rank-recommend">
                <li class="recommend-left">
                    <i class="in-icon-jian"></i>
                    <a href="javascript">大王饶命</a>
                </li>
                <li class="recommend-right">
                    <i class="in-icon-jian"></i>
                    <a href="javascript">大奉打更人</a>  
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
     name:'rank',
    data:function(){
		return {
			data : [{
             	number:4,
                name:'火影忍者',
			},{
				number:5,
                name:'鬼灭之刃',
			},{
			    number:6,
                name:'黑色四叶草',
            },{
			    number:7,
                name:'美食的俘虏',
            },{
			    number:8,
                name:'新网球王子',
			}],
            nums : [{
             	number:9,
                name:'死神/境·界',
			},{
				number:10,
                name:'最强会长黑神',
			},{
			    number:11,
                name:'斗破苍穹',
            },{
			    number:12,
                name:'博人传-火影次',
            },{
			    number:13,
                name:'怪兽8号 ',
             },{
			    number:14,
                name:'点绛唇',
             },{
			    number:15,
                name:'我有999种异',
             },{
			    number:16,
                name:'循循念靖',
			}]
		}
	},
}
</script>