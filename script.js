var app = new Vue({
   el: '#app',
  data: {
    addedUser: '',
    addedTeam: '',
    addedDate: '',
    addedMiles: '',
    addedGoal: '',
    addedDuration: '',
    addedWeather: '',
    addedComment: '',
    posts: [],
  },
  computed: {
  },
  methods: {
    addPost: function() {
      if (!(this.posts))
      	Vue.set(app.posts, new Array);
      this.posts.push({
        user:this.addedUser,
        team:this.addedTeam,
        date:this.addedDate,
        miles:this.addedMiles,
        goal:this.addedGoal,
        time:this.addedDuration,
        weather:this.addedWeather,
        text:this.addedComment,
      });
      this.addedUser = '';
      this.addedTeam = '';
      this.addedDate = '';
      this.addedMiles = '';
      this.addedGoal = '';
      this.addedDuration = '';
      this.addedWeather = '';
      this.addedComment = '';
    },
  }
});
