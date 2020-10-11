<template>
  <div class="hello">
    <vc-date-picker
      mode="multiple"
      v-model="$store.state.dates"
      is-inline
      ref="datepicker"
      :from-date="new Date(year, month, 1)"
    />
  </div>
</template>

<script>
import { store } from "@/main";

export default {
  name: 'DatePicker',
  props: {
    year: String,
    month: String
  },
  data() {
    return {
      dates: []
    }
  },
  methods: {
    selectMultipleDays(elements) {
      let hasToSelectAll = true
      let clickedElements = []
      Array.prototype.forEach.call(elements, (el) => {
        if (el.children[0].children[0].children[1] && (el.children[0].children[0].children[1].parentNode.parentNode.classList[10] !== 'in-prev-month' && el.children[0].children[0].children[1].parentNode.parentNode.classList[10] !== 'in-next-month')) {
          clickedElements.push('selected')
        } else if (el.children[0].children[0].children[0].parentNode.parentNode.classList[10] !== 'in-prev-month' && el.children[0].children[0].children[0].parentNode.parentNode.classList[10] !== 'in-next-month') {
          clickedElements.push('unselected')
        }
      })
      if (clickedElements.includes('selected') && clickedElements.includes('unselected')) {
        hasToSelectAll = false
      }
      Array.prototype.forEach.call(elements, (el) => {
        if (el.children[0].children[0].children[1] && (el.children[0].children[0].children[1].parentNode.parentNode.classList[10] !== 'in-prev-month' && el.children[0].children[0].children[1].parentNode.parentNode.classList[10] !== 'in-next-month') && hasToSelectAll) {
          el.children[0].children[0].children[1].click()
        } else if (el.children[0].children[0].children[0].parentNode.parentNode.classList[10] !== 'in-prev-month' && el.children[0].children[0].children[0].parentNode.parentNode.classList[10] !== 'in-next-month') {
          el.children[0].children[0].children[0].click()
        }
      })
    }
  },
  mounted() {
    let grid = this.$refs.datepicker.$refs.calendar.$refs.container.children[0].children[0].children[0].children[0].children[1]
    let days = [
      grid.children[0],
      grid.children[1],
      grid.children[2],
      grid.children[3],
      grid.children[4],
      grid.children[5],
      grid.children[6],
    ]
    let elements = Array.from(this.$refs.datepicker.$refs.calendar.$refs.container.children[0].children[0].children[0].children[0].children[1].children)
    Array.prototype.forEach.call(days, (el) => {
      el.addEventListener('click', (event) => {
        this.selectMultipleDays(elements.filter(item => item.children[0].classList.contains('weekday-position-' + parseInt(event.target.parentNode.classList[3].slice(-1)))))
      })
    })
    this.$refs.datepicker.$refs.calendar.$refs.container.children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].addEventListener('click', (event) => {
      this.selectMultipleDays(elements.filter(item => item.children[0].classList.contains('vc-day')))
    })
  }
}
</script>

<style>
.vc-arrows-container {
  display: none !important;
}
</style>
