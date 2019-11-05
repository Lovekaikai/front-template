<template>
  <div id="app">
    <router-view />
    <div class="copyright-text">
      <p>
        <span>中国追溯链.com团队 技术支持</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style lang="less" scoped>
.copyright-text {
    position: fixed;
    margin: 0 auto;
    bottom: 0;
    width: 100%;
}
.copyright-text p {
    text-align: center;
    font-size: 12px;
    color: #9b9b9b;
}
</style>
