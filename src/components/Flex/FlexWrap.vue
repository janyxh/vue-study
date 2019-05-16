<template>
    <div class="wrapper">
        nowrap
        <div class="flex">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
        wrap
        <div class="flex">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
        wrap-reverse
        <div class="flex">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.wrapper {
  display: flex;
//   flex-wrap: wrap;
  .flex {
    margin: 5px;
    div {
      width: 80px;
    }
  }
  .flex:nth-of-type(1) {
    flex-wrap: nowrap;
  }
  .flex:nth-of-type(2) {
    flex-wrap: wrap;
  }
  .flex:nth-of-type(3) {
    flex-wrap: wrap-reverse;
  }
}
</style>
