<template>
    <div class="Banner-Rank">
        <div class="Banner-wr">
            <ul class="in-banner">
                <li>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/sports1.png" alt="王者荣耀" class="img-1">
                    <span class="in-banner-name-1 in-banner-name-box">王者荣耀
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/sports2.png" alt="王者荣耀" class="img-2">
                    <span class="in-banner-name-2 in-banner-name-box">王者荣耀
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/sports3.png" alt="王者荣耀" class="img-3">
                    <span class="in-banner-name-3 in-banner-name-box">王者荣耀
                        <span class="icon-right"></span>
                    </span>
                    </a>
                     <a href="javascript">
                      <img src="@/assets/images/pictures/sports4.png" alt="枪神纪" class="img-4">
                    <span class="in-banner-name-4 in-banner-name-box">枪神纪
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/sports5.png" alt="王者荣耀" class="img-5">
                    <span class="in-banner-name-5 in-banner-name-box">王者荣耀
                        <span class="icon-right"></span>
                    </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
     name:'sports',
    data:function(){
		return {
        }
	},

		methods: {
			show: function (value) {
				this.$router.push({name: value});//页面跳转
			}
		}
	}
</script>

<style scoped>
.in-banner img:hover{
  margin-top: 5px;
  margin-right: 5px;
}
</style>
