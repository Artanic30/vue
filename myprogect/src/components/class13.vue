<template>
    <div class="class12">
      <button @click="getdata">请求数据</button>
      <hr>
      <br>
      <button @click="test" v-model="flag">list is empty</button>
      <ol>
        <li v-for="info in list">{{info}}
        </li>
      </ol>
    </div>
</template>

<script>
  import Axios from 'axios'
export default {
  data () {
    return {
      list:[],
      flag: true
    }
  },
  methods: {
    getdata () {
      var api='https://www.apiopen.top/novelApi';
      Axios.get(api).then((response)=>{
        console.log(response)
        this.list=response.data.data
      }).catch(error)
      {
        console.log(error)
      }
    },
    test () {
      if(this.list === null) {
         this.flag = false
      }
    }
  },
  mounted () {
    this.getdata()
  }
    }
</script>

<style scoped>

</style>
