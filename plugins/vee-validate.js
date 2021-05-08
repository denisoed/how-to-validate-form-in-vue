import Vue from 'vue';
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  configure,
  localize
} from 'vee-validate';
import {
  required,
  email,
  confirmed
} from 'vee-validate/dist/rules';
import en from "vee-validate/dist/locale/en.json";
import ru from "vee-validate/dist/locale/ru.json";

extend('required', required);

extend('email', email);

extend('confirmed', {
  ...confirmed,
  message: 'Passwords Don`t Match.'
});

extend('phone', {
  validate: value => {
    if (!value) return true
    const regex = /^[0-9\s- +]*$/g
    return Boolean(value.match(regex))
  }
});

// Install English and Russian localizations.
localize({
  en: {
    messages: {
      ...en.messages,
      phone: 'The Phone field must contain only numbers and dashes.'
    }
  },
  ru: {
    messages: {
      ...ru.messages,
      phone: 'Поле Phone должно содержать только цифры и тире.'
    }
  }
});

configure({
  classes: {
    invalid: 'is-invalid'
  }
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
