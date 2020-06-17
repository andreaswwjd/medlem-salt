<template>
  <div class="sms-group column" :class=" direction ">
    <p class="is-small">{{created_at}}</p>
    <div class="sms">
      {{decodeURI(message)}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['message', 'direction', 'delivered', 'contains_approval', 'needs_validation', 'validated', 'created_at', 'updated_at']
}
</script>

<style lang="scss">
.sms-group {
  display: block;
  max-width: 270px;
  clear: both;
  width: auto;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  overflow-wrap: break-word;
  &.to {
    // text-align: right;
    .sms {
      // float: right;
      margin: 0 0 auto 0;
      background: aliceblue;
      border-radius: 1rem 1rem 0 1rem;
    }
  } 
  &.from {
    // text-align: left;
    .sms {
      // float: left;
      margin: 0 0 auto 0;
      background: #f7f7f7;
      border-radius: 0 1rem 1rem 1rem;

    }
    
  }
}
</style>