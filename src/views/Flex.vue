<template>
    <div>
        <h2>Flex 弹性盒模型</h2>
        <el-row class="tac">
            <el-col :span="6">
                <h5>默认颜色</h5>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                    <div v-for="(item,index) in navFlex" :key="index">
                        <el-submenu v-if="item.childredn" :index="index+1+''">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>{{item.name}}{{index}}</span>
                            </template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item v-if="!item.childredn" :index="index+''">
                            <i class="el-icon-menu"></i>
                            <router-link :to="'/flex/'+item.path" tag="span" slot="title">{{item.name}}</router-link> 
                        </el-menu-item>
                    </div>
                </el-menu>
            </el-col>
            <el-col :span="18" class="right-view">
                <router-view></router-view>
            </el-col>
            </el-row>
    </div>
</template>
<script>
import routes from '@/router/routes'
export default {
  data() {
    return {
      navFlex: []
    }
  },
  created() {
    if (this.navFlex.length === 0) {
      let objRoutes = JSON.parse(JSON.stringify(routes))
      let flex = objRoutes.find(item => {
        return item.name === 'flex'
      })
      this.navFlex = flex.children
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss">
.right-view {
  padding: 0 50px;
  .flex {
    display: flex;
    width: 200px;
    height: 200px;
    margin: 5px;
    border: 1px solid #ccc;
    background: #eeeeee;
    div {
      background: #50bfff;
      color: #ffffff;
      border: 1px solid #00a2ff;
    }
  }
}
</style>
