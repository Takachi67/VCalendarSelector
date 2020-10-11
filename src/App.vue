<template>
  <div id="app">
    <div class="row">
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-3">
            <DatePicker month="0" year="2020"></DatePicker>
          </div>
          <div class="col-md-3">
            <DatePicker month="1" year="2020"></DatePicker>
          </div>
          <div class="col-md-3">
            <DatePicker month="2" year="2020"></DatePicker>
          </div>
          <div class="col-md-3">
            <DatePicker month="3" year="2020"></DatePicker>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <DatePicker month="4" year="2020"></DatePicker>
          </div>
          <div class="col-md-3">
            <DatePicker month="5" year="2020"></DatePicker>
          </div>
          <div class="col-md-3">
            <DatePicker month="6" year="2020"></DatePicker>
          </div>
          <div class="col-md-3">
            <DatePicker month="7" year="2020"></DatePicker>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <DatePicker month="8" year="2020"></DatePicker>
          </div>
          <div class="col-md-3">
            <DatePicker month="9" year="2020"></DatePicker>
          </div>
          <div class="col-md-3">
            <DatePicker month="10" year="2020"></DatePicker>
          </div>
          <div class="col-md-3">
            <DatePicker month="11" year="2020"></DatePicker>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div v-for="date in $store.state.dates">
          <span>{{ date.toLocaleDateString('fr-FR') }}</span><br/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from './components/DatePicker.vue'
import { store } from "@/main"
require('bootstrap-css-only')

export default {
  name: 'App',
  components: {
    DatePicker
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
