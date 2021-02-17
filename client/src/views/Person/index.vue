<template>
  <el-upload
    class="upload-demo"
    :http-request="uploadFun"
    :show-file-list="false"
    action="uploadAction"
  >
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
import { upload } from '@/api/upload'
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
    }
  }
}
</script>

<style>

</style>