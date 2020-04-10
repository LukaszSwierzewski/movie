<template>
  <div>
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Your rating</div>
          <v-rating color="indigo" :value="starValue/2"></v-rating>
          <v-list-item-title class="headline mb-1"></v-list-item-title>
          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80">
          <v-icon large color="indigo">mdi-heart</v-icon>
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn class="btn--submit" outlined color="indigo" text>Rate movie</v-btn>
        <v-btn class="btn--cancel" color="indigo" outlined text>X</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    rating: {
      type: String,
      default: "5"
    }
  },
  computed: {
    starValue: {
      get() {
        let integer = parseInt(this.rating, 10);
        return integer;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.btn {
  &--submit {
    width: 75%;
  }
  &--cancel {
    width: 20%;
  }
}
</style>