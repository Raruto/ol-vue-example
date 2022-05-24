<template>
  <div ref="map-root" style="width: 100%; height: 100%"></div>
</template>

<script>
  import View from 'ol/View'
  import Map from 'ol/Map'
  import LayerGroup from 'ol/layer/Group'
  import { transform } from 'ol/proj'
  import Collection from 'ol/Collection'

  import 'ol/ol.css'

  export default {
    name: 'MapContainer',
    components: {},
    props: {
      center: {
        type: Array,
        default: () => ([0,0])
      },
      zoom: {
        type: Number,
        default: 0
      },
      baselayers: LayerGroup,
      overlays: LayerGroup,
      controls: Collection,
      interactions: Collection,
    },
    data: () => ({
      olMap: null,
    }),
    mounted() {
      this.olMap = new Map({
        target: this.$refs['map-root'],
        layers: [this.baselayers, this.overlays],
        view: new View({
          zoom: this.zoom,
          center: transform([this.center[1], this.center[0]], 'EPSG:4326', 'EPSG:3857'),
          constrainResolution: true,
        }),
        controls: this.controls,
        interactions: this.customInt || this.interactions,
      });
      this.$emit('init', this.olMap);
    },
  }
</script>

<style>
  .ol-rotate {
    top: 3em;
  }
</style>