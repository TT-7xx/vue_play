<template>
    <div class="works-box">
        <div class="works-top-bor">
           </div>
        <div class="works-top-bot">
            <p>
                2021快看原创条漫大赛收到
                <span>1400+投稿作品</span>
                ，其中有
                <span>50部漫画</span>
                作品脱颖而出。所有入围作品均会获得
                <span>入围证书、大赛定制奖品，评语指导以及作品流量扶持。</span>
                愿各位创作者在原创之路披荆斩棘，再创佳绩！
            </p>
           </div>
           <div class="works-detail">
               <p class="works-detail-top-text">快看原创条漫大赛50部入围作品</p>
               <div class="works-for">
                   <ul>
                       <li v-for="(item,index) in data" :key="index">
                           <a href="javascript:;">
                               <img :src="item.imgUrl">
                           </a>
                           <p class="works-text1">{{item.text1}}</p>
                           <p class="works-text2">{{item.text2}}</p>
                           <div class="text-box">
                               <p class="works-text3">{{item.name}}</p>
                               <p class="works-text4">{{item.detail}}</p>
                               <p class="works-text5">作者：{{item.authods}}</p>
                           </div>
                       </li>
                   </ul>
               </div><p class="text6">到底啦,快看看其他作品吧!</p>
           </div>
           
    </div>
</template>

<script>
export default {
    name:'works',
    data:function(){
        return{
            data:[{
                imgUrl:require('@/assets/images/works-detail-1.jpg'),
                text1:'剧情',
                text2:'校园',
                name:'纸愈',
                detail:'我没有被欺负。只是被孤立了，而已。',
                authods:'Jorigin'
            },
            {
                imgUrl:require('@/assets/images/works-detail-2.jpg'),
                text1:'剧情',
                text2:'校园',
                name:'不可能的事',
                detail:'两对青梅竹马之间的复杂关系，要怎么做才能让每个人的恋情都得偿所愿呢？',
                authods:'_笑之'
            },{
                imgUrl:require('@/assets/images/works-detail-3.jpg'),
                text1:'ric',
                text2:'治愈',
                name:'即使是日常',
                detail:'在学霸云集的省重点里，谷山岛只是个不够努力的一般人，自以为默不作声的以学渣身份度过高中生活就可以了，却被学校的“学习社计划”搅乱…',
                authods:'好夹心儿'
            },{
                imgUrl:require('@/assets/images/works-detail-4.jpg'),
                text1:'投稿',
                text2:'纯爱',
                name:'春山行',
                detail:'普普通通的教书先生姬如玉收养了身份不明的小乞丐慕奚昭，因此被迫卷入了一场斗争之中......（年下养成 前期就是养儿日常 慢热）',
                authods:'铁头花充电中'
            },{
                imgUrl:require('@/assets/images/works-detail-5.jpg'),
                text1:'日常',
                text2:'校园',
                name:'恋恋小甜梗',
                detail:'普通大学生林咸与校园男神延宇森，原本毫无交集的两人，却在互相不知道的情况下，和对方有过一面之缘。一次意外，林咸发现了这个所谓的校……',
                authods:'阿尔恩'
            },{
                imgUrl:require('@/assets/images/works-detail-6.jpg'),
                text1:'日常',
                text2:'治愈',
                name:'竹鼠和竹熊',
                detail:'欢了个脱的竹鼠和忧了个桑的竹熊的治愈日常~~加料有惊喜！',
                authods:'BAMBOOMATES'
            },{
                imgUrl:require('@/assets/images/works-detail-7.jpg'),
                text1:'剧情',
                text2:'校园',
                name:'纸愈',
                detail:'我没有被欺负。只是被孤立了，而已。',
                authods:'Jorigin'
            },{
                imgUrl:require('@/assets/images/works-detail-8.jpg'),
                text1:'日常',
                text2:'治愈',
                name:'两情相悦只需0.36秒',
                detail:'恋途未卜的秋天，青春的气息悄然来到身旁。不慎触碰到后，有如毒药一般的恋爱心情，从四面八方怒涛般侵入。当意识到的时候已经再也无法逃脱。',
                authods:'谦下'
            },{
                imgUrl:require('@/assets/images/works-detail-9.jpg'),
                text1:'恋爱',
                text2:'奇幻',
                name:'下沉的月亮',
                detail:'踏上忘记你的旅程',
                authods:'OKINI'
            },{
                imgUrl:require('@/assets/images/works-detail-10.jpg'),
                text1:'日常',
                text2:'治愈',
                name:'请让我好好学习',
                detail:'从小就是爱哭的夏子禾，在经历某个事件后，决定痛改前非，改正爱哭这个坏习惯。为此考上全寄宿的重点高中以锻炼自己，为了接触...',
                authods:'禾末子'
            },{
                imgUrl:require('@/assets/images/works-detail-11.jpg'),
                text1:'治愈',
                text2:'校园',
                name:'秧子校长',
                detail:'对南九里学院崇敬了六年之久的秧子，突然被迫成为南九里学院的校长。究竟是倒霉还是惊喜。故事由此展开。',
                authods:'吕三rallk'
            },{
                imgUrl:require('@/assets/images/works-detail-12.jpg'),
                text1:'剧情',
                text2:'恋爱',
                name:'AO！阴险情人',
                detail:'集团总裁林秉明俊朗傲慢行事高调，是最优质的阿尔法。本着一来给对方上点眼药，二来给哥哥李秋辞绑定一个好姻缘，军团女王李秋野...',
                authods:'废驼'
            },{
                imgUrl:require('@/assets/images/works-detail-13.jpg'),
                text1:'奇幻',
                text2:'治愈',
                name:'魔法师的学徒',
                detail:'无论如何都无法掌握元素魔法的阿贝丽贝十分烦恼，担心自己的无能会让老师失望的少女转而向森林的神秘生灵祈求力量……',
                authods:'你好_茶茶'
            },{
                imgUrl:require('@/assets/images/works-detail-14.jpg'),
                text1:'少女',
                text2:'校园',
                name:'性转怎么谈恋爱？！',
                detail:'一觉醒来变成了男人呜呜呜，这偏偏还是姨妈体质，救命！',
                authods:'大雕鱼'
            },{
                imgUrl:require('@/assets/images/works-detail-15.jpg'),
                text1:'剧情',
                text2:'奇幻',
                name:'零食男友',
                detail:'女主不落暮因车祸与雷击产生的奇妙反应创造了一个世界，成为传说中的造物主。本以为接下来可以平静地生活下去...',
                authods:'旗蓝蓝'
            },{
                imgUrl:require('@/assets/images/works-detail-16.jpg'),
                text1:'日常',
                text2:'异能',
                name:'影男',
                detail:'这是一部脑洞奇幻色彩的作品，一个中学生意外变成透明人，他的生活发生翻天覆地的改变，不能暴露成了他最在意的事情...',
                authods:'克里斯森森'
            },
            ]
        }
    }
}
</script>