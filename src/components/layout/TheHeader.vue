<template>
  <header>
    <nav>
      <h1><router-link to="/">eery browsing</router-link></h1>
      <ul>
        <li><router-link to="/pagination">Pagination</router-link></li>
        <li>
          <router-link to="/infinite-scroll">Infinite Scroll</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: $nav-height;
  background-color: $primary;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin: 0;

      a {
        color: white;
        margin: 0;
        text-decoration: none;
      }

      a:hover,
      a:active {
        border-color: transparent;
      }
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        margin: 0 0.5rem;

        a {
          text-decoration: none;
          padding: 0.75rem 1.5rem;
          font: inherit;
          background-color: white;
          color: $primary;
          cursor: pointer;
          border-radius: 30px;
          margin-right: 0.5rem;
          display: inline-block;
        }

        a:active,
        a:hover,
        a.router-link-active {
          border: 1px solid $dark;
          background-color: $light;
          color: $dark;
        }
      }
    }
  }
}
</style>
