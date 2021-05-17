<template>
  <v-container>
    <v-row>
      <v-card v-for="(disc, index) in getListDiscs" 
        :key="index"
        class="mx-auto my-2"
        width="374"
        >
        <v-img
          height="250"
          src="https://picsum.photos/250"
        ></v-img>
        <v-card-title>{{disc.album}}</v-card-title>

        <v-card-text>
          <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip v-for="(genre,index) in disc.genres"
              :key="index"
            >
              {{genre.name}}
            </v-chip>
          </v-chip-group>
        </v-card-text>
              {{disc.title}}{{disc.author_name}}
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="deep-purple lighten-2"
            text
            @click="editDisc"
          >
            Edit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'ListDiscs',
  data() {
    return {
    }
  },
  created() {
    this.listDiscs();
  },
  computed: {
    ...mapGetters({
      getListDiscs: 'discs/getListDiscs',
    }),
  },
  methods: {
    ...mapActions({
      setDiscsList: 'discs/setListDiscs'
    }),

    async listDiscs() {
      await this.setDiscsList()

    },

    editDisc() {
      console.log('editar');
    },
  }
}
</script>