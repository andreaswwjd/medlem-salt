<template>
  <div class="container">
    <h1 class="title">
      Startsida
    </h1>
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
