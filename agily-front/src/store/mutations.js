export default {
    setForecast(state, forecast) {
        forecast.daily.splice(0,1)
        state.forecast = forecast
    },
    setFocused(state, focused){
        state.focused = focused
    },
    setToday(state, focused){
        state.today = focused
    },
    setImg(state, img){
        state.img = img
    }
}