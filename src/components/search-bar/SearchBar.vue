<template>
  <div class="searchbar-container">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="9">
        <v-text-field
            class="search-term"
            v-model="searchTerm"
            :disabled="loading"
            :loading="loading"
            density="default"
            variant="solo"
            label="Buscar por titulo o personaje"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
        />
        </v-col>
        <v-col cols="12" sm="12" md="3">
          <v-select
              v-model="searchParam"
              variant="solo"
              :items="typeSearch"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <div v-if="emptyResults" class="mx-16 mt-4 empty-results">{{message}}</div>
      </v-row>
    </v-container>


  </div>
</template>

<script src="./SearchBar.ts" lang="ts"/>

<style scoped>
.searchbar-container{
}

.search-term{
  width: 80vw;
}
</style>
