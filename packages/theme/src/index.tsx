import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
// import { FAB } from "./src/FAB/FAB";

const s = StyleSheet.create({
  button: {
    backgroundColor: "#f00",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
export const ButtonComp = () => {
  return (
    <>
      {/* <Tab value={0}>
        <TabItem title="Tab 1" />
        <TabItem title="Tab 2" />
        <TabItem title="Tab 3" />
      </Tab> */}
      {/* 
      <FAB title={"FAB"} />
      <Button title="working" /> */}
      <Pressable style={s.button}>
        <Text>Yes Working...</Text>
      </Pressable>
    </>
  );
};

// export * from "./src";
