<!-- 
  login + token  = POST: /member?include=attended_at {id: '', pnr: ''} 
  update         = PUT : /member
-->
<template>
  <div class="container">
    <!-- If no token: LOGIN -->
    <!-- login + token  = POST: /member?include=attended_at {id: '', pnr: ''}  -->
    <div class="" v-if="!loggedInUser">
      <form class="form-group">
        <label class="form-label" for="">Personnummer</label>
        <input class="form-input" type="password" v-model="pnr">
        <div class="spacer"></div>
        <button class="btn btn-sm btn-primary" :class="{loading}" @click.prevent="check">Logga in</button>
      </form>
    </div>

    <!-- If token: Display data -->
    <div v-if="!!loggedInUser && $auth.hasScope('member')">
      <h1 class="title">
        Hej {{loggedInUser.kontakt_via_målsman ? 'målsman till ':''}}{{loggedInUser.firstname}}!
      </h1>
      <p>
        Dessa uppgifter har vi om dig:
      </p>
      <p>
        <label class="form-label" for="">Förnamn</label>
        <input type="text" v-model="user.firstname" :placeholder="loggedInUser.firstname">
        <label class="form-label" for="">Efternamn</label>
        <input type="text" v-model="user.lastname" :placeholder="loggedInUser.lastname">
        <label class="form-label" for="">Kontakt sker via målsman</label>
        <input type="checkbox" v-model="loggedInUser.kontakt_via_målsman"> {{loggedInUser.kontakt_via_målsman ? 'Ja' : 'Nej'}}
        <label class="form-label" for="">Mailadress <span v-if="loggedInUser.kontakt_via_målsman">(målsman)</span></label>
        <input type="text" v-model="loggedInUser.email">
        <label class="form-label" for="">Telefonnummer <span v-if="loggedInUser.kontakt_via_målsman">(målsman)</span></label>
        <input type="text" v-model="loggedInUser.tel">
        <label class="form-label" for="">Du tillhör Salt-föreningen:</label>
        {{loggedInUser.group.name}}
      </p>
      <label class="form-label" for="">Du har varit på följande läger:</label>
      <div v-for="event in loggedInUser.attended_at" :key="event.id">
        <p>{{event.name}} ({{event.year}})</p>
      </div>
      <!-- update  = PUT : /member -->
      <button>Uppdatera info</button>
      {{loggedInUser}}
      <button class="button" @click="$auth.logout()">Logga ut</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'publics',
  middleware: ["auth"],
  options: {
    auth: false
  },
  layout: 'public',
  data: ()=>({
    pnr: '',
    loading: false, 
    user: {}
  }), 
  mounted() {
    if(!this.$auth.hasScope('member')) {
      if (this.$auth.hasScope('leader')) this.$router.replace('/dashboard')
      else if (this.$auth.hasScope('admin')) this.$router.replace('/dashboard/admin')
      else {
        this.$router.replace('/')
      }
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async check(){
      this.loading = true
      this.$auth.loginWith('local', {
        data: {
          id: this.$route.params.id,
          pnr: this.pnr
        }
      })
      .then(async (t) => {
        this.$notify({
          text: 'Välkommen!',
          type: 'success'
        })
        this.loading = false
      })
      .catch((e)=>{
        this.$notify({
          text: 'Oj, det verkar vara nåt fel! Är det nåt som inte stämmer så ta kontakt med din lokala ledare.',
          type: 'warn'
        })
        this.loading = false
      })
    }
  }
}
</script>

<style>
</style>
