# Leaflet Map React

This project is a React component that integrates the Leaflet library for
creating interactive maps. It provides a simple and intuitive way to display and
interact with maps in your React applications.

## Installation

To install the Leaflet Map React component, you can use npm or yarn:

```bash
npm install leaflet-map-react
```

or

```bash
yarn add leaflet-map-react
```

## Usage

To use the Leaflet Map React component in your project, you need to import it
and pass the necessary props:

```jsx
import { Map } from "leaflet-map-react";

const App = () => {
  return (
    <div style={{ width: "100%", height: "60vh" }}>
      <Map
        dimensions={{ width: "100%", height: "100%" }}
        tooltip="Hello, world!"
        position={{ lat: 38.424, lng: 27.141 }}
        mapCenter={{ lat: 38.424, lng: 27.141 }}
        zoom={13}
        scrollWheelZoom={true}
        preferCanvas={true}
        draggable={true}
        maxZoom={18}
        onClickMarker={() => {}}
        goToLocation={true}
      />
    </div>
  );
};

export default App;
```

## Props

The Leaflet Map React component accepts the following props:

The Leaflet Map React component accepts the following props:

- `dimensions`: An object that specifies the width and height of the map
  container.
- `tooltip`: A string that represents the tooltip text to be displayed on the
  marker.
- `position`: An object that defines the position of the marker.
- `mapCenter`: An object that sets the center of the map.
- `zoom`: A number that determines the initial zoom level of the map.
- `scrollWheelZoom`: A boolean value indicating whether the map should zoom when
  the mouse scroll wheel is used.
- `preferCanvas`: A boolean value indicating whether the map should prefer
  rendering using the Canvas element.
- `draggable`: A boolean value indicating whether the map can be dragged.
- `maxZoom`: A number that sets the maximum allowed zoom level of the map.
- `onClickMarker`: A function that is called when a marker on the map is
  clicked.
- `goToLocation`: A boolean value indicating whether the map should
  automatically pan to the user's current location.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file
for more information.
