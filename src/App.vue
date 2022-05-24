<template>
  <main id="app">
    <aside>
      <LayersControl
        :mapTypeId="mapTypeId"
        :mapTypes="mapTypes"
        :layerGroup="baselayers"></LayersControl>
      <DrawingControl
        :allowedFeatures="drawingFeatures"
        :layerGroup="overlays"
        :interactions="interactions"></DrawingControl>
    </aside>
    <MapContainer
      :center="center"
      :zoom="zoom"
      :baselayers="baselayers"
      :overlays="overlays"
      :controls="controls"
      :interactions="interactions">
    </MapContainer>
  </main>
</template>

<script>
  import Options from './options'

  import MapContainer from './components/MapContainer'
  import LayersControl from './components/LayersControl'
  import DrawingControl from './components/DrawingControl'

  import { FullScreen, defaults as defaultControls } from 'ol/control'
  import { DragRotateAndZoom, defaults as defaultInteractions } from 'ol/interaction'
  import LayerGroup from 'ol/layer/Group'
  
  import 'water.css/out/light.css'

  export default {
    name: 'App',
    components: {
      MapContainer,
      LayersControl,
      DrawingControl,
    },
    data: () => ({
      ...Options,
      baselayers: new LayerGroup({ name: 'baselayer' }),
      overlays: new LayerGroup({ name: 'overlay' }),
      controls: defaultControls(),
      interactions: defaultInteractions()
    }),
    mounted() {
      this.controls.extend([new FullScreen({ source: document.querySelector(this.fullscreenElement) })]);
      this.interactions.extend([new DragRotateAndZoom()]);
    }
  }
</script>

<style>
  html, body, #app {
    height: 100%;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin: 0;
  }

  #app {
    display: flex;
  }

  main {
    background: #fff;
  }

  aside > * {
    margin: 1em;
  }

  aside select, aside button {
    min-width: 100%;
  }

</style>
