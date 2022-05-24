<template>
  <section>
    <label for="drawfeature"><b>Draw geometry</b></label>
    <select name="drawfeature" v-model="selected">
      <option disabled value="">Please select one</option>
      <option v-for="(type, key) in allowedFeatures" :key="key" :value="type">{{ type }}</option>
    </select>
    <button :disabled="!hasActiveLayers" type="button" @click="clear">Clear</button>
  </section>
</template>

<script>
  import Draw from 'ol/interaction/Draw'
  import LayerGroup from 'ol/layer/Group'
  import VectorLayer from 'ol/layer/Vector'
  import VectorSource from 'ol/source/Vector'
  import Collection from 'ol/Collection'

  export default {
    name: 'DrawingControl',
    props: {
      allowedFeatures: Array,
      layerGroup: LayerGroup,
      interactions: Collection
    },
    data: () => ({
      selected: '',
      hasActiveLayers: false,
    }),
    mounted() {
      this.vector = new VectorLayer({
        source: new VectorSource({ wrapX: false })
      });
      this.layerGroup.getLayers().push(this.vector);
    },
    watch: {
      selected(value) {
        this.toggleInteraction(value);
      }
    },
    methods: {
      toggleInteraction(type) {
        this.interactions.remove(this.draw);
        if (type && type !== 'None') {
          this.draw = new Draw({ source: this.vector.getSource(), type });
          this.draw.once('drawstart', () => this.hasActiveLayers = true);
          this.draw.once('drawend', () => this.hasActiveLayers = true);
          this.interactions.extend([this.draw]);
          this.toggleMapCursor(true);
        }
      },
      toggleMapCursor(active) {
        if (this.draw && this.draw.getMap()) {
          this.draw.getMap().getViewport().style.cursor = active ? 'default' : '';
        }
      },
      clear() {
        this.toggleMapCursor(false);
        this.selected = '';
        this.hasActiveLayers = false
        this.vector.getSource().clear();
      }
    }
  }
</script>

<style scoped>
</style>