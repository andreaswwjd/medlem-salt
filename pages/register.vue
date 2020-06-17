<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Registrera medlemsskap
      </h1>
      <h2 class="subtitle">
        Bli medlem i Salt.
      </h2>
    </div>
  </div>
</template>

<script>

export default {
  middleware: ['auth'],
  options: {
    auth: false
  },
  layout: 'public'
}
</script>

<style>

</style>
