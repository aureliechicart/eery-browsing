<template>
  <section class="films">
    <h1 class="films__heading">Pagination</h1>

    <div class="films__list">
      <article v-for="film of films.results" :key="film.id" class="article">
        <div class="article__heading">
          <h2 class="title">{{ film.title }}</h2>
          <div class="rating">{{ film.vote_average }} / 10</div>
        </div>

        <div class="article__detail">
          <img :src="img_prefix + film.poster_path" class="image" />
          <h4 class="overview">{{ film.overview }}</h4>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import films from "../../data/films.json";

export default {
  data() {
    return {
      films: films,
      img_prefix: "http://image.tmdb.org/t/p/w154/",
    };
  },
};
</script>

<style lang="scss" scoped>
.films {
  width: 80%;
  margin: 0 auto;

  &__heading {
    color: $dark;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .article {
      width: 40%;
      display: flex;
      flex-direction: column;
      background-color: whitesmoke;
      border-radius: 6px;
      margin: 1rem;
      padding: 0 2rem 2rem 2rem;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      transition: transform 0.5s ease-out;

      &:hover {
        transform: scale(1.1);
      }

      &__heading {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .title {
          color: $dark;
          font-size: 1.5rem;
          width: 70%;
        }

        .rating {
          color: $grey;
          font-weight: bold;
          font-size: 1.2rem;
          background-color: $dark;
          padding: 0.5rem 0.6rem;
          font-size: 1rem;
          border-radius: 20px;
          margin-top: 0.5rem;
        }
      }

      &__detail {
        display: flex;
        justify-content: centerspace-between;
        align-items: center;

        .image {
          max-width: 153px;
          height: auto;
        }

        .overview {
          font-size: 1rem;
          margin: 0 2rem 0 2rem;
        }
      }
    }
  }
}
</style>
