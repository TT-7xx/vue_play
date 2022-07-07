<template>
    <div class="edit-main">
        <div class="edit-list">
            <ul>
                <li v-for="(item,index) in data" :key="index" >
                    <a @click="jump('',`${item.type}`)">
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
                    img:require('@/assets/images/edit-1.jpg'),
                    name:'他的初恋对象是我',
                    authods:'木兮',
                    dz:require('@/assets/images/赞.png'),
                    num:'5万',
                    type:'edit-1'
            },{
                    img:require('@/assets/images/edit-2.jpg'),
                    name:'透过指尖的光',
                    authods:'九三橙子',
                    dz:require('@/assets/images/赞.png'),
                    num:'7万',
                    type:'edit-2'
            },{
                    img:require('@/assets/images/edit-3.jpg'),
                    name:'魔女们的终与末',
                    authods:'嘤嘤壮汉',
                    dz:require('@/assets/images/赞.png'),
                    num:'6万',
                    type:'edit-3'
            },{
                    img:require('@/assets/images/edit-4.jpg'),
                    name:'磕cp想恋爱怎么办？',
                    authods:'訸安',
                    dz:require('@/assets/images/赞.png'),
                    num:'13万',
                    type:'edit-4'
            },{
                    img:require('@/assets/images/edit-5.jpg'),
                    name:'狼崽养成指南',
                    authods:'夏之茧文化',
                    dz:require('@/assets/images/赞.png'),
                    num:'3万',
                    type:'edit-5'
            },{
                    img:require('@/assets/images/edit-6.jpg'),
                    name:'偷偷藏不住',
                    authods:'竹己',
                    dz:require('@/assets/images/赞.png'),
                    num:'15万',
                    type:'edit-6'
            },
            ]
        }
    },
    methods: {
			jump(index,type){
				if(type=='edit-1'){
				//该路由在router---index.js里已配置
					this.$router.push('/Detail');  
				}else if(type=='edit-2'){
					this.$router.push('/Light');
				}else if(type=='edit-6'){
					this.$router.push('/Steal');
				}
			}
		},
        
}
</script>

<style scoped>

</style>