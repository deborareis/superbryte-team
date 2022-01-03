import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker
} from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const markers = [
  {
    markerOffset: 5,
    name: '5',
    coordinates: [13.1445545, 52.5065133]
  },
  {
    markerOffset: 5,
    name: '1',
    coordinates: [-9.2302432, 38.5436057]
  },
  {
    markerOffset: 5,
    name: '3',
    coordinates: [-9.2065247, 39.939455]
  }
];
const highlighted = ['PRT', 'DEU'];

const HomepageMap = () => {
  return (
    <ComposableMap
      projection='geoAzimuthalEqualArea'
      projectionConfig={{
        rotate: [0, -45.0, 0],
        scale: 1300
      }}
    >
      <Graticule stroke='rgba(255,255,255,.2)' />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .filter(d => d.properties.REGION_UN === 'Europe')
            .map(geo => {
              const isHighlighted =
                highlighted.indexOf(geo.properties.ISO_A3) !== -1;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={
                    isHighlighted
                      ? 'rgba(255, 0, 0, .8)'
                      : 'rgba(234, 234, 236, .9)'
                  }
                  stroke='#D6D6DA'
                />
              );
            })
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={15} fill='#F00' stroke='#fff' strokeWidth={2} />
          <text
            textAnchor='middle'
            y={markerOffset}
            style={{ fontFamily: 'Poppins', fill: '#fff' }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default HomepageMap;
