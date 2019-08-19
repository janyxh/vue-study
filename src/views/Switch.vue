<template>
  <div>
    <h1>Switch</h1>
    <el-button type="primary" plain @click="init(1)">type 1</el-button>
    <el-button type="primary" plain @click="init(2)">type 2</el-button>
    <el-button type="primary" plain @click="init(3)">type 3</el-button>
    <div>{{warnTips}}</div>
  </div>
</template>
<script>
export default {
  name: "switchEach",
  data() {
    return {
      type: 0,
      warnTips: ""
    };
  },
  created() {
    this.warnTips = "";
    this.init();
  },
  methods: {
    init(type) {
      this.tryEach(type);
      debugger
      this.warnTips = "已进入下一个函数";
    },
    tryEach(type) {
        debugger
      switch (type) {
        case 1:
          this.warnTips = type;
          break;
        case 2:
          this.warnTips = type;
          break;
        case 3:
          this.warnTips = type + "跳出";
          return;
        default:
          break;
      }
    }
  }
};
</script>