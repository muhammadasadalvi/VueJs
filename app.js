const app = Vue.createApp({
    // data(){};
    data: () => {
        return {
            courseGoal: "Finish the Goal and learn Vue!",
            vueLink: "https://vuejs.org"
        }
    },
    methods: {
        outputGoal: () => {
            const number = Math.random();
            console.log(number, "number")
            return number > 0.5 ? "Master Vue!" : this.courseGoal = "Learn VueJs"
        }
    }
});
app.mount("#user-goal")