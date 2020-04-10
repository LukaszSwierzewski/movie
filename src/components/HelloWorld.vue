<template>
  <v-container>
    <div class="search">
      <input
        placeholder="wpisz szukany film"
        type="test"
        v-model="searchQuery"
        @keyup.enter="trigger"
      />
      <v-btn
        class="ma-2"
        outlined
        fab
        small
        color="indigo"
        ref="sendRequest"
        @click="getPost(searchQuery)"
      >
        Search
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </div>

    <v-card
      v-for="movie in movies"
      :key="movie.id"
      class="mx-auto"
      max-width="600"
    >
      <div v-if="movie.poster.length > 3">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="movie.poster"
        ></v-img>
      </div>
      <div v-if="movie.poster.length === 3">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://magnusoculus.com/wp-content/uploads/2016/09/placeholder-350x300.png"
        ></v-img>
      </div>
      <v-card-title>{{ movie.title }} ({{ movie.year }})</v-card-title>

      <v-card-text class="text--primary">
        <p>See more</p>
      </v-card-text>

      <v-card-actions>
        <router-link v-bind:to="{ name: 'Home', params: { id: movie.id } }">
          <v-btn class="ma-2" outlined color="indigo">View detail</v-btn>
        </router-link>
        <!-- <v-btn color="orange" text>Explore</v-btn> -->
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import PostService from "../../services/moviedb";
export default {
  data() {
    return {
      movies: [],
      searchQuery: "",
    };
  },
  methods: {
    async getPost(value) {
      this.movies = [];
      try {
        const response = await PostService.getMovies(value);
        let data = response.data.Search;
        data.forEach((e) => {
          this.movies.push({
            title: e.Title,
            year: e.Year,
            poster: e.Poster,
            id: e.imdbID,
            rating: e.imdbRating,
          });
        });
      } catch (err) {
        console.log(err);
      }
    },
    trigger() {
      this.$refs.sendRequest.click();
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
input {
  background-color: #eee;
  border: 1px solid #e3e3e3;
  width: 300px;
  padding: 10px;
  border-radius: 10px;
}
.search {
  text-align: center;
  margin-bottom: 10px;
}

button {
  margin-left: 20px;
  padding: 10px 40px;
  border-radius: 10px;
}
.v-card__actions a {
  text-decoration: none;
}
</style>
