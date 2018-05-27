import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.121788,
          longitude: 115.071081
        },
        title: 'Rumah Sakit Umum Parama Sidhi',
        subtitle: 'Berlokasi di Jl. A. Yani No.171, Kaliuntu, Kec. Buleleng, Kabupaten Buleleng, Bali 81116'
      },
      {
        key:2,
        latlng: {
          latitude:-8.108866,
          longitude:  115.085693
        },
        title: 'RS. Kertha Usadha',
        subtitle: 'Berlokasi di Jl. Cendrawasih No. 5 - 7, Kaliuntu, Kec. Buleleng, Singaraja, Bali 81116'
      },
      {
        key:3,
        latlng: {
          latitude: -8.120762,
          longitude: 115.094791
        },
        title: 'RSU Karya Dharma Husada Bros',
        subtitle: 'Berlokasi di Jalan Yudistira No.7, Singaraja, Kendran, Kec. Buleleng, Kabupaten Buleleng, Bali 81117'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.117958,
          longitude: 115.092387
        },
        title: 'RSUD Singaraja',
        subtitle: 'Berlokasi di Jalan Ngurah Rai, Kendran, Buleleng, Kendran, Kec. Buleleng, Kabupaten Buleleng, Bali 81112'
      },
      {
        key:5,
        latlng: {
          latitude:-8.112264,
          longitude: 115.092173
        },
        title: 'Rumah Sakit TNI AD Wirasatya Singaraja',
        subtitle: 'Berlokasi di Jl. Ngurah Rai No.70, Banjar Jawa, Kec. Buleleng, Singaraja, Bali 81113'
      },
      {
        key:6,
        latlng: {
          latitude:-8.455940,
          longitude: 115.352592
        },
        title: 'Rumah Sakit Umum Bangli',
        subtitle: 'Berlokasi di Jl. Brigjen Ngurah Rai No.10, Kawan, Kec. Bangli, Kabupaten Bangli, Bali 80614'
      },
      {
        key:7,
        latlng: {
          latitude:-8.455147,
          longitude: 115.351202
        },
        title: 'Rumah Sakit Jiwa Provinsi Bali',
        subtitle: 'Berlokasi di Jl. Kusumayudha No.29, Kawan, Kec. Bangli, Kabupaten Bangli, Bali 80661'
      },
        {
        key:8,
        latlng: {
          latitude:-8.436024,
          longitude: 115.612670
        },
        title: 'RSUD Karangasem',
        subtitle: 'Berlokasi di Jl. Ngurah Rai No. 58, Karangasem, Kecamatan Karangasem, Karangasem, Kec. Karangasem, Kabupaten Karangasem, Bali 80811'
      },
        {
        key:9,
        latlng: {
          latitude:-8.445422,
          longitude: 115.585656
        },
        title: 'RS BaliMed Karangasem',
        subtitle: 'Berlokasi di Jalan Nenas, Bungaya Kangin, Kecicang, Bebandem, Bungaya Kangin, Kec. Karangasem, Kabupaten Karangasem, Bali 80811'
      },
        {
        key:10,
        latlng: {
          latitude:-8.538593,
          longitude: 115.394633
        },
        title: 'Rumah Sakit Umum Daerah Kabupaten Klungkung',
        subtitle: 'Berlokasi di Jl. Flamboyan No.40, Semarapura Kauh, Kec. Klungkung, Kabupaten Klungkung, Bali 80714'
      },
        {
        key:11,
        latlng: {
          latitude:-8.354667,
          longitude: 114.621719
        },
        title: 'RSU. Negara',
        subtitle: 'Berlokasi di Jl. Wijaya Kusuma No.17, Baler Bale Agung, Negara, Kabupaten Jembrana, Bali 82218'
      },
        {
        key:12,
        latlng: {
          latitude:-8.354306,
          longitude: 114.626333
        },
        title: 'RS Bunda Negara',
        subtitle: 'Berlokasi di Jalan Rajawali No. 36, Pendem, Denpasar, Pendem, Kec. Jembrana, Kabupaten Jembrana, Bali 82218'
      },
        {
        key:13,
        latlng: {
          latitude:-8.361028,
          longitude: 114.645806
        },
        title: 'RSU BaliMéd Negara',
        subtitle: 'Berlokasi di Jl. Hayam Wuruk No.23, Kel, Dangin Tukadaya, Kec. Jembrana, Kabupaten Jembrana, Bali 82218'
      },
        {
        key:14,
        latlng: {
          latitude:-8.361003,
          longitude: 114.637584
        },
        title: 'Rumah Sakit Umum Kertayasa',
        subtitle: 'Berlokasi di Jalan Ngurah Rai N No.143, Dauhwaru, Kec. Jembrana, Dauhwaru, Kec. Jembrana, Kabupaten Jembrana, Bali 82218'
      },
        {
        key:15,
        latlng: {
          latitude:-8.539144,
          longitude: 115.132210
        },
        title: 'Rumah Sakit Umum Tabanan',
        subtitle: 'Berlokasi di Jalan Pahlawan, Delod Peken, Kecamatan Tabanan, Delod Peken, Kec. Tabanan, Kabupaten Tabanan, Bali 82121'
      },
        {
        key:16,
        latlng: {
          latitude:-8.536881,
          longitude: 115.321506
        },
        title: 'Rumah Sakit Umum Daerah Sanjiwani Gianyar',
        subtitle: 'Berlokasi di Jl. Ciung Wanara-Gianyar No.2, Gianyar, Kec. Gianyar, Kabupaten Gianyar, Bali 80511'
      },
        {
        key:17,
        latlng: {
          latitude:-8.536881,
          longitude: 115.321506
        },
        title: 'Rumah Sakit Umum Daerah Sanjiwani Gianyar',
        subtitle: 'Berlokasi di Jl. Ciung Wanara-Gianyar No.2, Gianyar, Kec. Gianyar, Kabupaten Gianyar, Bali 80511'
      },
        {
        key:18,
        latlng: {
          latitude:-8.552224,
          longitude: 115.272917
        },
        title: 'Rumah Sakit Ari Canti',
        subtitle: 'Berlokasi di Jalan Raya Mas No.88x, MAS, Ubud, MAS, Ubud, Kabupaten Gianyar, Bali 80571'
      },
        {
        key:19,
        latlng: {
          latitude:-8.578635,
          longitude: 115.182971
        },
        title: 'Rumah Sakit Umum Daerah Mangusada Badung',
        subtitle: 'Berlokasi di Jalan Raya Kapal, Mangupura, Mengwi, Kapal, Mengwi, Kabupaten Badung, Bali 80351'
      },
        {
        key:20,
        latlng: {
          latitude:-8.675309,
          longitude: 115.212310
        },
        title: 'Rumah Sakit Umum Pusat Sanglah',
        subtitle: 'Berlokasi di Jalan Diponegoro, Dauh Puri Klod, Denpasar Barat, Dauh Puri Klod, Denpasar Bar., Kota Denpasar, Bali 80113'
      },
        {
        key:21,
        latlng: {
          latitude:-8.678437,
          longitude: 115.214918
        },
        title: 'Rumah Sakit Prima Medika',
        subtitle: 'Berlokasi di Jalan Pulau Serangan, Nomer 9X, Dauh Puri Klod, Denpasar Bar., Kota Denpasar, Bali 80232'
      },
        {
        key:22,
        latlng: {
          latitude:-8.637075,
          longitude: 115.220937
        },
        title: 'Rumah Sakit Umum Bhakti Rahayu',
        subtitle: 'Berlokasi di Jl. Gatot Subroto II No.11, Dangin Puri Kaja, Denpasar Utara, Kota Denpasar, Bali 80234'
      },
        {
        key:23,
        latlng: {
          latitude:-8.648495,
          longitude: 115.212811
        },
        title: 'Rumah Sakit Umum Daerah Wangaya Denpasar',
        subtitle: 'Berlokasi di Jalan Kartini No.133, Dauh Puri Kaja, Denpasar Utara, Dauh Puri Kaja, Denpasar Utara, Kota Denpasar, Bali 80231'
      },
        {
        key:24,
        latlng: {
          latitude:-8.645966,
          longitude: 115.224532
        },
        title: 'RS. Bhayangkara Denpasar Polda Bali',
        subtitle: 'Berlokasi di Jl. Trijata No. 32, Sumerta Kelod 2F, Kelod, Dangin Puri Kangin, Denpasar Timur, Dangin Puri Kangin, Denpasar Utara, Kota Denpasar, Bali 80233'
      },
        {
        key:25,
        latlng: {
          latitude:-8.649556,
          longitude: 115.226379
        },
        title: 'Rumah Sakit Umum Puri Raharja',
        subtitle: 'Berlokasi di Jl. Wr. Supratman No.14,19, Dangin Puri Kangin, Denpasar Utara, Kota Denpasar, Bali 80236'
      },
        {
        key:26,
        latlng: {
          latitude:-8.714950,
          longitude: 115.185360
        },
        title: 'Rumah Sakit Siloam Bali',
        subtitle: 'Berlokasi di Jalan Sunset Road No.818, Kuta, Kut, Kuta, Kabupaten Badung, Bali 80361'
      },
        {
        key:27,
        latlng: {
          latitude:-8.641791,
          longitude: 115.251378
        },
        title: 'Rumah Sakit Umum Dharma Yadnya',
        subtitle: 'Berlokasi di Jl No. 256, Tohpati, Tim, Jalan Wage Rudolf Supratman, Kesiman Kertalangu, Denpasar Timur, Kesiman Kertalangu, Denpasar Tim., Kota Denpasar, Bali 80237'
      },
        {
        key:28,
        latlng: {
          latitude:-8.644046,
          longitude: 115.209604
        },
        title: 'Rumah Sakit Umum Manuabaa',
        subtitle: 'Berlokasi di Jalan HOS. Cokroaminoto No. 28, Pemecutan Kaja, Denpasar Utara, Pemecutan Kaja, Denpasar Utara, Kota Denpasar, Bali 80116'
      },
        {
        key:29,
        latlng: {
          latitude:-8.622768,
          longitude: 115.199287
        },
        title: 'Rumah Sakit Umum Surya Husadha Ubung',
        subtitle: 'Berlokasi di Jl. Cokroaminoto No.356, Ubung Kaja, Denpasar Utara, Kota Denpasar, Bali 80116'
      },
        {
        key:30,
        latlng: {
          latitude:-8.678238,
          longitude: 115.212305
        },
        title: 'Surya Husadha Hospital',
        subtitle: 'Berlokasi di Jl. Pulau Serangan No.7, Dauh Puri Klod, Denpasar Bar., Kota Denpasar, Bali 80114'
      },
        {
        key:31,
        latlng: {
          latitude:-8.656870,
          longitude: 115.191362
        },
        title: 'BaliMéd Hospital',
        subtitle: 'Berlokasi di Jl. Mahendradatta, Padangsambian, Denpasar Bar., Kota Denpasar, Bali 80118'
      },
        {
        key:32,
        latlng: {
          latitude:-8.703560,
          longitude: 115.248844
        },
        title: 'RSUD Bali Mandara',
        subtitle: 'Berlokasi di Jl. By Pass Ngurah Rai No.548, Sanur Kauh, Denpasar Sel., Kota Denpasar, Bali'
      },
        {
        key:33,
        latlng: {
          latitude:-8.668378,
          longitude: 115.228014
        },
        title: 'Bali Royal Hospital',
        subtitle: 'Berlokasi di Jalan Tantular No. 6, Renon, Denpasar Timur, Dangin Puri Klod, Denpasar Tim., Kota Denpasar, Bali 80234'
      },
        {
        key:34,
        latlng: {
          latitude:-8.673546,
          longitude: 115.232428
        },
        title: 'Rumah Sakit Bersalin Harapan Bunda',
        subtitle: 'Berlokasi di Jl. Tukad Unda No.1, Panjer, Denpasar Sel., Kota Denpasar, Bali 80234'
      },
        {
        key:35,
        latlng: {
          latitude:-8.638710,
          longitude: 115.216490
        },
        title: 'RSIA Puri Bunda Denpasar',
        subtitle: 'Berlokasi di Jl. Gatot Subroto VI No.19, Dauh Puri Kaja, Denpasar Utara, Kota Denpasar, Bali 80233'
      },
        {
        key:36,
        latlng: {
          latitude:-8.652201,
          longitude: 115.223755
        },
        title: 'Rumah Sakit Mata Bali Mandara',
        subtitle: 'Berlokasi di Jl. Angsoka No.14, Dangin Puri Kangin, Denpasar Utara, Kota Denpasar, Bali 80236'
      },
        {
        key:37,
        latlng: {
          latitude:-8.644358,
          longitude: 115.210769
        },
        title: 'Rumah Sakit Indera Masyarakat',
        subtitle: 'Berlokasi di Jl. Maruti No.10, Pemecutan Kaja, Denpasar Utara, Kota Denpasar, Bali 80231'
      },
        {
        key:38,
        latlng: {
          latitude:-8.670892,
          longitude: 115.213664
        },
        title: 'RSU. Sari Dharma',
        subtitle: 'Berlokasi di Jl. Pulau Seram No.1, Dangin Puri Kangin, Denpasar Utara, Kota Denpasar, Bali 80114'
      },
        {
        key:39,
        latlng: {
          latitude:-8.677255,
          longitude: 115.205435
        },
        title: 'Kasih Ibu General Hospital',
        subtitle: 'Berlokasi di No. No.120, Desa, Jl. Teuku Umar, Dauh Puri Kauh, West Denpasar, Denpasar City, Bali 80114'
      },
        {
        key:40,
        latlng: {
          latitude:-8.683248,
          longitude: 115.195779
        },
        title: 'Rumah Sakit PMI',
        subtitle: 'Berlokasi di Jl. Imam Bonjol No.272, Pemecutan Klod, Denpasar Bar., Kota Denpasar, Bali 80113'
      },
        {
        key:41,
        latlng: {
          latitude:-8.675985,
          longitude: 115.185544
        },
        title: 'RSIA. Pucuk Permata Hati',
        subtitle: 'Berlokasi di Jl. Teuku Umar Barat No.71XX, Padangsambian Klod, Denpasar Bar., Kota Denpasar, Bali 80117'
      },
        {
        key:41,
        latlng: {
          latitude:-8.676798,
          longitude: 115.495070
        },
        title: 'Rumah sakit pratama nusa penida',
        subtitle: 'Berlokasi di Ped, Nusapenida, Kabupaten Klungkung, Bali 80771'
      },
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Rumah Sakit Daerah Provinsi Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}>adisatriawan@Copyright </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
