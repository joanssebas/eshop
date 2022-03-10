import React from "react";
import {TouchableOpacity, View, Dimensions} from "react-native";

//screens
import ProductCard from "./ProductCard";
//dimensions para hacerlo adaptar a la apnatalla
var {width} = Dimensions.get("window");

const ProductList = (props) => {
  const {item} = props;
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("Product Detail", {item: item})}
      style={{width: "50%"}}
    >
      <View style={{width: width / 2, backgroundColor: "gainsboro"}}>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;
