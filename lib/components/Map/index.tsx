import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import { IMapContainer } from "./index.d";
import styles from "./styles.module.css";
import { icon } from "../../utils/icons";

// // START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";
// // END: Preserve spaces to avoid auto-sorting

export const Map = ({
  dimensions = { width: "100%", height: "100%" },
  tooltip,
  position,
  mapCenter,
  zoom = 15,
  scrollWheelZoom = true,
  preferCanvas = true,
  draggable = true,
  maxZoom = 18,
  onClickMarker = () => {},
  goToLocation = true,
}: IMapContainer) => {
  return (
    <MapContainer
      preferCanvas={preferCanvas}
      scrollWheelZoom={scrollWheelZoom}
      style={{ width: dimensions.width, height: dimensions.height }}
      center={[mapCenter.lat, mapCenter.lng]}
      zoom={zoom}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={maxZoom}
      />
      <Marker
        draggable={draggable}
        icon={icon}
        position={[position.lat, position.lng]}
        eventHandlers={{
          click: (e) => {
            const { lat, lng } = e.latlng;
            onClickMarker(e);

            if (goToLocation) {
              window.open(
                `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
              );
            }
          },
        }}
      >
        <Tooltip
          permanent={true}
          direction="top"
          offset={[-3, -100]}
          className={styles.tooltip}
        >
          {typeof tooltip === "string" ? (
            <p className={styles.tooltipText}>{tooltip}</p>
          ) : (
            tooltip
          )}
        </Tooltip>
      </Marker>
    </MapContainer>
  );
};
