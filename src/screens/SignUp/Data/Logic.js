import { useState } from 'react';
import { Alert,Keyboard } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, CommonActions } from "@react-navigation/native";
export const useSignUpScreenLogic = () => {
  const [inputs, setInputs] = useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleChoosePhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleTakePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    const isValid = validate();
    if (isValid) {
      if (image === null) {
        Alert.alert('Please choose photo');
        return;
      }
      if (!isChecked) {
        Alert.alert('Please check the Terms and Conditions checkbox.');
        return;
      }
      register();
    }
  };
  const handleSignIn = async () => {
    navigation.navigate('Login');
  }
  const validate = () => {
    Keyboard.dismiss();
    const errors = {};
    let isValid = true;

    if (!inputs.email) {
      errors.email = 'Please input email';
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      errors.email = 'Please input a valid email';
      isValid = false;
    }

    if (!inputs.fullname) {
      errors.fullname = 'Please input fullname';
      isValid = false;
    }

    if (!inputs.phone) {
      errors.phone = 'Please input phone number';
      isValid = false;
    }

    if (!inputs.password) {
      errors.password = 'Please input password';
      isValid = false;
    } else if (inputs.password.length < 5) {
      errors.password = 'Min password length of 5';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };
  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        // AsyncStorage.setItem('userData', JSON.stringify(inputs));
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };
  const navigateToWebView = async () => {
    navigation.navigate('TermsAndConditions');
  }
  return {
    inputs,
    image,
    errors,
    loading,
    isChecked,
    validate,
    handleChoosePhoto,
    handleTakePhoto,
    handleCheckBoxChange,
    handleSubmit,
    handleOnchange,
    handleError,
    handleSignIn,
    navigateToWebView,
  };
};
