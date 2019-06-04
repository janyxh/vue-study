<template>
  <div class="form">
    <ul>
      <li v-for="(item,index) in dataList" :key="index">
        <p>{{item.content}}</p>
        <el-form :model="item.ruleForm" :rules="item.rules" :ref="`ruleForm${index}`" :id="`idv${index}`">
          <el-form-item label="活动名称" prop="name">
            <el-input type="textarea" v-model="item.ruleForm.name" rows="3"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(`ruleForm${index}`,index)">立即创建</el-button>
            <el-button @click="resetForm(`ruleForm${index}`,index)">重置</el-button>
          </el-form-item>
        </el-form>
        <ul>
          <li v-for="(item,index) in replyList" :key="index">
            <p>{{item.content}}</p>
            <el-form :model="item.ruleForm2" :rules="item.rules2" :ref="`ruleForm${index}`" :id="`idv${index}`">
              <el-form-item label="活动名称" prop="name">
                <el-input type="textarea" v-model="item.ruleForm2.name" rows="3"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm(`ruleForm2${index}`,index)">立即创建</el-button>
                <el-button @click="resetForm(`ruleForm2${index}`,index)">重置</el-button>
              </el-form-item>
            </el-form>
          </li>
        </ul>
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
      dataList: [],
      replyList: []
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
      getData('./json/commentList.json', {})
        .then(data => {
          data.forEach(element => {
            element.ruleForm = {
              name: ''
            }
            element.rules = {
              name: [
                {
                  required: true,
                  message: '请输入活动名称',
                  trigger: 'blur'
                }
              ]
            }
          })
          this.dataList = data;
        }) // JSON from `response.json()` call
        .catch(error => console.error(error))
    },
    submitForm(formName, index) {
      this.$refs[formName][0].validate(valid => {
        if (valid) {
          alert('submit!' + index)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName, index) {
      this.$refs[formName][0].resetFields()
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


