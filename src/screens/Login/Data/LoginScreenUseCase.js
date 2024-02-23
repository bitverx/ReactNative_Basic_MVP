// LoginScreenLogic.js
import { useState } from 'react';
import { Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { validateEmail, validatePassword } from './LoginScreenLogic';
import { navigateToHome } from '../Navigation/LoginScreenNavigation';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation, CommonActions } from "@react-navigation/native";
import { setEnv } from '../../../redux/Reducers/EnvironmentalSlice';
import Constants from '../../../utils/Constants';

export const useLoginScreenLogic = () => {
  const navigation = useNavigation();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSwitchToDev = () => {
    dispatch(
      setEnv({
        apiUrl: Constants.BASE_API_URL_DEV,
        bannerUrl: Constants.BASE_API_URL_DEV,
        environmentalName: Constants.DEV,
      })
    );
    onClosePopupMenu();

  };

  const handleSwitchToStage = () => {
    dispatch(
      setEnv({
        apiUrl: Constants.BASE_API_URL_STAGE,
        bannerUrl: Constants.BASE_API_URL_STAGE,
        environmentalName: Constants.STAGE,

      })
    );
    onClosePopupMenu();
  };

  const handleSwitchToProd = () => {
    dispatch(
      setEnv({
        apiUrl:Constants.BASE_API_URL_PROD,
        bannerUrl: Constants.BASE_API_URL_PROD,
        environmentalName: Constants.PROD,

      })
    );
    onClosePopupMenu();

  };
  const onClosePopupMenu = () => {
    setPopupVisible(false);
  }
  const onOpenPopupMenu = () => {
    setPopupVisible(true);
  }

  const validate = () => {
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!validateEmail(inputs.email)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (!validatePassword(inputs.password)) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        setLoading(false);
        const token = 'abdul123';
        await SecureStore.setItemAsync("token", token);

        navigateToHome(navigation,CommonActions);
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };
  const handleSignUp = async () => {
    navigation.navigate('SignUp');
  };

  return {
    inputs,
    errors,
    loading,
    popupVisible,
    validate,
    handleOnchange,
    handleSignUp,
    handleError,
    handleSwitchToDev,
    handleSwitchToProd,
    handleSwitchToStage,
    onClosePopupMenu,
    onOpenPopupMenu,
  };
};