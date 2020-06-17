<template>
  <div class="container">
    <div>
      <h1 class="title">
        Salt-grupper
      </h1>
      <div class="form-group">
        <label class="form-label" for="">Användarnamn</label>
        <input class="form-input" type="text" v-model="username">
        <label class="form-label" for="">Lösenord</label>
        <input class="form-input" type="password" v-model="password">
        <div class="spacer"></div>
        <button class="btn btn-sm btn-primary" :class="{loading}" @click="login">Logga in</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  middleware: ["auth"],
  options: {
    auth: false
  },
  layout: 'public',
  data() {
    return {
      username: "",
      password: "",
      loading: false
    }
  },
  methods: {
    async login(){
      this.loading = true
      this.$auth.loginWith('local', {
        data: {
          username: this.username,
          password: this.password
        }
      })
      .then(async (t) => {
        this.loading = false
        this.$router.push('dashboard')
        // this.$notify({
        //   text: 'Du är inloggad!',
        //   type: 'success'
        // })
      })
      .catch((e)=>{
        this.loading = false
        // this.$notify({
        //   text: 'Fel användarnamn eller lösenord.',
        //   type: 'warn'
        // })
      })
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  overflow: hidden;
  width: 100%;

  background-image: url(/blob.svg);
  background-position: center;
  background-repeat: no-repeat;
}

.title {
  text-align: center;
}

.blob {
  position: absolute;
  z-index: -1;
}

.blob path {
  fill: #AACAD2;
  
}
</style>
