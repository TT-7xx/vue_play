<template>
    <div class="five-list">
        <div class="listing">
				<span class="ph">排行</span>
				<a href=""><span class="ckgd">查看更多</span></a>
			</div>

            <!-- 1 -->
        <div class="five-lists">
            <div class="lianzai">
                <div class="lz">
                    <p class="lzb">连载榜</p>
                    <p class="small">作品两日内有更新，按周热度排行</p>
                </div>


                <div class="five-top" >
                  <div class="rank" v-for="(items,index) in lian" :key="index">
                      <ul>
                          <li class="rank-book">
                              <div class="rank-number" >{{items.num}}</div>
                              <div class="rank-info">
                                <a href=""><span class="rank-book">{{items.book}}</span></a>
                                <p class="rank-author">{{items.author}}</p>
                                <p class="rank-title">{{items.tit}}</p>
                              </div>
                              <div class="rank-pic">
                                  	<a href=""><img :src="items.imgs" ></a>
                                  
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div class="ranks" v-for="(items,index) in zai" :key="index"> 
                      <div class="rank-numbers" >{{items.nums}}</div>
                      <a href=""><span class="rank-book">{{items.books}}</span></a>
                      <span class="rank-titles">{{items.tits}}</span>
                  </div>
                  <a href=""><div class="five-bottom">查看详情</div></a>
                </div>
          </div>


          <!-- 2 -->
          <div class="qianli">
             <div class="lz">
                    <p class="lzb">潜力榜</p>
                    <p class="small">作品七日内有更新且字数在二万至十万之间，按周阅读时长排序</p>
                </div>


                <div class="five-top" >
                  <div class="rank" v-for="(items,index) in qian" :key="index">
                      <ul>
                          <li class="rank-book">
                              <div class="rank-number" >{{items.num}}</div>
                              <div class="rank-info">
                                <a href=""><span class="rank-book">{{items.book}}</span></a>
                                <p class="rank-author">{{items.author}}</p>
                                <p class="rank-title">{{items.tit}}</p>
                              </div>
                              <div class="rank-pic">
                                  	<a href=""><img :src="items.imgs" ></a>
                                  
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div class="ranks" v-for="(items,index) in li" :key="index"> 
                      <div class="rank-numbers" >{{items.nums}}</div>
                      <a href=""><span class="rank-book">{{items.books}}</span></a>
                      <span class="rank-titles">{{items.tits}}</span>
                  </div>
                  <a href=""><div class="five-bottom">查看详情</div></a>
                </div>
         </div>

<!-- 3 -->
         <div class="qianli">
             <div class="lz">
                    <p class="lzb">完本榜（月）</p>
                    <p class="small">八万字以上完本，按周阅读时长排序（ 作品完结 0 - 30 天 ）</p>
                </div>


                <div class="five-top" >
                  <div class="rank" v-for="(items,index) in wan" :key="index">
                      <ul>
                          <li class="rank-book">
                              <div class="rank-number" >{{items.num}}</div>
                              <div class="rank-info">
                                <a href=""><span class="rank-book">{{items.book}}</span></a>
                                <p class="rank-author">{{items.author}}</p>
                                <p class="rank-title">{{items.tit}}</p>
                              </div>
                              <div class="rank-pic">
                                  	<a href=""><img :src="items.imgs" ></a>
                                  
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div class="ranks" v-for="(items,index) in ben" :key="index"> 
                      <div class="rank-numbers" >{{items.nums}}</div>
                      <a href=""><span class="rank-book">{{items.books}}</span></a>
                      <span class="rank-titles">{{items.tits}}</span>
                  </div>
                  <a href=""><div class="five-bottom">查看详情</div></a>
                </div>
         </div>
<!-- 4 -->

         <div class="qianli">
             <div class="lz">
                    <p class="lzb">推荐榜（月）</p>
                    <p class="small">按作品过去 1 个月所获得推荐票数排行</p>
                </div>


                <div class="five-top" >
                  <div class="rank" v-for="(items,index) in tui" :key="index">
                      <ul>
                          <li class="rank-book">
                              <div class="rank-number" >{{items.num}}</div>
                              <div class="rank-info">
                                <a href=""><span class="rank-book">{{items.book}}</span></a>
                                <p class="rank-author">{{items.author}}</p>
                                <p class="rank-title">{{items.tit}}</p>
                              </div>
                              <div class="rank-pic">
                                  	<a href=""><img :src="items.imgs" ></a>
                                  
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div class="ranks" v-for="(items,index) in jian" :key="index"> 
                      <div class="rank-numbers" >{{items.nums}}</div>
                      <a href=""><span class="rank-book">{{items.books}}</span></a>
                      <span class="rank-titles">{{items.tits}}</span>
                  </div>
                  <a href=""><div class="five-bottom">查看详情</div></a>
                </div>
         </div>
        </div>
         



        </div>

    
    
</template>
<script>
export default {
    data(){
        return{
           lian:[{
               num:'1',
               book:'世无双',
               author:'大姑娘浪',
               tit:'言情',
               imgs:require('@/assets/images/books/06.jpg')
           },{
               num:'2',
               book:'心隐之地',
               author:'徐暮明',
               tit:'悬疑',
               imgs:require('@/assets/images/books/15.jpg')
           },{
               num:'3',
               book:'夏日轻喜聚',
               author:'兰思思',
               tit:'女性',
               imgs:require('@/assets/images/books/16.jpg')
           }],
           zai:[{
               nums:'4',
               books:'朋友的那个完美妻子',
               tits:'悬疑'
           },{
               nums:'5',
               books:'好天气',
               tits:'治愈'
           },{
               nums:'6',
               books:'和前夫同居了',
               tits:'言情'
           },{
               nums:'7',
               books:'那个爱了很久的朋友',
               tits:'言情'
           },{
               nums:'8',
               books:'年下不叫姐 ,心思有点野',
               tits:'言情'
           },{
               nums:'9',
               books:'二次缝合',
               tits:'治愈'
           },{
               nums:'10',
               books:'野蛮生长的爱情',
               tits:'治愈'
           }],
        //    2
           qian:[{
               num:'1',
               book:'我们糟糕的三十岁',
               author:'十三弦声',
               tit:'女性',
               imgs:require('@/assets/images/books/17.jpg')
           },{
               num:'2',
               book:'当博士想要恋爱时',
               author:'苏菲懒',
               tit:'言情',
               imgs:require('@/assets/images/books/18.jpg')
           },{
               num:'3',
               book:'穿越78度的爱情',
               author:'风笙',
               tit:'言情',
               imgs:require('@/assets/images/books/19.jpg')
           }],
           li:[{
               nums:'4',
               books:'暴雨凶猛',
               tits:'女性'
           },{
               nums:'5',
               books:'香槟撞上白兰地',
               tits:'言情'
           },{
               nums:'6',
               books:'数千个像我一样的女孩',
               tits:'文艺'
           },{
               nums:'7',
               books:'等不及，杀了你',
               tits:'悬疑'
           },{
               nums:'8',
               books:'无人之家',
               tits:'悬疑'
           },{
               nums:'9',
               books:'恐怖UP主',
               tits:'幻想'
           },{
               nums:'10',
               books:'云舟传',
               tits:'言情'
           }],
        //    3
           wan:[{
               num:'1',
               book:'但愿人长久',
               author:'李尾',
               tit:'言情',
               imgs:require('@/assets/images/books/20.jpg')
           },{
               num:'2',
               book:'春潮',
               author:'世吹雀',
               tit:'治愈',
               imgs:require('@/assets/images/books/21.jpg')
           },{
               num:'3',
               book:'画堂春',
               author:'轻轻扬',
               tit:'古代言情',
               imgs:require('@/assets/images/books/22.jpg')
           }],
           ben:[{
               nums:'4',
               books:'寻找金福真',
               tits:'悬疑'
           },{
               nums:'5',
               books:'投行启示录',
               tits:'女性'
           },{
               nums:'6',
               books:'长安奇案录',
               tits:'古代言情'
           },{
               nums:'7',
               books:'长门寂寂春如故',
               tits:'言情'
           },{
               nums:'8',
               books:'意外之外',
               tits:'悬疑'
           },{
               nums:'9',
               books:'欢颜',
               tits:'婚姻生活'
           },{
               nums:'10',
               books:'雪满头',
               tits:'言情'
           }],
        //    4
           tui:[{
               num:'1',
               book:'世无双',
               author:'大姑娘浪',
               tit:'言情',
               imgs:require('@/assets/images/books/06.jpg')
           },{
               num:'2',
               book:'但愿人长久',
               author:'李尾',
               tit:'言情',
               imgs:require('@/assets/images/books/20.jpg')
           },{
               num:'3',
               book:'和前夫同居了',
               author:'林春令',
               tit:'言情',
               imgs:require('@/assets/images/books/23.jpg')
           }],
           jian:[{
               nums:'4',
               books:'好天气',
               tits:'治愈'
           },{
               nums:'5',
               books:'心隐之地',
               tits:'悬疑'
           },{
               nums:'6',
               books:'空笺',
               tits:'民国情缘'
           },{
               nums:'7',
               books:'夏日轻喜聚',
               tits:'女性'
           },{
               nums:'8',
               books:'云湖不喜',
               tits:'言情'
           },{
               nums:'9',
               books:'那个爱了很久的朋友',
               tits:'言情'
           },{
               nums:'10',
               books:'烈焰',
               tits:'治愈'
           }]
        }
    },
}
</script>