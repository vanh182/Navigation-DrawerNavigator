import * as React from 'react';
import {Button, View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Alert} from 'react-native';
function Loaihoa({navigation}){
    const DATA=[
        {
            "mahoa": 1,
            "tenloai": "Hoa Quà tặng",
            "hinh": require('../assets/images/cuc_1.jpg'),
          }, {
            "mahoa": 2,
            "tenloai": "Hoa Hồng",
            "hinh": require('../assets/images/hong_1.jpg'),
          }, {
            "mahoa": 13,
            "tenloai": "Hoa Tình Yêu",
            "hinh": require('../assets/images/xuan_1.jpg'),
          }, {
            "mahoa": 19,
            "tenloai": "Hoa Cưới",
            "hinh": require('../assets/images/cuoi_1.jpg'),
          }
    ];
    return(
        <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
            <FlatList
            data= {DATA}
            renderItem={({item})=>(
                <View>
                    <Text style={StyleSheet.text}>{item.tenloai}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Hoa',{
                        maloai: item.maloai,
                        tenloai:item.tenloai
                    })}>
                        <Image source={item.hinh} style={styles.iamge}/>
                    </TouchableOpacity>
                </View>
            )}/>
        </View>

        );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //marginTop: 1,
      alignItems: "center",
      backgroundColor:"#F5DEB3"
    },
  });
  
  export default Loaihoa;