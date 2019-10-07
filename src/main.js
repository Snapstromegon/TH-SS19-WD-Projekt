import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', { scope: '/' }).then(function(reg) {
    // Registrierung erfolgreich
    console.log('Registrierung erfolgreich. Scope ist ' + reg.scope);
  }).catch(function(error) {
    // Registrierung fehlgeschlagen
    console.log('Registrierung fehlgeschlagen mit ' + error);
  });
};
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  e.prompt();
});