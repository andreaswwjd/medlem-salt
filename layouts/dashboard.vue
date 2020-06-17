<template>
  <Scrollbox>
    <main class="mainbox columns is-paddingless">
      <div class="column is-paddingless" style="flex-basis: 170px; flex-grow: 0;">
        <Navbar/>
      </div>
      <div class="column maincontent">
        <!-- <nav class="breadcrumb is-right" aria-label="breadcrumbs" style="font-size: 13px;">
          <ul>
            <li v-for="path in paths" :key="path"><nuxt-link :to="path">{{breadcrumbs[path]}}</nuxt-link></li>
          </ul>
        </nav> -->
        <nuxt/>
      </div>
    </main>
  </Scrollbox>
</template>
<script>
import Scrollbox from '~/components/Scrollbox'
import Navbar from '~/components/Navbar'
import { mapGetters } from 'vuex'

export default {
  components: {
    Scrollbox,
    Navbar
  },
  middleware: ["auth"],
  data(){
    return {
      // breadcrumbs: {
      //   dashboard: 'Startsida',
      // }
    }
  },
  computed: {
    ...mapGetters(['breadcrumbs']),
    paths () {
      return this.$route.path.split('/').splice(1).map((d,i,a)=>[...a].splice(0,i+1).join('-'))
    }
  }
}
</script>

<style lang="scss">
  

</style>

