// ====== import ini untuk function dengan catatan file.js harus ada=======
// import React from 'react';
// ====== import ini untuk class yg ada {Component} nya =========
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// Header ini function komponen dgn file terpisah
import Header from './Page/Header';
import MenuUtama from './Page/MenuUtama';
// import MenuProduct from './Page/MenuProduct';
import MenuKontak from './Page/MenuKontak';
import MenuTentangKami from './Page/MenuTentangKami';
// Footer ini function komponen dgn file terpisah
import Footer from './Page/Footer';
import MenuMakanan from './Page/MenuMakanan';

class App extends Component {
  render(){
    return (
      // didalam tag div ini pemanggilan file terpisah
      <div>
        <Header/>
        <MenuUtama/>
        <MenuMakanan/>
        
        <MenuTentangKami/>
        <MenuKontak/>
        <Footer/>
      </div>
    );
  }
}

export default App;
