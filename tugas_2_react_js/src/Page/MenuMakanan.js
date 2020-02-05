import React, {Component} from 'react';
import ListMakanan from '../ListData/ListMakanan';

class MenuMakanan extends Component{
    render(){
        return(
            // ListMakanan ini panggilan dari file ListMakanan.js
            // dan dataList ini dipanggil oleh file ListMakanan.js
            <div>
                <h3>Daftar Makanan yang kami sediakan: </h3>
                <td>
                    <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
                </td>
                <td>
                    <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
                </td>
                <td>
                    <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                </td>
                <td>
                    <ListMakanan datalist="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
                </td>
                <td>
                    <ListMakanan datalist="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg"/>
                </td>
            </div>
        );
    }
}

export default MenuMakanan;