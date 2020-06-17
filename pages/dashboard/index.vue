<template>
  <div class="is-outlined">
    <div class="container">
      <div>
        <h1 class="title">
          Välkommen!
        </h1>
        <p>
          Admin: {{loggedInUser}}
        </p>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Grupp</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="group in loggedInUser.groups" :key="group.id">
              <td>{{group.name}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  components: { },
  middleware: ["auth"],
  layout: 'dashboard'
}
</script>

<style>

</style>
