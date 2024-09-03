import { LeafletMouseEvent } from "leaflet";

export interface IMapContainer {
  dimensions: {
    width: string;
    height: string;
  };
  tooltip: React.ReactNode | string;
  position: {
    lat: number;
    lng: number;
  };
  mapCenter: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  maxZoom?: number;
  scrollWheelZoom?: boolean;
  preferCanvas?: boolean;
  draggable?: boolean;
  onClickMarker?: (e: LeafletMouseEvent) => void;
  goToLocation?: boolean;
}
