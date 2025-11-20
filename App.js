import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
  const links = [
    {
      title: "Instagram",
      icon: "logo-instagram",
      url: "https://instagram.com/master_group",
    },
    {
      title: "YouTube",
      icon: "logo-youtube",
      url: "https://youtube.com/master_group",
    },
    {
      title: "Discord",
      icon: "logo-discord",
      url: "https://discord.gg/mastergroup",
    },
    {
      title: "Game Website",
      icon: "globe-outline",
      url: "https://mastergroup.com",
    },
    {
      title: "Altera: The Arcane Age",
      icon: "game-controller-outline",
      url: "https://mastergroup.com/altera",
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* LOGO */}
      <Image
        source={{ uri: "https://i.ibb.co/ZXm6M0P/master-group-logo.png" }}
        style={styles.logo}
      />

      <Text style={styles.title}>Master Group</Text>
      <Text style={styles.subtitle}>All official links in one place</Text>

      {/* Buttons */}
      {links.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => openLink(item.url)}
        >
          <Icon name={item.icon} size={22} color="white" style={{ marginRight: 10 }} />
          <Text style={styles.buttonText}>{item.title}</Text>
        </TouchableOpacity>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 50,
    backgroundColor: "#0D1B2A", // Darkish Blue
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "white",
  },
  subtitle: {
    fontSize: 14,
    color: "#A8B5C9",
    marginBottom: 30,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1B263B",
    paddingVertical: 14,
    paddingHorizontal: 22,
    width: "85%",
    borderRadius: 14,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#415A77",
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
});
