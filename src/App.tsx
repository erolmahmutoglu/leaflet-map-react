import { Map } from "../lib/main";

function App() {
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
}

export default App;
