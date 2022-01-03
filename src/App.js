import React, { Component } from 'react';

import Protect from 'react-app-protect';
import './password-protect.styles.scss';

import { Header } from './components/header/header.component';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import HomepageMap from './components/map/map.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: '',
      show: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = userId => {
    this.setState({ show: true, currentUser: userId });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <Protect
        boxTitle='Welcome to the Superbryte Team Page! This page is password protected. '
        buttonLabel='See Page'
        inputPlaceholder='Type your password'
        sha512='1da71d0ef5a27b9b9006571e563377c4d40e386968e8d4a209c16b7c0822cc80f20eb56b3fadd2d1badb7aa2e790541ec7f542152d713c44ebad6bc349bc8a52'
      >
        <div className='App'>
          <Header />

          <SearchBox
            placeholder='Search team star...'
            handleChange={this.handleChange}
          />
          <CardList
            users={filteredUsers}
            hideModal={this.hideModal}
            showModal={this.showModal}
            data={this.state}
          />
          <div className='map-container'>
            <HomepageMap className='homepage-map' />
          </div>
        </div>
      </Protect>
    );
  }

  componentDidMount() {
    this.setState({
      users: [
        {
          id: 8,
          name: 'Daniel von Waldthausen',
          username: 'Daniel',
          email: 'daniel@superbryte.com',
          imgUrl: 'https://i.ibb.co/ChQCT15/daniel.jpg',
          role: 'CEO & CPO',
          city: 'Berlin',
          countryCode: 'DEU',
          geo: {
            lat: '52.5065133',
            lng: '13.1445545'
          },
          phone: '+49 123456789',
          website:
            'https://www.linkedin.com/in/daniel-von-waldthausen-3a3a4751/'
        },
        {
          id: 9,
          name: 'Débora Reis Vieira',
          username: 'Débora',
          email: 'debora@superbryte.com',
          imgUrl: 'https://i.ibb.co/yphbCC4/debora.jpg',
          role: 'Front-end Developer',
          city: 'Salvaterra de Magos',
          countryCode: 'PRT',
          geo: {
            lat: '39.439455',
            lng: '-9.2065247'
          },
          phone: '+351 123456789',
          website: 'https://www.linkedin.com/in/deborareisv/'
        },
        {
          id: 5,
          name: 'Francisco Vieira',
          username: 'Francisco',
          email: 'francisco@superbryte.com',
          imgUrl: 'https://i.ibb.co/yPXYTP0/francisco.jpg',
          role: 'Lead Front-end Developer',
          city: 'Caldas da Rainha',
          countryCode: 'PRT',
          geo: {
            lat: '39.439455',
            lng: '-9.2065247'
          },
          phone: '+351 123456789',
          website: 'https://www.linkedin.com/in/franciscovieirafront/'
        },
        {
          id: 3,
          name: 'Hicham Ratnani',
          username: 'Hicham',
          email: 'hicham@superbryte.com',
          imgUrl: 'https://i.ibb.co/6PhL9nN/hicham.jpg',
          role: 'Co-Founder',
          city: 'Berlin',
          countryCode: 'DEU',
          geo: {
            lat: '52.5065133',
            lng: '13.1445545'
          },
          phone: '+49 123456789',
          website: 'https://www.linkedin.com/in/hichamratnani/'
        },
        {
          id: 4,
          name: 'João Felix',
          username: 'João',
          email: 'joao@superbryte.com',
          imgUrl: 'https://i.ibb.co/MC1DdcM/joao.jpg',
          role: 'Lead Back-end Developer',
          city: 'Caldas da Rainha',
          countryCode: 'PRT',
          geo: {
            lat: '39.439455',
            lng: '-9.2065247'
          },
          phone: '+351 123456789',
          website: 'https://www.linkedin.com/in/joaoafelix/'
        },
        {
          id: 7,
          name: 'Katrin Horstkemper',
          username: 'Katrin',
          email: 'katrin@superbryte.com',
          imgUrl: 'https://i.ibb.co/wQy0RWK/katrin.jpg',
          role: 'UX/UI Designer',
          city: 'Berlin',
          countryCode: 'DEU',
          geo: {
            lat: '52.5065133',
            lng: '13.1445545'
          },
          phone: '+49 123456789',
          website: 'https://www.linkedin.com/in/katrin-horstkemper-4a4a3382/'
        },
        {
          id: 1,
          name: 'Leonardo Lino',
          username: 'Lenny',
          email: 'lenny@superbryte.com',
          imgUrl: 'https://i.ibb.co/yySXky2/lenny.jpg',
          role: 'CTO',
          city: 'Caldas da Rainha',
          countryCode: 'PRT',
          geo: {
            lat: '39.439455',
            lng: '-9.2065247'
          },
          phone: '+351 123456789',
          website: 'https://www.linkedin.com/in/leonardolino/.com'
        },
        {
          id: 6,
          name: 'Mario Wahl',
          username: 'Mario',
          email: 'mario@superbryte.com',
          imgUrl: 'https://i.ibb.co/ScQkgZN/mario.jpg',
          role: 'UX/UI Designer',
          city: 'Berlin',
          countryCode: 'DEU',
          geo: {
            lat: '52.5065133',
            lng: '13.1445545'
          },
          phone: '+49 123456789',
          website: 'https://www.linkedin.com/in/mariowahl/'
        },
        {
          id: 2,
          name: 'Sophie von Schierstaedt ',
          username: 'Sophie',
          email: 'sophie@superbryte.com',
          imgUrl: 'https://i.ibb.co/z45bZvD/sophie.jpg',
          role: 'Lead Training Specialist',
          city: 'Berlin',
          countryCode: 'DEU',
          geo: {
            lat: '52.5065133',
            lng: '13.1445545'
          },
          phone: '+49 123456789',
          website: 'https://www.linkedin.com/in/sophievonwedel/'
        }
      ]
    });
  }
}

export default App;
