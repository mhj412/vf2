<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-app-bar-nav-icon @click="drawer= !drawer"/>
      <site-title :title="title"></site-title>
      <v-spacer/>
      <v-btn icon @click="save"><v-icon>mdi-check</v-icon></v-btn>
      <v-btn icon @click="read"><v-icon>mdi-check</v-icon></v-btn>
       <v-btn icon @click="readOne"><v-icon>mdi-check</v-icon></v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
    <site-menu></site-menu>

      <v-divider></v-divider>
      </v-navigation-drawer>
    <v-content>
        <router-view/>
    </v-content>
    <site-footer :footer="footer"></site-footer>

  </v-app>
</template>

<script>

import SiteTitle from '@/views/site/title'
import SiteFooter from '@/views/site/footer'
import SiteMenu from '@/views/site/menu'
export default {

  components: { SiteTitle, SiteFooter, SiteMenu },
  name: 'App',

  data () {
    return {
      drawer: false,
      items: [],
      title: '나의 타이틀입니다',
      footer: '푸터입니다'
    }
  },
  mounted () {
    console.log(this.$firebase)
  },
  methods: {
    save () {
      console.log('save@@@')
      this.$firebase.database().ref().child('abcd').set({ // 쓰기
        title: 'abcd', text: 'ttttt'
      })
    },
    read () {
      this.$firebase.database().ref().child('abcd').on('value', (sn) => { // 전체를 다읽어오기
        console.log(sn)
        console.log(sn.val())
      })
    },
    async readOne () {
      const sn = await this.$firebase.database().ref().child('abcd').once('value')// 한번만 읽어오기
      console.log(sn.val())
    }
  }

}

</script>
