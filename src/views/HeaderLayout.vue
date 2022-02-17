<template>
  <div class="header__layout">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "HeaderLayout",
  components: {Header}
}
</script>

<style scoped>

</style>