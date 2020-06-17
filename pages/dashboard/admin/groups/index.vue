<template>
  <div class="container">
    <div>

    </div>
  </div>
</template>

<script>

export default {
  middleware: ['auth'],
  options: {
    auth: false
  },
  mounted() {
    if(!this.$auth.hasScope('admin')) {
      if (this.$auth.hasScope('leader')) this.$router.replace('dashboard')
      if (this.$auth.hasScope('member')) this.$router.replace('me')
      this.$router.replace('login')
    }
  }
}
</script>

<style>

</style>
