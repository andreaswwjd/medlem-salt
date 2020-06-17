<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger burger" :class="{'is-active': isOpen}" @click="isOpen = !isOpen" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu is-shadowless" style="flex-direction: column;" :class="{'is-active': isOpen}">
      <div class="navbar-center card-header is-shadowless" style="margin-bottom: 1.5em;">
        <nuxt-link to="/dashboard/" class="navbar-item" >
          <span class="icon"><i class="fas fa-home"></i></span>
          <span>Överblick</span>
        </nuxt-link>
        <nuxt-link to="/dashboard/group" class="navbar-item is-active">
          <span class="icon"><i class="fas fa-search"></i></span>
          <span>Sök</span>
        </nuxt-link>
        <nuxt-link to="/dashboard/tags" class="navbar-item">
          <span class="icon"><i class="fas fa-tag"></i></span>
          <span>Grupper</span>
        </nuxt-link>
        <nuxt-link to="/dashboard/events" class="navbar-item">
          <span class="icon"><i class="fas fa-flag"></i></span> 
          <span>Läger</span>
        </nuxt-link>
      </div>
      <div class="card-footer" style="flex-wrap: wrap; flex-direction: column;">
        <div class="navbar-item is-primary">
          <nuxt-link to="/dashboard/guide" title="Ta en guidad tur!">
            Ta en guidad tur!
          </nuxt-link>
        </div>
        <div class="navbar-item is-link">
          <a href="#" @click.prevent="$auth.logout()" title="Ta en guidad tur!">
            <span>Logga ut</span>
          </a>
        </div>
        <div class="navbar-item is-link">
          <nuxt-link to="/dashboard/settings" title="Ta en guidad tur!">
          <!-- <span class="icon"><i class="fas fa-cog"></i></span> -->
            <span>Inställningar</span> 
          </nuxt-link>
        </div>
      </div>
    </div>
    
  </nav>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  computed: {
    // ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  data(){
    return {
      isOpen: true, 
    }
  },
  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>