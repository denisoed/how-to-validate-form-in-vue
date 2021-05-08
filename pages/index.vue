<template>
  <div class="container">
    <Logo />

    <ValidationObserver v-slot="{ invalid }" class="form">
      <h1>{{ $t('title') }}</h1>

      <button
        class="switch-local"
        @click="switchLocale"
      >
        Switch Locale
      </button>
      
      <!-- Name -->
      <ValidationProvider name="Username" rules="required" v-slot="{ errors }">
        <input v-model="name" type="text" placeholder="Name">
        <span class="error">{{ errors[0] }}</span>
      </ValidationProvider>

      <!-- Email -->
      <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
        <input v-model="email" type="email" placeholder="Email">
        <span class="error">{{ errors[0] }}</span>
      </ValidationProvider>

      <!-- Phone -->
      <ValidationProvider name="Phone" rules="required|phone" v-slot="{ errors }">
        <input v-model="phone" type="text" placeholder="Phone">
        <span class="error">{{ errors[0] }}</span>
      </ValidationProvider>

      <!-- Password -->
      <ValidationProvider name="Password" vid="confirm" rules="required" v-slot="{ errors }">
        <input v-model="password" type="password" placeholder="Password">
        <span class="error">{{ errors[0] }}</span>
      </ValidationProvider>

      <!-- Confirm Password -->
      <ValidationProvider name="Confirm password" rules="required|confirmed:confirm" v-slot="{ errors }">
        <input v-model="confirmPassword" type="password" placeholder="Confirm password">
        <span class="error">{{ errors[0] }}</span>
      </ValidationProvider>

      <button>Submit</button>
    </ValidationObserver>
  </div>
</template>

<script>
import { localize } from 'vee-validate';

export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      locale: 'en'
    }
  },
  methods: {
    switchLocale() {
      this.locale = this.locale === 'en' ? 'ru' : 'en';
      // switch the locale.
      localize(this.locale);
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.switch-local {
  max-width: 120px;
  position: absolute;
  right: 0;
  top: -25px;
}

.form {
  width: 400px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
}

.form h1 {
  margin-bottom: 20px;
}

.form input {
  width: 400px;
  padding: 8px 12px;
  margin: 5px 0;
}

.form button {
  width: 400px;
  padding: 12px;
  margin-top: 20px;
}

.form span {
  width: 400px;
  display: block;
  text-align: left;
}

.form .error {
  color: brown;
  margin-bottom: 5px;
}
</style>
