<template>
  <ul class="pagination">
    <li class="pagination__item">
      <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
        <VueFeather size="13" type="chevrons-left" />
      </button>
    </li>

    <li class="pagination__item">
      <button
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage">
        <VueFeather size="13" type="chevron-left" />
      </button>
    </li>

    <!-- Visible Buttons Start -->

    <li
      v-for="page in pages"
      :key="page.name"
      class="pagination__item"
      @click="onClickPage(page.name)"
      :disabled="page.isDisabled"
      :class="{ active: isPageActive(page.name) }">
      <button type="button" :disabled="page.isDisabled">
        {{ page.name }}
      </button>
    </li>

    <!-- Visible Buttons End -->

    <li class="pagination__item">
      <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
        <VueFeather size="13" type="chevron-right" />
      </button>
    </li>

    <li class="pagination__item">
      <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
        <VueFeather size="13" type="chevrons-right" />
      </button>
    </li>
  </ul>
</template>

<script>
import VueFeather from 'vue-feather'

export default {
  components: { VueFeather },
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    // represents the starting number of visible buttons
    startPage() {
      // When the current page is the first one, we show the user the current one and the next ones
      console.log('currentPage :', this.currentPage)
      if (this.currentPage === 1) {
        return 1
      }

      // When the current page is the last one, let’s show the last page and the previous ones
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons
      }

      // For anything in between we show the previous page and the next one(s)
      return this.currentPage - 1
    },
    // represents the ending number of visible buttons
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      )
    },
    // represents an array with a range of visible pages
    pages() {
      const range = []

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        })
      }
      console.log('range :', range)
      return range
    },
    // returns true if user is in first page
    // controls the disabled state of the first button
    isInFirstPage() {
      return this.currentPage === 1
    },
    // returns true if user is in last page
    // controls the disabled state of the last button
    isInLastPage() {
      return this.currentPage === this.totalPages
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1)
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1)
    },
    onClickPage(page) {
      this.$emit('pagechanged', page)
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1)
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages)
    },
    isPageActive(page) {
      return this.currentPage === page
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  margin: 0 auto;

  &__item {
    margin-right: 0.5rem;
    display: inline-block;

    button {
      border: none;
      padding: 0.5rem;
      color: $secondary;
      cursor: pointer;

      &:hover:not(.active) {
        background-color: $grey;
      }
    }

    .active {
      background-color: $primary;
      color: #ffffff;
    }
  }
}
</style>
