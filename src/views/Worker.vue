<template>
  <div>{{result}}</div>
</template>
<script>
export default {
  name: "worker",
  data() {
    return {
      result: ""
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var worker = new Worker("./worker.js");
      //每隔100毫秒，向子线程传递{name: 'monkey'}信息
      // setInterval(function() {
      console.log("发送主线程数据");
      worker.postMessage({ name: "monkey" });
      // }, 100);

      //当主线程worker收到来自子线程的消息后，触发message事件
      worker.onmessage = event => {
        console.log("接收子线程数据", event.data);

        this.result = event.data;
        //主线程使用terminate方法中断与子线程来往，在浏览器中只能显示一次event.data
        // worker.terminate();
      };

      worker.onerror = event => {
        console.log("There is an error with your worker!");
      };

      worker.onmessageerror = event => {
        console.log(event);
      };
    }
  }
};
</script>