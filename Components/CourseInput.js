import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

export default function CourseInput({ visible,onAddProgram,onCancel }) {
  const [enteredCourseText, setEnteredCourseText] = useState("");
  const addCourseHandler = () => {
    onAddProgram(enteredCourseText)
    setEnteredCourseText('');
  };
  
  return (
    <Modal style={styles.centeredView} animationType="slide" visible={visible}>
      <View style={styles.centeredView}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/Images/mobile.jpg")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Merak Ettiğiniz Mobil Programlama Dilini Giriniz"
          value={enteredCourseText}
          onChangeText={(text) => setEnteredCourseText(text)}
        />
        <View style={styles.modalView}>
          <View>
            <Button
              style={styles.buttonContainer}
              title="İptal"
              color={"#900D09"}
              onPress={onCancel}
            ></Button>
          </View>
          <View>
            <Button
              style={styles.buttonContainer}
              title="Araştır"
              color={"#004225"}
              onPress={addCourseHandler}
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 380,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
  centeredView: {
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    backgroundColor: "silver",
    padding: 20,
  },
  modalView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  textInput: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "black",
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
});
