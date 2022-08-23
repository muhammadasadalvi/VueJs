<template>
  <li>
    <h2>{{ name }} - {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">Toggle Friend</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: (value) => {
      //   console.log(value, "value");
      //   return value === "0" || value === "1";
      // },
    },
  },
  emits: ["toggle-favorite", "delete"],
  //^ you can specify both of event emitter
  // emits: {
  //   "toggle-favorite": (id) => {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.log("id is missing");
  //       false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
      console.log(this);
    },
    toggleFavorite() {
      console.log(this.id, "youtube");
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>