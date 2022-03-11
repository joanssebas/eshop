import React, {useState, useEffect} from "react";
import {Image, StyleSheet, Dimensions, View, ScrollView} from "react-native";
import Swiper from "react-native-swiper/src";

var {width} = Dimensions.get("window");

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      "https://cdn.vox-cdn.com/thumbor/P89rPylJxk7ks3FVw5HDE9mgds8=/0x173:2450x1456/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/20081590/ps5.png",
      "https://www.destreaming.es/wp-content/uploads/2020/11/pc_para_streaming_gaming.jpg",
      "https://cdn.tech-latest.com/wp-content/uploads/2021/09/Apple-iPhone-13-5-1024x576.jpg",
      "https://www.soyfutbol.com/__export/1557939243447/sites/debate/img/2019/05/15/fifa_19_portada.jpg_1364161016.jpg",
    ]);

    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            style={{height: width / 2}}
            showButtons={false}
            autoplay={true}
            autoplayTimeout={2}
          >
            {bannerData.map((item) => {
              return (
                <Image
                  key={item}
                  style={styles.imageBanner}
                  resizeMode="contain"
                  source={{uri: item}}
                />
              );
            })}
          </Swiper>
          <View style={{height: 20}}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Banner;
