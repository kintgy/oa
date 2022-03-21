<template>
  {{ $store.state.userInfo }}
  <el-menu mode="horizontal" menu-trigger="click">
    <el-menu-item class="header-logo" index="header-logo">
      <img src="../../assets/logo.png">
      <span>BI SYSTEM </span>
    </el-menu-item>
    <el-menu-item v-if="$store.state.userInfo.id" index="header-title">{{ $route.meta.title }}</el-menu-item>
    <el-menu-item v-if="$store.state.userInfo.id" index="header-logout" class="float-right">
      <logout></logout>
    </el-menu-item>
    <el-sub-menu v-if="$store.state.userInfo.id" index="header-item" class="float-right" :title="$store.state.userInfo.name">
      <template #title>{{ $store.state.userInfo.name }}</template>
      <el-menu-item index="2-1" @click="handleCommand({type: 'changePassword', title: '修改密码', width: '30%'})">修改密码
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script>
import {ref} from "vue";
import Logout from "@/views/auth/Logout";
import ElMenu from 'element-plus';

export default {
  name: "HeaderContent",
  components: {Logout, ElMenu},
  setup() {
    const dialogShow = ref(false);
    const dialogInfo = ref({type: null, title: null});
    const handleCommand = command => {
      dialogShow.value = true;
      dialogInfo.value = command;
    }

    return {
      dialogShow, dialogInfo, handleCommand
    }
  }
}
</script>
<style>
.el-header {
  padding: 0 !important;
}

.el-header .is-active {
  border-bottom: unset !important;
}

.el-header .el-submenu__title {
  border-bottom: unset !important;
}

.el-header .el-menu-item {
  color: #000000 !important;
}

.el-header .el-submenu__title {
  color: #000000 !important;
}

.header-title {
  cursor: unset !important;
}

.header-logo {
  width: 250px !important;
}

.header-logo img {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 10px;
  left: 50px;
}

.header-logo span {
  line-height: 60px;
  padding-left: 90px;
  font-weight: bold;
}
</style>
