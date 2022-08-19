const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: ''
    };
  },
  methods: {
    addCounter(num) {
      this.counter = this.counter + num;
    },
    subtractCounter(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    confirmInput() {
      console.log(this.name);
      this.confirmName = this.name;
    },
    submitForm() {
      console.log("submitted");
      alert('Submited!');
    },
    resetInput() {
      this.name = "";
    }
  }
});

app.mount('#events');
