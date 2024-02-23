// { <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
//           <Text>Choose Photo</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
//           <Text>Take Photo</Text>
//         </TouchableOpacity>
//       </View>
//       <Button title="Sign Up" onPress={validate} />
//       {{errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : null} }
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//     </View>
//     const handleChoosePhoto = async () => {
//         const result = await ImagePicker.launchImageLibraryAsync({
//           mediaTypes: ImagePicker.MediaTypeOptions.Images,
//           allowsEditing: true,
//           aspect: [4, 3],
//           quality: 1,
//         });
    
//         console.log(result);
    
//         if (!result.canceled) {
//           setImage(result.assets[0].uri);
//         }
//       };
    
//       const handleTakePhoto = async () => {
//         const result = await ImagePicker.launchCameraAsync({
//           allowsEditing: true,
//           aspect: [4, 3],
//           quality: 1,
//         });
    
//         console.log(result);
    
//         if (!result.canceled) {
//           setImage(result.assets[0].uri);
//         }
//       }; */}