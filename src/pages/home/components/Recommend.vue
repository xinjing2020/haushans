<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.key">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
        <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data(){
    return {
      recommendList:[
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
          title: '成都海昌极地海洋公园',
          desc: '蠢萌企鹅陪你嗨翻这个秋'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201407/03/a584374ee80b738e2600d6bcaf1299e3.jpg_200x200_c26fb243.jpg',
          title: '都江堰',
          desc: '气势磅礴的“世界水利文化鼻祖'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/16/ae96ce4058bd5cf093835fbb.jpg_200x200_e4cb9743.jpg',
          title: '青城道温泉',
          desc: '吐纳青城气息，享受自然温暖'
        },
        {
           id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201307/23/b8db11dca4378903c8d65eac.jpg_200x200_56f59a84.jpg',
          title: '成都动物园',
          desc: '?好评如潮，小伙伴热推景点~'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background #eee 
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title 
        line-height .54rem
        font-size .32rem
        ellipsis() 
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis() 
      .item-button
        line-height .44rem
        margin-top .2rem
        background #ff9300
        padding 0 .2rem
        border-radius  .06rem
        color #fff
</style>
