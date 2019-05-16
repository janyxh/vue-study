<template>
        <div class="flex">
            <div v-for="item in dataList" :key="item">{{item}}</div>
        </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-around;
  div {
    // flex-basis: 100px;
    width: calc(100% / 3 - 15px);
    height: calc(100% / 3 - 15px);
  }
}
</style>
