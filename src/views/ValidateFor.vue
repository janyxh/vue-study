<template>
  <div class="form">
    <ul>
      <li v-for="(item,index) in dataList" :key="index">
        <p>{{item.content}}</p>
        <el-form :model="item.ruleForm" :rules="item.rules" ref="ruleForm" :id="`idv${index}`">
          <el-form-item label="活动名称" prop="name">
            <el-input type="textarea" v-model="item.ruleForm.name" rows="3"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm',index)">立即创建</el-button>
            <el-button @click="resetForm('ruleForm',index)">重置</el-button>
          </el-form-item>
        </el-form>
      </li>
      <!-- <li>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name" type="textarea" rows="3"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(`ruleForm`)">立即创建</el-button>
            <el-button @click="resetForm(`ruleForm`)">重置</el-button>
          </el-form-item>
        </el-form>
      </li> -->
      <!-- <li>
        <p ref="refP"></p>
      </li> -->
    </ul>
  </div>
</template>
<script>
import { postData, getData } from '@/api'
// import { getCommitList } from '@/api/index'
export default {
  data() {
    return {
      dataList: [
        // {
        //   content: '我是要成为海贼王的男人',
        //   ruleForm: {
        //     name: ''
        //   },
        //   rules: {
        //     name: [
        //       { required: true, message: '请输入活动名称', trigger: 'blur' }
        //     ]
        //   }
        // },
        // {
        //   content: '真的勇士敢于直面惨淡的人生',
        //   ruleForm: {
        //     name: ''
        //   },
        //   rules: {
        //     name: [
        //       { required: true, message: '请输入活动名称', trigger: 'blur' }
        //     ]
        //   }
        // },
        // {
        //   content: '有志气！',
        //   ruleForm: {
        //     name: ''
        //   },
        //   rules: {
        //     name: [
        //       { required: true, message: '请输入活动名称', trigger: 'blur' }
        //     ]
        //   }
        // }
      ]
      // ruleForm: {
      //   name: ''
      // },
      // rules: {
      //   name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }]
      // }
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      // fetch('./json/index.json')
      //   .then(function(response) {
      //     return response.json()
      //   })
      //   .then(myJson => {
      //     console.log('myJson', myJson)
      //     this.dataList = myJson
      //   })
      // console.log('postData',postData)
      getData('./json/index.json', {})
        .then(data => {
          this.dataList = data
        }) // JSON from `response.json()` call
        .catch(error => console.error(error))
    },
    submitForm(formName, index) {
      console.log(formName)
      console.log('$refs', this.$refs)
      console.log('form', this.$refs[formName][index])

      this.$refs[formName][index].validate(valid => {
        if (valid) {
          alert('submit!' + index)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName, index) {
      this.$refs[formName][index].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
li {
  list-style: none;
  width: 60%;
  margin: auto;
}
</style>


