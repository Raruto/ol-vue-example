<template>
  <section>
    <label for="baselayer"><b>Toggle base layer</b></label>
    <select name="baselayer" v-model="selected">
      <option disabled value="">Please select one</option>
      <option v-for="(mapType, key) in mapTypes" :key="key" :value="key">{{ mapType.name }}</option>
    </select>
  </section>
</template>

<script>
  import TileLayer from 'ol/layer/Tile'
  import XYZ from 'ol/source/XYZ'
  import LayerGroup from 'ol/layer/Group'

  export default {
    name: 'LayersControl',
    props: {
      mapTypeId: String,
      mapTypes: Object,
      layerGroup: LayerGroup,
    },
    computed: {
      selected: {
        set(value) {
          this.setMapType(value);
          return value;
        },
        get() {
          return this.mapTypeId;
        }
      }
    },
    mounted() {
        for (const key in this.mapTypes) {
          const basemap = this.mapTypes[key];
           this.layerGroup.getLayers().push(new TileLayer({
            source: new XYZ({
              attributions: basemap.options.attribution,
              url: basemap.url
            }),
            name: basemap.name,
            mapTypeId: key,
            visible: key == this.mapTypeId
          }));
      }
    },
    methods: {
      setMapType(mapTypeId) {
        this.layerGroup.getLayers().forEach(element => element.setVisible(element.get('mapTypeId') === mapTypeId));
      }
    }
  }
</script>

<style scoped>
</style>

