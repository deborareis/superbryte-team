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

const ModalMap = user => {
  const markers = [];

  if (user.geo) {
    markers.push({
      markerOffset: -25,
      name: `${user.countryCode === 'PRT' ? 'Portugal' : 'Deutschland'}`,
      coordinates: [user.geo.lng, user.geo.lat]
    });
  }
  console.log('ddd', markers);
  const highlighted = [user.countryCode];
  return (
    <ComposableMap
      projection='geoAzimuthalEqualArea'
      projectionConfig={{
        rotate: [0, -45.0, 0],
        scale: 1500
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
          <circle r={5} fill='#fff' stroke='#fff' strokeWidth={2} />
          <text
            textAnchor='middle'
            y={markerOffset}
            style={{ fontFamily: 'Poppins', fontSize: '20px', fill: '#000' }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default ModalMap;
