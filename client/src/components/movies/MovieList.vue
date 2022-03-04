<template>
  <div class="films__list">
    <article v-for="film of films.results" :key="film.id" class="article">
      <div class="article__heading">
        <h2 class="title">{{ film.title }}</h2>
        <div class="rating">{{ film.vote_average }} / 10</div>
      </div>

      <div class="article__detail">
        <img :src="img_prefix + film.poster_path" class="image" />
        <h4 class="overview">
          {{ film.overview ? film.overview : 'Pas de résumé disponible' }}
        </h4>
      </div>
    </article>
  </div>
</template>

<script>
import films_one from '../../data/films_1.json'
import films_two from '../../data/films_2.json'
import films_three from '../../data/films_3.json'
import films_four from '../../data/films_4.json'
import films_five from '../../data/films_5.json'

export default {
  data() {
    return {
      currentPage: 1,
      films: films_one,
      films_one: films_one,
      films_two: films_two,
      films_three: films_three,
      films_four: films_four,
      films_five: films_five,
      img_prefix: 'http://image.tmdb.org/t/p/w154/',
    }
  },
}
</script>

<style lang="scss" scoped>
.films__list {
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

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
    transition: box-shadow 0.5s ease-out;

    &:hover {
      box-shadow: rgba(50, 50, 93, 1) 0px 13px 27px -5px,
        rgba(0, 0, 0, 1) 0px 8px 16px -8px;
    }

    &__heading {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .title {
        color: $secondary;
        font-size: 1.5rem;
        width: 80%;
      }

      .rating {
        color: $grey;
        font-weight: bold;
        font-size: 1.2rem;
        background-color: $secondary;
        padding: 0.5rem 0.6rem;
        font-size: 1rem;
        border-radius: 20px;
        margin-top: 0.5rem;
      }
    }

    &__detail {
      display: flex;
      justify-content: space-between;
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
</style>
