<template>
  <div class="container">
    <div>
      <h1 class="title">
        {{member.firstname}} {{member.lastname}}
      </h1>
      <p>
        {{member.firstname}} {{member.lastname}}
      </p>
      <p>
        {{member.age}} år
      </p>
      <p>
        {{member.group.name}}
      </p>
      <p>
        {{member.tel}}
      </p>
      <p>
        {{member.email}}
      </p>
      <p>
        kontakt_via_målsman {{member.kontakt_via_målsman}}
      </p>
      <p>
        <!-- {{member.tags}}
        {{member.roles}}
        {{member.attended_at}} -->
      </p>
      <p>
        <!-- {{member.messages}} -->
      </p>
      <div class="conversation column box" style="width: 320px;">
        <Sms v-for="message in member.messages" :key="message.id" v-bind="message"/>
      </div>
    </div>
  </div>
</template>

<script>
import Sms from '~/components/Sms.vue'
import { mapGetters } from 'vuex'

export default {
  layout: 'dashboard',
  middleware: ["auth"],
  components: { Sms },
  mounted(){
    this.$store.dispatch('loadMember', { 
      id: this.$route.params.id, 
      include: ['group', 'tags', 'roles', 'attended_at', 'messages'] 
    })
  },
  computed: {
    ...mapGetters(['member']),
  }
}
</script>

<style>

</style>
