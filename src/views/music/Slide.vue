<template>
  <div class="index-content" id="my">
    <div class="slide-banner">
        <img  v-for="(v,i) in img " :key="i" :src="v" v-show="i==n"/>   
        <div class="banner-circle">
            <ul>
                <li  v-for="(v,i) in img " :key="i" :class="i==n ?'selected':''"></li>  
            </ul> 
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
        data(){
          return{
            img:[
                require('@/assets/images/pictures/初音未来.jpg'),
                require('@/assets/images/pictures/帝王攻略.jpg'),
                require('@/assets/images/pictures/白色玲珑.jpg'),
                require('@/assets/images/pictures/昨日青空.jpg'),
                require('@/assets/images/pictures/全职高手.jpg'),],
            n:2
        }
        },
            
        methods:{
            fun:function(){
                //setInterval(函数体,时间)
                setInterval(this.play,2000)
            },
            play:function(){
                this.n++;
                if(this.n == this.img.length){
                    this.n = 0;
                }
            }
        },
        mounted:function(){   
            this.fun()
        }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}
ul {
    list-style-type:none;
}
body {
    font-size: 14px;
    background: #fff;
    overflow-y:scroll;
    overflow-x:hidden;
}
html,body {
    max-width:720px;
    height:100%;
    margin:0 auto;
}
.index-content{
  width: 610px;
  height: 400px;
  margin-top: 185px;
  margin-left: 160px;
  float: left;
}
.index-content .slide-banner {
    position: relative;
}
.index-content .slide-banner .banner-circle {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    color: #fff;
}
.index-content .slide-banner .banner-circle li{
    display:inline-block;
    background: rgba(0,0,0,.3);
    border-radius: 50%;
    padding:5px;
    margin:2px;
}
.index-content .slide-banner .banner-circle ul {
    text-align: center;
}
.index-content .slide-banner .banner-circle .selected {
    background: rgba(221, 91, 31, 0.8);
}
.index-content .slide-banner img {
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>