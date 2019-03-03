<template>
  <div>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      offset-x
      transition="slide-x-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn icon  v-on="on">
        <v-icon>mdi-code-tags</v-icon>
        </v-btn>
      </template>
      <v-card>
        <ColorPicker :width="300" :height="300" :disabled="false" startColor="#6383ff" @colorChange="onColorChange"></ColorPicker>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import ColorPicker from 'vue-color-picker-wheel';
export default {
  name: 'ColorPickerWheel',
   data: () => ({
      menu: false,
    }),
  components: {
    ColorPicker
  },
  methods: {
    onColorChange(color) {
      this.$vuetify.theme.primary = color;
      console.log('Color has changed to: ', color);
    }
  }
};
</script>

