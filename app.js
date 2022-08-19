const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: ''
    };
  },
  /* Computer properties not evaluated when dependency changed,
   Computed Properties cached
   usually used to display something to screen */
  computed: {
    fullName() {
      return this.name && this.name + ' ' + "Alvi" || ""
    }
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
