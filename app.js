const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
  beforeCreate() {
    console.log("before Create()");
  },
  created() {
    console.log("created()", this.currentUserInput);
  },
  beforeMount() {
    console.log("before Mount()", this.setText);
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("before Update()");
  },
  updated() {
    console.log("update()");
  },
  beforeUnmount() {
    console.log("before unmount");
  },
  unmounted() {
    console.log("unmounted");
  }
});

setTimeout(() => {
  app.unmount();
}, 3000)
app.mount('#app');

//^ Vue Keep the data  property in gloabal object and keep track of it, and used the proxy concept of javascript