<template>
<div class="wrapper">
        flex-start
    <div class="flex">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
        flex-end
    <div class="flex">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
        center
    <div class="flex">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
        space-butween
    <div class="flex">
        <div>1</div>
        <div>2</div>
    </div>
        space-around
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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .flex {
    margin: 5px;
    div {
      width: 50px;
    }
  }
  .flex:nth-of-type(1) {
    display: flex;
    justify-content: flex-start;
  }
  .flex:nth-of-type(2) {
    display: flex;
    justify-content: flex-end;
  }
  .flex:nth-of-type(3) {
    display: flex;
    justify-content: center;
  }
  .flex:nth-of-type(4) {
    display: flex;
    justify-content: space-between;
  }
  .flex:nth-of-type(5) {
    display: flex;
    justify-content: space-around;
  }
}
</style>
