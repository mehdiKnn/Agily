<template>
  <div class="home">
    <div class="container">
      <div id="title">
        <span>the forecast</span>
        <span> weather app</span>
      </div>
      <div>
        <label for="search"></label>
        <input v-model="search" type="text" id="search" placeholder="Search">
        <svg @click="getEvents(search)" id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
          <path
              d="M 9 3 C 5.6759952 3 3 5.6759952 3 9 C 3 12.324005 5.6759952 15 9 15 C 10.481205 15 11.830584 14.465318 12.875 13.582031 L 18.292969 19 L 19 18.292969 L 13.582031 12.875 C 14.465318 11.830584 15 10.481205 15 9 C 15 5.6759952 12.324005 3 9 3 z M 9 4 C 11.770005 4 14 6.2299952 14 9 C 14 11.770005 11.770005 14 9 14 C 6.2299952 14 4 11.770005 4 9 C 4 6.2299952 6.2299952 4 9 4 z "
              class="ColorScheme-Text"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data(){
    return{
      search : null
    }
  },
  methods:{
    getEvents(search){
      this.$store.dispatch('getWeather', search)
    }
  }
}
</script>
<style scoped>
.container {
  min-width: 500px;
}

.container div:nth-child(2) {
  position: relative;
}

.home {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #124601;
}

.home #title {
  display: flex;
  flex-direction: column;
  line-height: 4rem;
  padding-bottom: 40px;
}

.home #title span {
  font-size: 3rem;
  font-weight: bolder;
  text-transform: capitalize;
}

.home #title span:first-child {
  color: #40CC6D;
}

.home #title span:nth-child(2) {
  color: #C0E295;
}

#search {
  border: none;
  padding: 15px;
  font-size: 15px;
  border-radius: 15px;
  width: calc(100% - 30px);
  font-weight: bold;
}

#search::placeholder {
  color: #124601;
}

#icon {
  padding: 10px 10px;
  width: 35px;
  position: absolute;
  right: 0;
  Top: 50%;
  Transform: translatey(-50%);
  fill: #124601;
  cursor: pointer;
}

@media screen and (max-width: 640px) {
  .container {
    min-width: 275px;
  }

  .home #title {
    line-height: 2rem;
  }

  .home #title span {
    font-size: 2rem;
  }

  #search {
    padding: 12px;
    width: calc(100% - 24px);
    font-size: 12px;
  }

  #icon {
    width: 25px;
  }
}
</style>
