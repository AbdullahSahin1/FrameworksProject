import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
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
