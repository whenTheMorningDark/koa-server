<template>
  <div>asdwwasdasdsawwwwdasdaaaawww</div>
</template>

<script>
import { getUserInfo } from '@/api/login'
export default {
  async created() {
    const userInfo = await this.getUserInfo()
    console.log(userInfo)
  },
  methods: {
    getUserInfo() {
      return new Promise(reslove => {
        getUserInfo().then(res => {
          if (res.errno === 0) {
            reslove(res.data)
          }
        })
      })
    }
  }
}
</script>

<style>

</style>