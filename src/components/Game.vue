<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12 hidden-xs-only>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex xs12 class="text-xs-left text-md-center">
        <div v-bind:class="mobile" class="font-weight-light">Device highscore: {{storageRecord}}</div>
        <div v-bind:class="mobile" class="font-weight-light">Streak: {{streak}}</div>
      </v-flex>

      <v-flex xs12 v-bind:class="getResult" class="display-2 font-weight-bold my-4">
        {{ getResponse }}
      </v-flex>

      <v-flex mb-1 my-2>
        <h1 class="display-3 font-weight-bold mb-3">
          <span>{{ randomDate }}</span>
        </h1>
      </v-flex>
    </v-layout>

    <v-layout row wrap hidden-xs-only>
      <v-flex>
        <v-btn dark  round color="cyan" large @click="makeGuess('Monday')">Monday</v-btn>
      </v-flex>
      <v-flex>
        <v-btn dark  round color="teal" large @click="makeGuess('Tuesday')">Tuesday</v-btn>
      </v-flex>
      <v-flex>
        <v-btn dark  round color="green" large @click="makeGuess('Wednesday')">Wednesday</v-btn>
      </v-flex>
      <v-flex>
        <v-btn dark  round color="purple" large @click="makeGuess('Thursday')">Thursday</v-btn>
      </v-flex>
      <v-flex>
        <v-btn dark  round color="brown" large @click="makeGuess('Friday')">Friday</v-btn>
      </v-flex>
      <v-flex>
        <v-btn dark  round color="blue-grey" large @click="makeGuess('Saturday')">Saturday</v-btn>
      </v-flex>
      <v-flex>
        <v-btn dark  round color="indigo" large @click="makeGuess('Sunday')">Sunday</v-btn>
      </v-flex>

    </v-layout>
    <v-layout row wrap hidden-md-and-up>
      <v-flex xs12>
        <v-btn block dark round color="cyan" large @click="makeGuess('Monday')">Monday</v-btn>
      </v-flex>
      <v-flex xs12>
        <v-btn block dark round color="teal" large @click="makeGuess('Tuesday')">Tuesday</v-btn>
      </v-flex>
      <v-flex xs12>
        <v-btn block dark round color="green" large @click="makeGuess('Wednesday')">Wednesday</v-btn>
      </v-flex>
      <v-flex xs12>
        <v-btn block dark round color="purple" large @click="makeGuess('Thursday')">Thursday</v-btn>
      </v-flex>
      <v-flex xs12>
        <v-btn block dark round color="brown" large @click="makeGuess('Friday')">Friday</v-btn>
      </v-flex>
      <v-flex xs12>
        <v-btn block dark round color="blue-grey" large @click="makeGuess('Saturday')">Saturday</v-btn>
      </v-flex>
      <v-flex xs12>
        <v-btn block dark round color="indigo" large @click="makeGuess('Sunday')">Sunday</v-btn>
      </v-flex>

    </v-layout>

  </v-container>
</template>

<script>
const momentRandom = require('moment-random')
export default {
  data: () => ({
    randomDate: '',
    correctanswer: '',
    streak: 0,
    storageRecord: 0,
    response: '\n',
    result: false

  }),
  computed: {
    getDate () {
      return this.randomDate
    },
    getResponse () {
      return this.response
    },
    getResult () {
      let size = this.$vuetify.breakpoint.name === 'xs' ? 'title' : 'display-1'
      return this.result ? 'blue--text ' + size : 'red--text ' + size
    },
    getHighscore () {
      return this.storageRecord
    },
    mobile () {
      return this.$vuetify.breakpoint.name === 'xs' ? '' : 'title'
    }
  },
  methods: {
    randomize () {
      let date = momentRandom('2199-12-31', '1800-01-01')
      this.randomDate = date.format('YYYY-MM-DD')
      this.correctanswer = date.format('dddd')
    },
    makeGuess (guess) {
      let correctanswer = this.correctanswer
      if (guess === this.correctanswer) {
        this.streak++
        if (this.streak > this.storageRecord) this.isRecord()
        this.response = this.randomDate + ' = ' + correctanswer
        this.result = true
      } else {
        this.isRecord()
        this.streak = 0
        this.response = this.randomDate + ' = ' + correctanswer
        this.result = false
      }

      this.randomize()
    },
    isRecord () {
      if (this.storageRecord < this.streak) {
        this.storageRecord = this.streak
        localStorage.setItem('storageRecord', JSON.stringify(this.streak))
      }
    }
  },
  mounted () {
    if (localStorage.getItem('storageRecord')) this.storageRecord = JSON.parse(localStorage.getItem('storageRecord'))
    console.log(this.storageRecord)
    this.randomize()
  }
}
</script>

<style>

</style>
