<template>
  <div>
    <GuideAboutPage/>
    <LibAboutPage/>
  </div>
</template>

<script>

import GuideAboutPage from "@/components/GuideAboutPage";
import LibAboutPage from "@/components/LibAboutPage";
export default {
  name: 'About',

  components: {
    LibAboutPage,
    GuideAboutPage,
  },
};
</script>
