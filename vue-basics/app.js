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
      x: 0,
      y:0,
      url: 'http://www.thenetninja.co.uk',
      books: [
        {title: 'Name of the Wind', author: 'Patrick Rothfuss', img: 'assets/name-of-the-wind.jpg', isFav: true},
        {title: 'The Way of Kings', author: 'Brandon Sanderson', img: 'assets/the-way-of-kings.jpg', isFav: false},
        {title: 'Hall of Smoke', author: 'HM Long', img: 'assets/hall-of-smoke.jpg', isFav: true}
      ],

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
    },
    // get event object as first parameter when dealing with eventhandlers
    handleEvent(e, data) {
      // event has many useful properties like if user held alt or ctrl
      console.log(e, e.type)
      if (data) {
        console.log(data)
      }
    },
    handleMousemove(e) {
      // offset = relative poition of mouse in containor
      this.x = e.offsetX
      this.y = e.offsetY
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    }
  },
  // computed data values
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  }
})

// attach app to HTML element, app controls everything in element
app.mount('#app')
