<template>
  <div></div>
  <!--  <el-menu :default-active="$route.path" :router="true">-->
  <!--    <template v-for="menu in routes" :key="menu.name">-->
  <!--      <el-submenu v-if="isVisitable(menu.path) && menu.meta.header" :index="menu.path">-->
  <!--        <template #title>{{ menu.meta.title }}</template>-->
  <!--        <template v-for="submenu in menu.children" :key="submenu.name">-->
  <!--          <el-submenu v-if="isVisitable(submenu.path) && submenu.meta.group" :index="submenu.path">-->
  <!--            <template #title>{{ submenu.meta.title }}</template>-->
  <!--            <template v-for="item in submenu.children" :key="item.name">-->
  <!--              <el-menu-item v-if="isVisitable(item.path)" :index="item.path">{{ item.meta.title }}</el-menu-item>-->
  <!--            </template>-->
  <!--          </el-submenu>-->
  <!--          <el-menu-item v-else-if="isVisitable(submenu.path) && !submenu.meta.group" :index="submenu.path">-->
  <!--            {{ submenu.meta.title }}-->
  <!--          </el-menu-item>-->
  <!--        </template>-->
  <!--      </el-submenu>-->
  <!--    </template>-->
  <!--  </el-menu>-->
</template>

<script>
import {getCurrentInstance} from "vue";

export default {
  name: "RouterSidebar",
  setup() {
    const {proxy} = getCurrentInstance();
    const routes = proxy.$router.getRoutes();

    const isVisitable = path => {
      return proxy.$store.state.userInfo.routes.indexOf(path) >= 0;
    }

    return {
      routes,
      isVisitable
    }
  }
}
</script>
