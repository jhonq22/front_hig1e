<script>


export default {
  name: 'DocumentosPublic',
  data() {
    return {
      usuario: '',
      password: '',
    };
  },
  methods: {
    
    
    Inicio() {
      // Redirigir al formulario de actualización con el ID del usuario
      this.$router.push(`/admin/inicio`);
    },
  },
  };
</script>

<template>

<div id="main-container" class="main-container nav-effect-1">
  <div class="container">
    <div class="row">
      <!-- Header Content -->
      <header class="col-md-12">
        <!-- Aquí puedes agregar el contenido del encabezado si es necesario -->
      </header>
    </div>

    <!-- Main Section -->
    <div class="row">
      <div class="col-md-12">
        <div class="page-container">
          <div class="page-title category-title">
            <!-- <h1>Book Viewer</h1> -->
          </div>
        </div>

        <section id="book_list">
          <div class="grid-shuffle">
            <div class="row">
              <!-- Agregar más libros aquí, cada uno con col-md-4 -->
              <div class="col-md-4 book-item" data-groups='["fantasy","young"]' data-date-created='1998' data-title='Harry Potter and the Chamber of Secrets' data-color='#800020'>
                <div class="bk-img">
                  <div class="bk-wrapper">
                    <div class="bk-book bk-bookdefault">
                      <div class="bk-front">
                        <div class="bk-cover" style="background-image: url('http://interactivejoe.com/book-viewer/assets/images/bk_14-small.jpg')"></div>
                      </div>
                      <div class="bk-back"></div>
                      <div class="bk-left"></div>
                    </div>
                  </div>
                </div>
                <div class="item-details">
                  <h3 class="book-item_title">Harry Potter and the Chamber of Secrets</h3>
                  <p class="author">by J.K. Rowling &bull; 1998</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus nisi, eget pulvinar in, molestie et arcu.</p>
                  <a href="#" class="btn btn-primary">Details</a>
                </div>
              </div>
              <!-- Agregar más libros aquí, cada uno con col-md-4 -->

                 <!-- Agregar más libros aquí, cada uno con col-md-4 -->
                 <div class="col-md-4 book-item" data-groups='["fantasy","young"]' data-date-created='1998' data-title='Harry Potter and the Chamber of Secrets' data-color='#800020'>
                <div class="bk-img">
                  <div class="bk-wrapper">
                    <div class="bk-book bk-bookdefault">
                      <div class="bk-front">
                        <div class="bk-cover" style="background-image: url('http://interactivejoe.com/book-viewer/assets/images/bk_14-small.jpg')"></div>
                      </div>
                      <div class="bk-back"></div>
                      <div class="bk-left"></div>
                    </div>
                  </div>
                </div>
                <div class="item-details">
                  <h3 class="book-item_title">Harry Potter and the Chamber of Secrets</h3>
                  <p class="author">by J.K. Rowling &bull; 1998</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus nisi, eget pulvinar in, molestie et arcu.</p>
                  <a href="#" class="btn btn-primary">Details</a>
                </div>
              </div>
              <!-- Agregar más libros aquí, cada uno con col-md-4 -->

            </div>
          </div>
        </section>
      </div>
    </div>
  </div>

  <div class="main-overlay">
    <div class="overlay-full"></div>
  </div>
</div>
<!-- /main-container -->




</template>


<style scoped>


@charset "UTF-8";



h2,
h3 {
  margin-top: 6px;
  margin-bottom: 6px;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -1px;
  color: #313131;
}

h2 {
  font-size: 28px;
}

h3 {
  font-size: 24px;
}

h4 {
  margin-bottom: 12px;
  font-size: 22px;
  line-height: 40px;
  color: rgba(49, 49, 49, 0.7);
}

p:not(.author) {
  font-size: 15px;
  font-weight: 300;
  line-height: 1.4;
}

p.author {
  margin-bottom: 10px;
  letter-spacing: -1px;
  font-weight: 400;
  color: rgba(49, 49, 49, 0.5);
}





@-webkit-keyframes anim-1 {
  50% {
    opacity: 0;
    transform: translate3d(1em, 0, 0);
  }
  51% {
    opacity: 0;
    transform: translate3d(-1em, -40%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, -40%, 0);
  }
}
@keyframes anim-1 {
  50% {
    opacity: 0;
    bottom: 24px;
    transform: translate3d(5em, 0, 0);
  }
  51% {
    opacity: 0;
    bottom: 24px;
    transform: translate3d(-5em, -40%, 0);
  }
  100% {
    opacity: 1;
    bottom: 24px;
    transform: translate3d(0, -40%, 0);
  }
}
/*
 *  Menu
*/
/*
 *  Off Canvas Menu
*/








/*
 *  book List
*/
.toolbar {
  margin-bottom: 30px;
  border-bottom: 1px solid #d2d6d5;
}
.toolbar select {
  margin-bottom: 7px;
  color: #313131;
  font-size: 14px;
  border: none;
  background-color: transparent;
}
.toolbar .filter-options {
  line-height: 40px;
}
.toolbar a.filter-item {
  margin-right: 16px;
  padding-bottom: 18px;
  font-size: 14px;
  color: #313131;
  border-bottom: 0px solid transparent;
  transition: all 250ms ease-out;
}
.toolbar a.filter-item:last-child {
  margin-right: 0;
}
.toolbar a.filter-item.active {
  padding-bottom: 15px;
  color: #219e9a;
  font-weight: bold;
  border-bottom: 3px solid #219e9a;
}

#grid {
  margin-bottom: 60px;
}

.book-item {
  margin: 15px 0;
  padding: 15px;
  list-style-type: none;
}
.book-item:after {
  content: "";
  position: absolute;
  top: 0;
  right: 15px;
  width: calc(100% - 105px);
  height: 100%;
  border-radius: 3px;
  box-shadow: 0 0 0 0 transparent;
  background-color: rgba(255, 255, 255, 0);
  z-index: -1;
  transition: all 250ms ease-out;
}
.book-item:hover:after {
  box-shadow: 0px 1px 1px 1px rgba(210, 214, 213, 0.5);
  background-color: #fff;
}
.book-item:hover .item-img img {
  box-shadow: 0px 0px 10px 0px rgba(49, 49, 49, 0.25);
}
.book-item:hover a.button {
  background-color: #219e9a;
}
.book-item:hover .bk-bookdefault {
  transform: rotate3d(0, 1, 0, 25deg);
}
.book-item:hover .bk-back {
  opacity: 1;
}
.book-item .item-img {
  display: inline-block;
  float: left;
  padding-right: 30px;
}
.book-item .item-img img {
  box-shadow: 0 0 0 0 transparent;
  transition: all 250ms ease-out;
}
.book-item .item-details {
  padding-right: 30px;
}
.book-item h3 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.book-item p:not(.author) {
  display: block;
  display: -webkit-box;
  height: 63px;
  /* Fallback for non-webkit */
  font-size: 15px;
  line-height: 1.4;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/*
 *  Book Rotate
*/
.bk-img {
  position: relative;
  display: inline-block;
  float: left;
  padding-right: 30px;
  list-style: none;
  /* Individual style & artwork */
}
.bk-img .bk-wrapper {
  position: relative;
  width: 150px;
  height: 215px;
  float: left;
  z-index: 1;
  perspective: 1400px;
}
.bk-img .bk-wrapper:last-child {
  margin-right: 0;
}
.bk-img .bk-book {
  position: absolute;
  width: 100%;
  height: 215px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}
.bk-img .bk-book > div,
.bk-img .bk-front > div {
  display: block;
  position: absolute;
}
.bk-img .bk-front {
  transform-style: preserve-3d;
  transform-origin: 0% 50%;
  transition: transform 0.5s;
  transform: translate3d(0, 0, 20px);
  z-index: 10;
}
.bk-img .bk-front > div {
  z-index: 1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  border-radius: 0 3px 3px 0;
  box-shadow: inset 4px 0 10px rgba(0, 0, 0, 0.1);
}
.bk-img .bk-front:after {
  content: "";
  position: absolute;
  top: 1px;
  bottom: 1px;
  left: -1px;
  width: 1px;
}
.bk-img .bk-front,
.bk-img .bk-back,
.bk-img .bk-front > div {
  width: 150px;
  height: 215px;
}
.bk-img .bk-left,
.bk-img .bk-right {
  width: 40px;
  left: -20px;
}
.bk-img .bk-back {
  transform: rotate3d(0, 1, 0, -180deg) translate3d(0, 0, 20px);
  box-shadow: 5px 7px 15px rgba(0, 0, 0, 0.3);
  border-radius: 3px 0 0 3px;
  opacity: 0;
  transition: opacity 250ms ease-out;
}
.bk-img .bk-back:after {
  content: "";
  position: absolute;
  top: 0;
  left: 10px;
  bottom: 0;
  width: 3px;
  background: rgba(0, 0, 0, 0.06);
  box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);
}
.bk-img .bk-left {
  height: 215px;
  transform: rotate3d(0, 1, 0, -90deg);
}
.bk-img .bk-left h2 {
  width: 215px;
  height: 40px;
  transform-origin: 0 0;
  transform: rotate(90deg) translateY(-40px);
}
.bk-img .bk-cover {
  /*background-image: url(../images/1.png);*/
  background-repeat: no-repeat;
  background-position: 10px 40px;
}
.bk-img .bk-cover:after {
  content: "";
  position: absolute;
  top: 0;
  left: 10px;
  bottom: 0;
  width: 3px;
  background: rgba(0, 0, 0, 0.06);
  box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);
}
.bk-img .bk-cover {
  background-repeat: no-repeat;
  background-position: top left !important;
}
.bk-img .bk-front > div,
.bk-img .bk-left {
  background-color: #219e9a;
}

/*
 *  Lightbox
*/










</style>



