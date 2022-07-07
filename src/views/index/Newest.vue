<template>
    <div class="edit-main">
        <div class="edit-list">
            <ul>
                <li v-for="(item,index) in data" :key="index" >
                    <a href="javascript:;">
                        <img :src="item.img" :title="item.name">
                    </a>
                    <p class="text1">
                        <span>{{item.authods}}</span>
                        <img :src="item.dz" alt="">
                        <span>{{item.num}}</span>
                    </p>
                    <p class="text2"><a href="javascript:;">{{item.name}}</a></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'edit',
    data:function(){
        return{
            data:[
                {
                    img:require('@/assets/images/edit-7.jpg'),
                    name:'星辰于我',
                    authods:'犬一',
                    dz:require('@/assets/images/赞.png'),
                    num:'5万'
            },{
                    img:require('@/assets/images/edit-8.jpg'),
                    name:'再度与你',
                    authods:'晗旭L-Mo',
                    dz:require('@/assets/images/赞.png'),
                    num:'7万'
            },{
                    img:require('@/assets/images/edit-9.jpg'),
                    name:'嗨，树洞同学',
                    authods:'六柴',
                    dz:require('@/assets/images/赞.png'),
                    num:'6万'
            },{
                    img:require('@/assets/images/edit-11.jpg'),
                    name:'他那么撩',
                    authods:'曲小蛐',
                    dz:require('@/assets/images/赞.png'),
                    num:'3万'
            },{
                    img:require('@/assets/images/edit-10.jpg'),
                    name:'不说谎恋人',
                    authods:'SASA夏蒂',
                    dz:require('@/assets/images/赞.png'),
                    num:'13万'
            },{
                    img:require('@/assets/images/edit-12.jpg'),
                    name:'恋爱！从今天开始',
                    authods:'雪梨',
                    dz:require('@/assets/images/赞.png'),
                    num:'1万'
            },
            ]
        }
    }
}
</script>