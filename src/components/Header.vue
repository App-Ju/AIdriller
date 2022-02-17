<template>
  <div class="header__wrapper">
    <v-btn
        @click="$router.push('/')"
    >
      About
    </v-btn>
    <v-btn
        @click="$router.push('/address-search')"
    >
      Address Search
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>