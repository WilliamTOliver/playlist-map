<template>
  <v-container>
    <v-row class="text-center">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <h1>I</h1>
        <v-select
          :items="items"
          label="..."
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BeliefSelector extends Vue {
  @Prop() private items: string[] = ["believe", "want to understand why others believe"];
}

</script>
