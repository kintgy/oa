<template>
  <div @click="logout">
    <i class="el-icon-switch-button"></i>
  </div>
</template>

<script>
import {getCurrentInstance} from "vue";

export default {
  name: "Logout",
  setup() {
    const {proxy} = getCurrentInstance();
    const logout = () => {
      proxy.$confirm(
          '确定退出登录?',
          '退出登录',
          {confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning'}
      ).then(() => {
        proxy.$store.dispatch('EDIT_USER_INFO', undefined);
        sessionStorage.removeItem('userInfo');
        proxy.$router.push({path: '/login', name: 'Login'});
      }).catch(() => {
      });
    }

    return {
      logout
    }
  }
}
</script>


