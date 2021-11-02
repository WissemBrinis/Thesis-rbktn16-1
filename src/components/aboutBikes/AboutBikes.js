import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import axios from "axios";

function AboutBikes() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    axios.get(" http://192.168.11.162:3000/bicycle ").then((response) => {
      setData(response);
      console.log(data);
    });
  }, []);

  return (
    <View>
      <Text>hello data is not here yet</Text>
      {data.map((e, key) => {
        <Image key={key}>{e.photo}</Image>;
      })}
    </View>
  );
}

export default AboutBikes;
