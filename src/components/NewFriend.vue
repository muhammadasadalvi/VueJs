<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="text" v-model="enteredEmail" />
    </div>
    <div>
      <label for="phone">Phone Number</label>
      <input type="text" v-model="enteredPhone" />
    </div>
    <div>
      <button>Add Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredEmail: "",
      enteredPhone: "",
    };
  },
  methods: {
    submitData() {
      console.log(this.enteredName, this.enteredPhone, this.enteredEmail);
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredEmail,
        this.enteredPhone
      );
    },
  },
};
</script>
<style>
</style>