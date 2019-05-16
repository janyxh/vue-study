<template>
  <div class="wrapper">
      <div class="flex">
          <div>1</div>
          <div>2</div>
          <div>3</div>
      </div>
      <div class="flex">
          <div>1</div>
          <div>2</div>
          <div>3</div>
      </div>
      <div class="flex">
          <div>1</div>
          <div>2</div>
          <div>3</div>
      </div>
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
  .flex {
    margin: 5px;
    div {
      // width: 100px;
      // height: 100px;
      flex-basis: content;
    }
  }
  .flex:nth-of-type(1) {
    flex-direction: row;
  }
  .flex:nth-of-type(2) {
    flex-direction: row-reverse;
  }
  .flex:nth-of-type(3) {
    flex-direction: column;
  }
  .flex:nth-of-type(4) {
    flex-direction: column-reverse;
  }
}
</style>
