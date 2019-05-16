<template>
  <div class="form">
    <el-form :model="validateForm" ref="validateForm" :rules="rules" label-width="100px">
      <el-form-item
          label="年龄"
          prop="age"
      >
          <el-input type="text" v-model.number="validateForm.age" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item
          label="手机"
          prop="phone"
      >
          <el-input type="text" v-model.number="validateForm.phone" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="submitForm('validateForm')">提交</el-button>
          <el-button @click="resetForm('validateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };


    const cPhone = /^1[3578]\d{9}$/
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号码不能为空'));
      }else if(!cPhone.test(value)){
        return callback(new Error('手机号码格式不正确'));
      }else {
        callback();
      }
    };
    return {
      validateForm: {
        age: '',
        phone: ''
      },
      rules: {
        age: [{ validator: checkAge, trigger: 'blur' }],
        phone: [{ validator: checkPhone, trigger: 'blur' }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
.form {
  width: 60%;
  margin: auto;
}
</style>


