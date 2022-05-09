<template>
  <div class="about" v-bind:style="{'background-image' : 'url('+img+')'}">
    <div @click="this.$router.push('/')" id="return">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
            d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"/>
      </svg>
    </div>
    <div id="card_container">
      <div id="card">
        <div id="card_header">
          <img class="icon" :src="generateUrl(focused['weather'][0]['icon'])" alt="weather_icon">
          <span>{{ toFormat(focused['dt']) }}</span>
        </div>
        <div id="card_body">
          <div>
            <div>Jour - {{ Math.round(focused['temp']['day']) }}°C</div>
            <div>Nuit - {{ Math.round(focused['temp']['night']) }}°C</div>
            <div>Humidité - {{ Math.round(focused['humidity']) }}%</div>
          </div>
          <div>
            <div>Pression - {{ Math.round(focused['pressure']) }}hPa</div>
            <div>Vent - {{ Math.round(focused['wind_speed']) }}Km/h</div>
          </div>
        </div>
      </div>
    </div>
    <div id="list">
      <div @click="switchFocus(index)" class="preview" :key="index" v-for="(data,index) in forecast.daily">
        <img class="icon" :src="generateUrl(data['weather']['0']['icon'])" alt="weather_icon">
        <span class="day">{{ toFormat(data['dt']) }}</span>
        <span class="temp">{{ Math.round(data['temp']['day']) }}°C</span>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment"
import json from "@/assets/json/img.json"
export default {
  name: 'AboutView',
  computed: {
    img: function (){
      return require("@/assets/img/" + json[this.$store.getters.getImg])
    },
    forecast: function () {
      return this.$store.getters.getForecast
    },
    focused: function () {
      return this.$store.getters.getFocused
    },
    today: function () {
      return this.$store.getters.getToday
    }
  },
  methods: {
    toFormat(date) {
      return moment.unix(date).locale('fr').format('dddd D MMMM')
    },
    generateUrl(icon) {
      return `https://openweathermap.org/img/wn/${icon}@2x.png`
    },
    switchFocus(index) {
      if (this.forecast.daily[index].dt === this.focused.dt) {
        this.$store.commit('setFocused', this.today)
      } else {
        this.$store.commit('setFocused', this.forecast.daily[index])
        this.$store.commit('setImg', this.forecast.daily[index]['weather'][0]['icon'])
      }
    }
  }

}
</script>
<style scoped>
.about {
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background-size: cover;
}

#return {
  top: 20px;
  left: 20px;
  background-color: #124601;
  position: absolute;
  border-radius: 100%;
  cursor: pointer;
}

#return svg {
  display: flex;
  padding: 15px;
  width: 35px;
  fill: #ffffff;
}

#card_container {
  align-self: end;
}

#card {
  background-color: #124601;
  border-radius: 20px;
  color: #ffffff;
  font-weight: bolder;
  padding: 20px;
  margin: 40px;
}

#card_header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

#card_header span {
  grid-column-start: 2;
  grid-column-end: 4;
  justify-self: start;
  align-self: center;
  font-size: 25px;
  text-transform: capitalize;
}

#card_body {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  line-height: 2rem;
}

#list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 40px;;
}

.preview {
  min-width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #124601;
  color: #ffffff;
  border-radius: 20px;
}

.day {
  font-weight: bolder;
}

.temp {
  font-weight: bolder;
  font-size: 25px;
}
@media screen and (max-width: 768px){
    .preview{
      min-width: 300px;
    }
}

@media screen and (max-width: 640px) {
  .about {
    height: unset;
    flex-direction: column;
    justify-content: unset;
  }

  #return{
    position: sticky;
    align-self: start;
    border: 1px solid #ffffff;
    top: 10px;
    left: 10px;
    margin-bottom: 10px;
  }

  #return svg{
    width: 25px;
  }

  #card_container {
    align-self: unset;
    margin: auto;
  }

  #card {
    margin: 10px;
    max-width: 300px;
  }

  #list {
    margin: auto;
  }

  .preview{
    padding: 20px;
    max-width: 300px;
    min-width: unset;
    margin-bottom: 10px;
  }
}

@media  screen and (max-width: 375px) {
    .preview{
      padding: 10px;
    }
}

</style>