<template>
<div>
    <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea">
    </el-input>
    <span>{{textLength}}/10</span>
</div>
</template>
<script>
export default {
  data() {
    return {
      textLength: 0,
      textarea: ''
    }
  },
  watch: {
    textarea(val) {
      const reg = /[\u4e00-\u9fa5a-zA-Z0-9]/gi
      let arr = val.match(reg)
      if (arr) {
        console.log(arr.join(''))
      }
      if (arr && arr.length > 10) {
        this.textarea = val.slice(0, val.length - 1)
      }
      this.textLength = arr.length || 0
    }
  }
}
</script>
