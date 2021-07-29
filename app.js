// create app
// add object for root compnent (set up data, functions to react to events OR a template)
const app = Vue.createApp({
  // template: '<h2>I am the template</h2>'

  // must return object in functions
  // data type does not matter
  // cannot use variables outside of mounted element scope
  data() {
    return {
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
      showBooks: true,
    }
  },
  // functions used in HTML file
  // must use this to access variables
  methods: {
    changeTitle(title) {
      // this.title = 'Words of Radiance'
      this.title = title
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    }
  }
})

// attach app to HTML element, app controls everything in element
app.mount('#app')
