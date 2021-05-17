<template>
  <div id="app">
    <v-app-bar app >
      <v-toolbar-title>Prueba Avalon</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="user_auth">
        <div>
          <v-btn 
            v-for="item in routes"
            :key="item.path"
            class="mx-2"
            small
            :value="item.title"
          >
        </v-btn>
      </div>
      </template>
    </v-app-bar>
    <v-app>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data: () => ({
      user_auth: [],
      routes: [],
    }),
    created (){
      this.user_auth = this.user
      this.getRoutes();
    },
    computed : {
      ...mapGetters({
          user : 'auth/user',
      }),
    },
    methods: {
      ...mapActions({
        signOutAction: 'auth/signOut'
      }),
      getRoutes () {
        this.routes = [
            { title: 'Discs', icon: 'mdi-view-dashboard', path: '/discs' },
            { title: 'Genders', icon: 'mdi-image', path: '/users'},
            { title: 'List Discs', icon: '', path: '/list-discs'},
            { title: 'List Genders', icon: 'mdi-image', path: '/list-genders'},
          ] 
      },
    },
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
