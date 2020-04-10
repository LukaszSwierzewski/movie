<template>
  <div>
    <div class="home"></div>
    <div class="container my--content elevation-4">
      <div>
        <h1>{{ movie.Title }}</h1>
        <p class="movie--smallinfo">
          {{ movie.Year }}
          <span>{{ movie.Runtime }}</span>
        </p>
      </div>
      <div class="grid">
        <div v-if="movie.Poster.length > 3">
          <img class="big--img" :src="movie.Poster" />
        </div>
        <div v-else>
          <img
            class="big--img"
            src="https://magnusoculus.com/wp-content/uploads/2016/09/placeholder-350x300.png"
          />
        </div>
        <div>
          <p class="rating">Rating {{ movie.imdbRating / 2 }}/5</p>
          <p>{{ movie.Plot }}</p>
          <div class="movie--text">
            <span>Genre:</span>
            <p>{{ movie.Genre }}</p>
            <span>Country:</span>
            <p>{{ movie.Country }}</p>
            <span>Released:</span>
            <p>{{ movie.Released }}</p>
          </div>
        </div>
        <div>
          <rating-card :rating="movie.imdbRating"></rating-card>
        </div>
      </div>
      <section id="actors">
        <h1 class="heading">OBSADA FILMU</h1>
        <div class="actor--grid">
          <div v-for="actor in actors" :key="actor">
            <img
              src="https://www.ctvalleybrewing.com/wp-content/uploads/2017/04/avatar-placeholder.png"
              alt
            />
            <p>{{ actor }}</p>
          </div>
        </div>
      </section>
      <section id="review">
        <div v-for="index in 2" :key="index">
          <h1 class="heading">REVIEW</h1>
          <div class="review">
            <img class="review--img" :src="review.avatar" alt />
            <div class="review--author">
              <h3>{{ review.title }}</h3>
              <p>
                <a> {{ review.author }}</a> lorem ipsum
              </p>
            </div>
            <p class="review--short">{{ review.short }}</p>
            <v-btn class="mb-2">Read more</v-btn>
            <hr />
          </div>
        </div>
      </section>
      <section id="forum">
        <h1 class="heading">FORUM</h1>
      </section>
    </div>
    <!-- //container above -->
  </div>
</template>

<script>
import PostService from "../../services/moviedb";
import RatingCard from "../components/Rating";
export default {
  components: {
    RatingCard
  },
  name: "Home",
  data() {
    return {
      movie: "",
      actors: [],
      review: {
        title: "Lorem ipsum?",
        author: "someone_123",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        short:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
      }
    };
  },
  async beforeCreate() {
    let response = await PostService.getMovie(this.$route.params.id);
    const data = response.data;
    this.actors = response.data.Actors.split(", ");
    return (this.movie = data);
  }
};
</script>
<style lang="scss" scoped>
.grid {
  display: grid;
  margin-top: 2vh;
  grid-gap: 10px;
  grid-template-columns: 1fr 2fr 2fr;
}

.big--img {
  height: 17.8125rem; /*! critical:end */
  width: 12.5rem;
}
.movie--text {
  display: grid;
  grid-template-columns: 4.4rem 1fr;
  grid-row-gap: 0.5rem;
  grid-column-gap: 0.4rem;
  align-self: start;
  font-size: 14px;
  line-height: 1.43;
}
.movie--text span {
  color: #888;
}
.movie--text p {
  color: #333;
  font-weight: bold;
}
.container {
  max-width: 1080px;
}
.home {
  background: url("https://i.ibb.co/vXqDmnh/background.jpg") no-repeat center
    center/cover;
  background-size: cover;
  height: 60vh;
  position: relative;
}
.container {
  background: white;
}
.my--content {
  position: absolute;
  top: 100px;
  left: 20%;
}
.movie--smallinfo {
  color: #888;
  span {
    margin-left: 90px;
  }
}
.actor--grid {
  margin-top: 5vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  div img {
    max-width: 150px;
    min-width: 100px;
  }
}
.heading {
  margin: 2rem 0px;
  border-left: 6px solid #3f51b5;
  padding-left: 5px;
}
.review--img {
  width: 60px;
  border-radius: 50%;
  float: left;
}
.review {
  max-width: 600px;
  &--author {
    margin-left: 76px;
  }
  &--short {
    margin-top: 3vh;
    color: #888;
    font-size: 16px;
    line-height: 1.5;
  }
}
hr {
  color: #888;
  opacity: 0.4;
}
#review hr:last-of-type {
  color: red;
}
</style>
