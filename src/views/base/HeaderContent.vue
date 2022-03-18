<template>

  <el-menu mode="horizontal" menu-trigger="click">
    <el-menu-item class="header-logo" index="header-logo">
      <img src="../../assets/logo.png">
      <span>BI SYSTEM </span>
    </el-menu-item>
    <el-menu-item v-if="$store.state.userInfo.id" index="header-title">{{ $route.meta.title }}</el-menu-item>
    <el-menu-item v-if="$store.state.userInfo.id" index="header-logout" class="float-right">
      <logout/>
    </el-menu-item>
    <el-submenu v-if="$store.state.userInfo.id" index="header-item" class="float-right" :title="$store.get().username">
      <template #title>{{ $store.state.userInfo.username }}</template>
      <el-menu-item index="2-1" @click="handleCommand({type: 'changePassword', title: '修改密码', width: '30%'})">修改密码
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import {ref} from "vue";

export default {
  name: "HeaderContent",
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
