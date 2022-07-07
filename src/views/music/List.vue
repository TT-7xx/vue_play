<template>
<div>
    <div class="list-img">
        <ul>
            <li v-for="(item,index) in data" :key="index"
                @mouseenter="stopMov(index)" @mouseleave="continueMov()">
                <div class="list-box">
                    <div v-show="ever">
                         <a>
                            <img :src="item.imgUrl">
                         </a>
                    </div>
                    <div class="introduce" v-show="evers&&curr==index">
                        <span class="tit">{{item.name}}</span>
                        <span class="summary">{{item.text}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div> 
</template>

<script>
export default {
    name:'List',
    data:function(){
        return{
            ever:true,
            evers:false,
            curr:0,
            data:[
                {
                   imgUrl:require('@/assets/images/pictures/list1.png'),
                   name:'美就完事了', 
                   text:'没有描述单纯因为好看'
                },
                {
                   imgUrl:require('@/assets/images/pictures/list2.png'),
                   name:'美就完事了', 
                   text:'没有描述单纯因为好看'
                },
                {
                   imgUrl:require('@/assets/images/pictures/list3.png'),
                   name:'美就完事了', 
                   text:'没有描述单纯因为好看'
                },
                {
                   imgUrl:require('@/assets/images/pictures/list4.png'),
                   name:'美就完事了', 
                   text:'没有描述单纯因为好看'
                },
                {
                   imgUrl:require('@/assets/images/pictures/list5.png'),
                   name:'美就完事了', 
                   text:'没有描述单纯因为好看'
                },
                {
                   imgUrl:require('@/assets/images/pictures/list6.png'),
                   name:'美就完事了', 
                   text:'没有描述单纯因为好看'
                },
            ]
        }
    },
    methods:{
        stopMov(index){
            this.curr=index,
            this.evers=true

        },
        continueMov(){
            this.evers=false
        }
    }
}
</script>

<style scoped>

</style>