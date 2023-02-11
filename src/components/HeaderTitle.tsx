import { Text, StyleSheet, View } from "react-native"
import React from "react"
type titletype = {
  title: string
}
export const HeaderTitle = ({ title }: titletype) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  text: {
    fontWeight: "bold",
    fontSize: 22,
    color: 'black'
  }
})
