import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import CourseInput from "./Components/CourseInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [program, setProgram] = useState([]);

  const startModal = () => {
    setModalIsVisible(true);
  };

  const endModal = () => {
    setModalIsVisible(false);
  };

  const addProgram = (courseTitle) => {
    setProgram((currentProgram) => [
      ...currentProgram,
      { tech: courseTitle, id: Math.random().toString() },
    ]);
    endModal();
  };


  const getImageSource = (tech) => {
    switch (tech.toLowerCase()) {
      case "dart":
        return require("./assets/Images/dart.png");
      case "flutter":
        return require("./assets/Images/flutter.png");
      case "xamarin":
        return require("./assets/Images/xamarin.png");
      case "go":
        return require("./assets/Images/go.png");
      case "react native":
        return require("./assets/Images/native.png");
      case "ruby":
        return require("./assets/Images/ruby.png");
      case "swift":
        return require("./assets/Images/swift.png");
      case "kotlin":
        return require("./assets/Images/kotlin.png");
    }
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Button
          title="Programlama Ekle"
          color={"#4CAF50"}
          onPress={startModal}
        />
        <CourseInput
          visible={modalIsVisible}
          onAddProgram={addProgram}
          onCancel={endModal}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={program}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Image
                  source={getImageSource(item.tech)}
                  style={styles.listImage}
                />
                <Text style={styles.listText}>{item.tech}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  listContainer: {
    marginTop: 20,
  },
  listItem: {
    backgroundColor: "#2196F3",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  listText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  listImage: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
});

});
