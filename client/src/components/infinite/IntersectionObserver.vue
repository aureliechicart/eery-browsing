/** Credit:
https://www.netguru.com/blog/infinite-scroll-with-vue.js-and-intersection-observer
Here we create a trigger component for the infinite scrolling. This component
will be rendered below the last movie on the list. When it becomes visible to
the user, it will trigger the request to load more movies.
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API The
Intersection Observer API allows you to configure a callback that is called when
a target element intersects either the device's viewport or a specified element.
That specified element is called the root element or root for the purposes of
the Intersection Observer API. */

<template>
  <div class="observer" ref="observer" />
</template>

<script>
export default {
  props: {
    // options to configure our Intersection Observer
    options: {
      type: Object,
      default: () => {
        return {
          root: null, // defaults to the browser viewport if not specified or if null
          rootMargin: "0px",
          threshold: "0.5", // 0 means as soon as even one pixel of the target is visible, the callback will be run
        };
      },
    },
  },
  data() {
    return {
      // setting initial value of observer to null - it will be changed upon the observer creation (see mounted() below)
      observer: null,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      // this function is fired when the observed element passes the specified threshold and the options object that carries our observer options
      this.handleIntersect(entries[0]);
    }, this.options);

    // after creating the Intersection Observer, we attach it to our component using the observe method
    this.observer.observe(this.$refs.observer);
  },
  // we must stop watching for the component intersection before it gets destroyed
  beforeUnmount() {
    this.observer.disconnect();
  },
  methods: {
    // we emit an 'intersect' event when certain conditions are met. Specifically here, it is fired when Intersection Observer detects that the observed element enters the viewport
    handleIntersect(entry) {
      if (entry.isIntersecting) {
        this.$emit("intersect");
      }
    },
  },
};
</script>
