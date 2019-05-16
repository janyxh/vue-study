<template>
    <div class="wrapper">
        <div class="flex" v-for="(item,index) in dataList" :key="index">
            <div v-for="itemChild in item.children" :key="itemChild">{{itemChild}}</div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          children: [1, 2, 3, 4, 5, 6]
        },
        {
          children: [1, 2, 3, 4, 5, 6]
        },
        {
          children: [1, 2, 3, 4, 5, 6]
        },
        {
          children: [1, 2, '34qq332wwqwwq', 4, 5, 6]
        },
        {
          children: [1, 2, 3, 4, 5, 6]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  .flex:nth-of-type(1) {
    align-items: flex-start;
  }
  .flex:nth-of-type(2) {
    align-items: flex-end;
  }
  .flex:nth-of-type(3) {
    align-items: center;
  }
  .flex:nth-of-type(4) {
    align-items: baseline;
  }
  .flex:nth-of-type(5) {
    align-items: stretch;
  }
}
</style>
