<template>
  <div class="scrollbox" v-scroll:throttle="{fn: onScroll, throttle: 500}">
    <slot/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['pagination']),
  },
  methods: {
    onScroll(e,pos) {
      if (this.pagination.loadmore && pos.scrollTop + screen.availHeight > e.target.scrollHeight - screen.availHeight/3) {
        this.$root.$emit('scrollend')
      }
    }
  }
}
</script>
<style lang="css">
  /* body, html {
    padding: 0;
    margin: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  } */

  .scrollbox {
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
    height: 100%;
    width: 100%;
  }

</style>
