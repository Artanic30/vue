<template>
    <div class="class4">
      <br>
      <br>
      <div v-bind:title="title">将鼠标放在上面</div>
      <hr>
      <br>
      <img v-bind:src="url" >图片加载不出来。。。
      <br>
      <hr>
      {{ht}}这样无法记载html代码
      <br>
      <hr>
       <div v-html="ht" >
       </div>
      <hr>
       <div v-text="title">
       </div>
       绑定方法2
      <hr>
       <div v-bind:class="{'red':flag,'blue':!flag}">
         我不是一个div
       </div>
      <h4 v-bind:class="{'red':!flag,'blue':flag}">加入颜色</h4>
      <hr>
      <ul>
        <li v-for=" (a,key) in list" :class="{'red':(key===1),'blue':(key===0)}">{{key}}---{{a}}</li>
      </ul>
      <hr>
       <div class="box" v-bind:style="{'width':boxWidth+'px'}">
         <button @click="event">try</button>
       </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: '鼠标悬停时间' + new Date().toLocaleString(),
      url: 'https://www.itying.com/themes/itying/images/log.gif',
      ht: '<h3>我是一个html</h3>',
      flag: false,
      list: ['one', 'two', 'three'],
      boxWidth: 100
    }
  },
  methods: {
    event () {
      alert('a')
    }
  }
}
</script>

<style scoped>
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
  .box {
    height: 200px;
    width: 200px;
    background: blue;
  }
</style>
