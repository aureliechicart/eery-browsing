<template>
  <section class="infinite">
    <h1 class="infinite__heading">Infinite Scroll</h1>

    <div class="infinite__list">
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
    <!-- when the intersect event is triggered, we load the next round of films -->
    <IntersectionObserver @intersect="loadFilms(this.page)" />
    <div v-if="endOfList" class="end-message">Fin de la liste</div>
  </section>
</template>


<script>
import films_1 from '../../data/films_1.json'
import films_2 from '../../data/films_2.json'
import films_3 from '../../data/films_3.json'
import films_4 from '../../data/films_4.json'
import films_5 from '../../data/films_5.json'

import IntersectionObserver from '../../components/infinite/IntersectionObserver.vue'

export default {
  components: {
    IntersectionObserver,
  },
  data() {
    return {
      films_list: [
        { id: 0, films: films_1 },
        { id: 1, films: films_2 },
        { id: 2, films: films_3 },
        { id: 3, films: films_4 },
        { id: 4, films: films_5 },
      ],
      films: { results: [] },
      page: 0,
      endOfList: false,
      img_prefix: 'http://image.tmdb.org/t/p/w154/',
    }
  },
  methods: {
    loadFilms(page) {
      if (!this.films_list[page]) {
        // if there is no more movies to load, we display a message and we exit the function
        this.endOfList = true
        return
      }
      const newFilms = this.films_list[page].films.results
      this.films.results.push(...newFilms)
      this.page++
    },
  },
}
</script>

<style lang="scss" scoped>
.infinite {
  margin: 0 auto;
  background: linear-gradient($grey, $secondary);

  &__heading {
    color: $secondary;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
    font-size: 2.5rem;
  }

  &__list {
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

  .end-message {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: $light-sec;
    padding: 1.5rem 0;
  }
}
</style>