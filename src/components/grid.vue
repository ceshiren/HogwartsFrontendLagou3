<template>
<v-app>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="n in 4"
        :key="n"
        :cols="n*2"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-app>
</template>
