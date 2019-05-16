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
          children: [1, 2, 3, 4, 5, 6]
        },
        {
          children: [1, 2, 3, 4, 5, 6]
        },
        {
          children: [1, 2, 3, 4, 5, 6]
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
  .flex{
    flex-wrap: wrap;
    div{
      width:50px;
      height: 50px;
    }
  }
  .flex:nth-of-type(1) {
    align-content:stretch;
  }
  .flex:nth-of-type(2) {
    align-content:baseline;
  }
  .flex:nth-of-type(3) {
    align-content:center;
  }
  .flex:nth-of-type(4) {
    align-content:flex-start;
  }
  .flex:nth-of-type(5) {
    align-content:flex-end;
  }
  .flex:nth-of-type(6) {
    align-content: space-around;
  }
  .flex:nth-of-type(7) {
    align-content: space-between;
  }
}
</style>
