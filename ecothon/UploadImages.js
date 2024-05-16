import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker"; // Import ImagePicker from Expo

const UploadImages = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access media library denied");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedFile(result.uri); // Store the URI of the selected image
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", {
      uri: selectedFile,
      name: selectedFile.split("/").pop(), // Extract file name from URI
      type: "image/jpeg", // Adjust the file type if necessary
    });
    formData.append("upload_preset", "greengame");
    formData.append("cloud_name", "dtordrjof");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dtordrjof/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleFileChange}>
        <Text style={styles.buttonText}>Select Image</Text>
      </TouchableOpacity>
      {/* {selectedFile ? (
      //   <Image source={{ uri: selectedFile }} style={styles.image} />
      // ) : (
      //   // <Image style={styles.image} source={require("./assets/login.png")} />
      )} */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // button: {
  //   backgroundColor: "#80A87D",
  //   padding: 10,
  //   borderRadius: 5,
  //   marginTop: 10,
  // },
  // buttonText: {
  //   color: "white",
  //   fontSize: 16,
  // },
   image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row', // Set flexDirection to 'row' to make the buttons align side by side
    //alignItems: 'center', // Align items in the center horizontally
    justifyContent: 'space-around', // Distribute space around the buttons
  },
  button: {
  //   backgroundColor: "#80A87D",
    backgroundColor: '#80A87D',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
  },
});

export default UploadImages;
