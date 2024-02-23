import { View, Text, Image, TouchableOpacity, SafeAreaView, } from 'react-native';
import { useNavigation, CommonActions } from "@react-navigation/native";
import Colors from '../../../utils/colors';
import Button from '../../../Components/CustomButton';
import CustomInput from '../../../Components/input_component';
import Loader from '../../../Components/Loader';
import { useLoginScreenLogic } from '../Data/LoginScreenUseCase';
import styles from '../LoginStyles/LoginStyles';
import StringConstants from '../../../utils/StringConstants';
import { useDispatch, useSelector } from 'react-redux';
import PopupMenu from '../../../Components/EnvironmentSetting';
import { Menu, Divider, Provider } from 'react-native-paper';



const LoginScreen = () => {
  const navigation = useNavigation();
  const environment = useSelector(state => state.environment);
  // console.log('kkdsjfksd', environment)
  const { inputs, errors, loading, popupVisible, validate, handleOnchange, handleSignUp, handleError, onClosePopupMenu, onOpenPopupMenu, handleSwitchToDev, handleSwitchToStage, handleSwitchToProd } = useLoginScreenLogic();

  return (

    <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
      <Loader visible={loading} />
      <View style={{ marginHorizontal: 20 }} >
        <View style={{ flexDirection: 'row', paddingVertical: 30 }}>
          <PopupMenu />
          <Text style={{ color: Colors.black, paddingVertical: 20 }}>Current Environment:</Text>
          <Text style={{ color: Colors.primariColor, paddingVertical: 20, fontWeight: '800' }}>{environment.environmentalName}</Text>
        </View>
        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
          <Image
            style={styles.logo}
            source={require('../../../assets/images/bitverx_logo.jpeg')}
          />
        </View>
        <CustomInput
          onChangeText={text => handleOnchange(text, 'email')}
          onFocus={() => handleError(null, 'email')}
          iconName="email"
          // label="Email"  label is optional
          placeholder={StringConstants.ENTER_EMAIL}
          error={errors.email}

        />
        <CustomInput
          onChangeText={text => handleOnchange(text, 'password')}
          onFocus={() => handleError(null, 'password')}
          iconName="lock-outline"
          // label="Password"
          placeholder={StringConstants.ENTER_PASSWORD}
          error={errors.password}
          password
        />

        <Button title={StringConstants.LOGIN} onPress={validate} />

        <View style={{ justifyContent: 'center', flexDirection: 'row', marginVertical: 20 }}>
          <Text >
            {StringConstants.DONT_HAVE_ACOUNT}
          </Text >
          <TouchableOpacity onPress={handleSignUp}>

            <Text style={{ color: Colors.primariColor, paddingHorizontal: 5, fontWeight: '600' }}>
              {StringConstants.SIGN_UP}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

  );
};
export default LoginScreen;