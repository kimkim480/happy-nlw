import React from "react";
import {
  FiAlertCircle,
  FiEdit3,
  FiMapPin,
  FiPower,
  FiTrash2,
} from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";

import mapMarkerImg from "../images/map-marker.svg";
import MapIcon from "../utils/mapIcon";

import "../styles/pages/dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="dashboard-page">
      <aside className="app-sidebar">
        <img src={mapMarkerImg} alt="Happy" />

        <div className="sidebar-buttons">
          <button type="button" onClick={() => {}}>
            <FiMapPin size={24} color="#FFF" />
          </button>
          <button type="button" onClick={() => {}}>
            <FiAlertCircle size={24} color="#FFF" />
          </button>
        </div>

        <footer>
          <button type="button" onClick={() => {}}>
            <FiPower size={24} color="#FFF" />
          </button>
        </footer>
      </aside>

      <div className="content-wrapper">
        <header>
          <h1>Orfanatos Cadastrados</h1>
          <p>2 orfanatos</p>
        </header>

        <main>
          <div className="orphanage-block">
            <Map
              center={[-17.8926039, -41.5112767]}
              zoom={16}
              dragging={false}
              touchZoom={false}
              zoomControl={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker
                interactive={false}
                icon={MapIcon}
                position={[-17.8926039, -41.5112767]}
              />
            </Map>

            <footer>
              <p>Orf.Esperança</p>
              <div className="footer-buttons">
                <Link to="">
                  <FiEdit3 size={24} />
                </Link>
                <Link to="">
                  <FiTrash2 size={24} />
                </Link>
              </div>
            </footer>
          </div>

          <div className="orphanage-block">
            <Map
              center={[-17.8926039, -41.5112767]}
              zoom={16}
              dragging={false}
              touchZoom={false}
              zoomControl={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker
                interactive={false}
                icon={MapIcon}
                position={[-17.8926039, -41.5112767]}
              />
            </Map>

            <footer>
              <p>Orf.Esperança</p>
              <div className="footer-buttons">
                <Link to="">
                  <FiEdit3 size={24} />
                </Link>
                <Link to="">
                  <FiTrash2 size={24} />
                </Link>
              </div>
            </footer>
          </div>
          <div className="orphanage-block"></div>
          <div className="orphanage-block"></div>
        </main>
      </div>
    </div>
  );
}
