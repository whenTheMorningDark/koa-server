<template>
  <div>
    <el-upload
      class="upload-demo"
      :http-request="uploadFun"
      :show-file-list="false"
      action="uploadAction"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-button type="primary" size="small" @click="updateInfo">修改</el-button>
  </div>
</template>

<script>
import { upload } from '@/api/upload'
import { updateUserInfo } from '@/api/login'
export default {
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    uploadFun(params) {
      console.log(params)
      const formData = new FormData()
      formData.append('file', params.file)
      upload(formData).then(res => {
        console.log(res)
      })
    },
    updateInfo() {
      const data = {
        nickName: '修改后的nickName',
        city: '深圳a',
        picture: '修改后的picture',
        password: '456789'
      }
      updateUserInfo(data).then(res => {
        console.log(res)
        if (res.errno === 0) {
          this.$message({
            message: '修改成功!',
            type: 'success'
          })
        }
      })
    }
  }
}
</script>

<style>

</style>