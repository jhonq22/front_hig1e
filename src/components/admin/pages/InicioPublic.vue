<script>


export default {
  name: 'InicioPublic',
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

<body>

  <div class="overlay"></div>
  <div class="content">
    <ul class="nav signup">
 
   
    </ul>
    <div class="middle">
      <h1 style="font-size: 42px;">¡Bienvenido al portal de Gestion de Documentos del Instituto Nacional de Higiene Rafael Rangel!</h1>
  

      <router-link to="/admin/login" class="btn btn__primary middle" style="margin-top: 200px;">
  <p>Inicio Sesión</p>
</router-link>


    </div>

  </div>

</body>

</template>



<style scoped>
@import 'https://fonts.googleapis.com/css?family=Lato:300,400,700';
@import 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css';
* {
  margin: 0;
  padding: 0;
}
.btn {
  width: 15rem;
  height: 4rem;
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2), -0.2rem -0.2rem 0.5rem var(--white);
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease;
}
.btn__primary {
  grid-column: 1/2;
  grid-row: 4/5;
  background: var(--primary);
  box-shadow: inset 0.2rem 0.2rem 1rem var(--primary-light), inset -0.2rem -0.2rem 1rem var(--primary-dark), 0.3rem 0.3rem 0.6rem var(--greyLight-2), -0.2rem -0.2rem 0.5rem var(--white);
  color: var(--greyLight-1);
}
.btn__primary:hover {
  color: var(--white);
}
.btn__primary:active {
  box-shadow: inset 0.2rem 0.2rem 1rem var(--primary-dark), inset -0.2rem -0.2rem 1rem var(--primary-light);
}
.btn__secondary {
  grid-column: 1/2;
  grid-row: 5/6;
  color: var(--greyDark);
}
.btn__secondary:hover {
  color: var(--primary);
}
.btn__secondary:active {
  box-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2), inset -0.2rem -0.2rem 0.5rem var(--white);
}
.btn p {
  font-size: 1.6rem;
}

ul > li {
  transition: 200ms all ease-in-out;
}
ul > li:hover {
  color: #ccc1ff;
  cursor: pointer;
}

body {
  height: 100vh;
  background:url('/inicio.jpeg')center center no-repeat;
  background-size: cover;
  font-family: "Lato", "Verdana", "Helvetica Neue", "Helvetica", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  font-smoothing: antialiased;
}

.overlay {
  min-height: 600px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #085af3;
  opacity: 0.8;
}

.content {
  width: 100%;
  height: 100%;
  min-height: 600px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  text-align: center;
}

.nav {
  list-style-type: none;
}
.nav li {
  display: inline-block;
  margin: 50px 15px;
  color: #f6f4ff;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.navigate {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 100px;
}
.navigate li {
  margin: 50px;
}

.middle {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f6f4ff;
  letter-spacing: 1px;
  font-size: 30px;
}
.middle .circleLarge, .middle .circleSmall, .middle play {
  margin: 20px auto 0;
  background: #fff;
  border-radius: 50%;
}
.middle .circleLarge {
  animation: pulse1 2s infinite;
}
.middle .circleSmall {
  animation: pulse2 2s infinite;
}
.middle .circleSmall:hover {
  cursor: pointer;
}
.middle .circleLarge {
  height: 70px;
  width: 70px;
  opacity: 0.1;
}
.middle .circleSmall {
  height: 50px;
  width: 50px;
  opacity: 0.18;
  margin-top: -60px;
}
.middle .play {
  margin-top: -44px;
  margin-left: 2px;
}

@keyframes pulse1 {
  50% {
    opacity: 0.15;
  }
}
@keyframes pulse2 {
  10% {
    opacity: 0.23;
  }
}



</style>




