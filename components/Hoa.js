import * as React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    Modal,
    Alert,
    Pressable,
    TouchableOpacity,
  } from 'react-native';
function Hoa({route, navigation}){
    const{maloai, tenloai} =route.params;
    var hoa=[{
        "mahoa": 1,
        "tenloai": "Hoa Quà tặng",
        "tenhoa": "Đón xuân",
        "dongia": 15000,
        "hinh": require('../assets/images/cuc_9.jpg'),
        "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
      }, {
        "mahoa": 2,
        "tenloai": "Hoa Quà tặng",
        "tenhoa": "Hồn nhiên",
        "dongia": 60000,
        "hinh": require('../assets/images/cuc_2.jpg'),
        "mota": "Hoa hồng đỏ, lá kim thuỷ tùng"
      }, {
        "mahoa": 3,
        "tenloai": "Hoa Quà tặng",
        "tenhoa": "Tím thuỷ chung",
        "dongia": 45000,
        "hinh": require('../assets/images/cuc_3.jpg'),
        "mota": "Hoa cúc tím"
      }, {
        "mahoa": 4,
        "tenloai": "Hoa Quà tặng",
        "tenhoa": "Nét duyên tím hoa cà",
        "dongia": 40000,
        "hinh": require('../assets/images/cuc_4.jpg'),
        "mota": "Hoa cúc màu tím nhạt"
      }, {
        "mahoa": 5,
        "tenloai": "Hoa Quà tặng",
        "tenhoa": "Cùng khoe sắc",
        "dongia": 70000,
        "hinh": require('../assets/images/cuc_5.jpg'),
        "mota": "Hoa cúc các màu: trắng, vàng, cam"
      }, {
        "mahoa": 6,
        "tenloai": "Hoa Quà tặng",
        "tenhoa": "Trắng thơ ngây",
        "dongia": 65000,
        "hinh": require('../assets/images/cuc_6.jpg'),
        "mota": "Hoa cúc trắng"
      }, {
        "mahoa": 7,
        "tenloai": "Hoa Hồng",
        "tenhoa": "Dây tơ hồng",
        "dongia": 250000,
        "hinh": require('../assets/images/cuoi_1.jpg'),
        "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
      }, {
        "mahoa": 8,
        "tenloai": "Hoa Hồng",
        "tenhoa": "Cầu thuỷ tinh",
        "dongia": 220000,
        "hinh": require('../assets/images/cuoi_2.jpg'),
        "mota": "Hoa hồng và hoa thuỷ tiên trắng"
      }, {
        "mahoa": 9,
        "tenloai": "Hoa Hồng",
        "tenhoa": "Duyên thầm",
        "dongia": 260000,
        "hinh": require('../assets/images/cuoi_3.jpg'),
        "mota": "Hoa cúc trắng, baby, lá măng"
      }, {
        "mahoa": 10,
        "tenloai": "Hoa Hồng",
        "tenhoa": "Ðâm chồi nảy lộc",
        "dongia": 180000,
        "hinh": require('../assets/images/cuoi_4.jpg'),
        "mota": "Hoa hồng trắng và các loại lá măng"
      }, {
        "mahoa": 11,
        "tenloai": "Hoa Hồng",
        "tenhoa": "Hoà quyện",
        "dongia": 270000,
        "hinh": require('../assets/images/cuoi_5.jpg'),
        "mota": "Hoa hồng trắng, lá thuỷ tùng"
      }, {
        "mahoa": 12,
        "tenloai": "Hoa Hồng",
        "tenhoa": "Nồng nàn",
        "dongia": 210000,
        "hinh": require('../assets/images/cuoi_6.jpg'),
        "mota": "Hoa hồng đỏ, lá thuỷ tùng, lá măng"
      }, {
        "mahoa": 13,
        "tenloai": "Hoa Tình Yêu",
        "tenhoa": "Together",
        "dongia": 120000,
        "hinh": require('../assets/images/hong_1.jpg'),
        "mota": "Hồng xác pháo, cúc tím"
      }, {
        "mahoa": 14,
        "tenloai": "Hoa Tình Yêu",
        "tenhoa": "Long trip",
        "dongia": 85000,
        "hinh": require('../assets/images/hong_2.jpg'),
        "mota": "Hoa hồng đỏ, lá kim thuỷ tùng"
      }, {
        "mahoa": 15,
        "tenloai": "Hoa Tình Yêu",
        "tenhoa": "Beautiful life",
        "dongia": 100000,
        "hinh": require('../assets/images/hong_3.jpg'),
        "mota": "Hoa hồng đỏ, lá măng, lá đệm"
      }, {
        "mahoa": 16,
        "tenloai": "Hoa Tình Yêu",
        "tenhoa": "Morning Sun",
        "dongia": 75000,
        "hinh": require('../assets/images/hong_4.jpg'),
        "mota": "Hoa hồng vàng"
      }, {
        "mahoa": 17,
        "tenloai": "Hoa Tình Yêu",
        "tenhoa": "Pretty Bloom",
        "dongia": 65000,
        "hinh": require('../assets/images/hong_5.jpg'),
        "mota": "Hoa hồng trắng và lá thông"
      }, {
        "mahoa": 18,
        "tenloai": "Hoa Tình Yêu",
        "tenhoa": "Red Rose",
        "dongia": 45000,
        "hinh": require('../assets/images/hong_7.jpg'),
        "mota": "Hoa hồng đỏ và lá măng"
      }, {
        "mahoa": 19,
        "tenloai": "Hoa Cưới",
        "tenhoa": "Vấn vuơng",
        "dongia": 150000,
        "hinh": require('../assets/images/xuan_1.jpg'),
        "mota": "Hoa hồng đỏ, hồng đậm, cúc đỏ, các loại lá"
      }, {
        "mahoa": 20,
        "tenloai": "Hoa Cưới",
        "tenhoa": "Nắng nhẹ nhàng",
        "dongia": 50000,
        "hinh": require('../assets/images/xuan_2.jpg'),
        "mota": "Hoa cúc xanh, hoa lys vàng, lá đệm"
      }, {
        "mahoa": 21,
        "tenloai": "Hoa Cưới",
        "tenhoa": "Thanh tao",
        "dongia": 120000,
        "hinh": require('../assets/images/xuan_3.jpg'),
        "mota": "Hoa thủy tiên, cúa trắng, cúc dại tím, các loại lá đệm"
      }, {
        "mahoa": 22,
        "tenloai": "Hoa Cưới",
        "tenhoa": "Tinh khiết",
        "dongia": 110000,
        "hinh": require('../assets/images/xuan_4.jpg'),
        "mota": "Hồng trắng và salem"
      }, {
        "mahoa": 23,
        "tenloai": "Hoa Cưới",
        "tenhoa": "Mùa xuân chín",
        "dongia": 150000,
        "hinh": require('../assets/images/xuan_5.jpg'),
        "mota": "Hồmg cam, cúc xanh, thuỷ tiên và các loại lá"
      }, {
        "mahoa": 24,
        "tenloai": "Hoa Cưới",
        "tenhoa": "Rực rở nắng vàng",
        "dongia": 75000,
        "hinh": require('../assets/images/xuan_6.jpg'),
        "mota": "Hồng vàng và cúc vàng"
      }, {
        "mahoa": 25,
        "tenloai": "Hoa Tình Yêu",
        "tenhoa": "Love Candy",
        "dongia": 95000,
        "hinh": require('../assets/images/hong_13.jpg'),
        "mota": "Hoa hồng trắng tinh khôi xen với hoa hồng màu hồng nhạt, điểm thêm baby trắng và lá măng"
      }, {
        "mahoa": 26,
        "tenloai": "Hoa Hồng",
        "tenhoa": "Happy Wedding",
        "dongia": 210000,
        "hinh": require('../assets/images/cuoi_9.jpg'),
        "mota": "Hoa hồng môn và các loại lá"
      }, {
        "mahoa": 27,
        "tenloai": "Hoa Quà tặng",
        "tenhoa": "Cúc nhiệt đới",
        "dongia": 150000,
        "hinh": require('../assets/images/cuc_15.jpg'),
        "mota": "Cúc vàng - h?ng cam - lá mang"
      }
        ];
    const hoachon=hoa.filter(layhoatheoloai);

    function layhoatheoloai(hoa) {
        return hoa.tenloai == tenloai;
       }
    return (
        <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Text style={styles.header}>Loại Hoa :{tenloai}</Text>
        <FlatList
        data={hoachon}
        renderItem={({item})=>(
            <View>
                <Text style={styles.text}>{item.tenhoa}</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('ChiTietHoa',{
                    maloai: item.maloai,
                    tenloai: item.tenloai,
                    tenhoa: item.tenhoa,
                    mahoa: item.mahoa,
                })}>
                    <Image source={item.hinh} style={styles.image}/>

                </TouchableOpacity>
                <Text>Giá Bán: {item.dongia}</Text>
            </View>

        )}
        ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      alignItems: "center",
      backgroundColor:"#F5DEB3"
    },
    texttitle: {
      fontSize: 16,
      color: "blue",
      textAlign: "center",
      marginTop: 8,
    },
    textprice: {
      fontSize: 15,
      color: "black",
      textAlign: "center",
      marginBottom: 15,
    },
    textcomp: {
      fontSize: 15,
      color: "black",
      textAlign: "left",
    },
    textclose: {
      fontSize: 25,
      color: "black",
      textAlign: "left",
      margin: 10,
    },
    centered_view: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffff",
    },
  });
export default Hoa;
