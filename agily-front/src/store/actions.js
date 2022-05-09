import axios from "axios";
import router from "@/router";

export default {
    getWeather({commit}, search) {
        axios.get('http://localhost:8080/weather', {
            params: {
                search: search
            }
        })
            .then((response) => {
                commit('setFocused', response.data.daily[0])
                commit('setToday', response.data.daily[0])
                commit('setForecast', response.data)
                commit('setImg', response.data.daily[0]['weather'][0]['icon'])
                router.push('/weather')
            })
        //TODO: Gestion des erreurs
    },
}