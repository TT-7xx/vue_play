<template>
    <div class="change-box">
        <div class="change-header">
            <h2>这部漫改超厉害！</h2>
        </div>
        <div class="change-center">
            <div class="change-img-box">
                <div class="change-img">
                <ul>
                    <li v-for="(item,index) in data" :key="index">
                        <a href="javascript:;">
                             <img :src="item.img" :title="item.name">
                         </a>
                          <p class="text1">
                        <span>{{item.authods}}</span>
                        <img :src="item.dz">
                        <span>{{item.num}}</span>
                         </p>
                         <p class="text2">{{item.name}}</p>
                        <p class="text3">{{item.text}}</p>
                    </li>
                </ul>
            </div>
            
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:'change',
    data:function(){
        return{
            data:[{
                img:require('@/assets/images/change-1.jpg'),
                name:'斗罗大陆外传唐门英雄传',
                authods:'唐家三少(原著)',
                dz:require('@/assets/images/赞.png'),
                num:'99万+',
                text:'被封印的神界，只有唐三的神力可以直接与外面联系。要战败的时候，从遥远…'
            },{
                img:require('@/assets/images/change-2.jpg'),
                name:'被遗忘的7月',
                authods:'muryu',
                dz:require('@/assets/images/赞.png'),
                num:'59万+',
                text:'热播剧《偶然发现的一天》原著漫画记忆断片的女主俞璐丹以为自己患…'
            },{
                img:require('@/assets/images/change-3.jpg'),
                name:'哑舍',
                authods:'玄色（原著）+晓泊',
                dz:require('@/assets/images/赞.png'),
                num:'99万+',
                text:'哑舍里的古物，每一件都有着自己的故事，承载了许多年，无人倾听，默然等…'
            },{
                img:require('@/assets/images/change-4.jpg'),
                name:'八十一道超纲题',
                authods:'条纹花瓶（原著）+常盘勇者',
                dz:require('@/assets/images/赞.png'),
                num:'22万+',
                text:'2030年，世界末日来临，无数人神秘死亡，剩下的幸存者被一款叫做“八十一…'
            },
            ]
        }
    }
}
</script>