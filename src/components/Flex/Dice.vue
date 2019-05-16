<template>
    <div class="wrapper">
        <div class="flex" v-for="(item,index) in dataList" :key="index">
          <template v-if="!item.children.third">
            <div v-for="(itemChild,indexChild) in item.children" :key="indexChild"> </div>
          </template>
         <template v-if="item.children.third">
           <div v-for="(itemThird,indexThird) in item.children.third" :key="indexThird">
             <div v-for="(itemS,indexS) in itemThird" :key="indexS"></div>
           </div>
         </template>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          children: [1]
        },
        {
          children: [1, 2]
        },
        {
          children: [1, 2, 3]
        },
        {
          children: [1, 2, 3, 4]
        },
        {
          children: {
            third: [[1, 2], [3], [4, 5]]
          }
        },
        {
          children: {
            third: [[1, 2, 3], [4, 5, 6]]
          }
        },
        {
          children: {
            third: [[1], [2], [3], [4, 5], [6, 7]]
          }
        },
        {
          children: {
            third: [[1, 2, 3, 4], [5, 6, 7, 8]]
          }
        },
        {
          children: [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
  .flex {
    width: 100px;
    height: 100px;
    padding: 20px;
    flex-wrap: wrap;
    border-radius: 10%;
    background: #333;
    div {
      width: 20%;
      height: 20%;
      line-height: 2.5;
      text-align: center;
      border-radius: 50%;
      background: #fff;
      border: none;
    }
  }
  .flex:nth-of-type(1) {
    justify-content: center;
    align-items: center;
  }
  .flex:nth-of-type(2) {
    justify-content: space-between;
    :nth-child(2) {
      align-self: flex-end;
    }
  }
  .flex:nth-of-type(3) {
    justify-content: space-between;
    :nth-child(2) {
      align-self: center;
    }
    :nth-child(3) {
      align-self: flex-end;
    }
  }
  .flex:nth-of-type(4) {
    justify-content: space-between;
    align-content: space-between;
    >:nth-child(odd){
      margin-right:50%;
    }
  }
  .flex:nth-of-type(5) {
    flex-wrap: nowrap;
    > :nth-child(n) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background: none;
      justify-content: space-between;
      :nth-child(n) {
        width: 60%;
      }
    }
    > :nth-child(2) {
      align-items: center;
      justify-content: center;
    }
    > :nth-child(3) {
      align-items: flex-end;
    }
  }
  .flex:nth-of-type(6),
  .flex:nth-of-type(8) {
    flex-wrap: nowrap;
    > :nth-child(n) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background: none;
      justify-content: space-between;
      :nth-child(n) {
        width: 40%;
      }
    }
    > :nth-child(2) {
      align-items: flex-end;
      justify-content: space-between;
    }
  }
  .flex:nth-of-type(7) {
    flex-wrap: nowrap;
    transform: rotate(90deg);
    > :nth-child(n) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background: none;
      // justify-content: space-between;
      align-items: center;
      :nth-child(n) {
        width: 100%;
      }
    }
    > :nth-child(1) {
      justify-content: flex-end;
    }
    > :nth-child(2) {
      justify-content: center;
    }
    > :nth-child(4),
    > :nth-child(5) {
      justify-content: space-around;
    }
  }
  .flex:nth-of-type(9) {
    justify-content: space-around;
    align-content: space-around;
    :nth-child(n) {
      height: calc(100% / 3 -10px);
    }
  }
}
</style>
