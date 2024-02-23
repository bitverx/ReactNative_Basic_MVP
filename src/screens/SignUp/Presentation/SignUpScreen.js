
import CustomInput from '../../../Components/input_component';
import COLORS from '../../../utils/colors';
import Loader from '../../../Components/Loader';
import Button from '../../../Components/CustomButton';
import Checkbox from 'expo-checkbox';



import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useSignUpScreenLogic } from '../Data/Logic';
import styles from '../Styles/Style';

const SignUpScreenUI = () => {
  const {
    image,
    errors,
    loading,
    isChecked,
    handleChoosePhoto,
    handleTakePhoto,
    handleCheckBoxChange,
    handleSubmit,
    handleOnchange,
    handleError,
    handleSignIn,
    navigateToWebView,
  } = useSignUpScreenLogic();

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 20, paddingHorizontal: 20 }}>
        <View>
          <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={{ color: COLORS.primariColor, fontSize: 32, marginVertical: 10, fontWeight: "800", justifyContent: 'center', textAlignVertical: 'center' }}>
              SignUp
            </Text>
          </View>
          <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10, justifyContent: 'center', textAlignVertical: 'center' }}>
              Enter Your Details to Register
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {image ? (
              <Image source={{ uri: image }} style={{ width: 150, height: 150, borderRadius: 100 }} />
            ) : (
              <Image source={require('../../../assets/images/placeholder.jpeg')} style={{ width: 150, height: 150, borderRadius: 100 }} />
            )}
            <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
              <Text>Choose Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
              <Text>Take Photo</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 20 }}>
            <CustomInput
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              iconName="email"
              placeholder="Enter your email address"
              error={errors.email}
            />
            <CustomInput
              onChangeText={text => handleOnchange(text, 'fullname')}
              onFocus={() => handleError(null, 'fullname')}
              iconName="account-outline"
              placeholder="Enter your full name"
              error={errors.fullname}
            />
            <CustomInput
              keyboardType="numeric"
              onChangeText={text => handleOnchange(text, 'phone')}
              onFocus={() => handleError(null, 'phone')}
              iconName="phone-outline"
              placeholder="Enter your phone no"
              error={errors.phone}
            />
            <CustomInput
              onChangeText={text => handleOnchange(text, 'password')}
              onFocus={() => handleError(null, 'password')}
              iconName="lock-outline"
              placeholder="Enter your password"
              error={errors.password}
              password
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={handleCheckBoxChange} />
            <Text style={{ marginLeft: 10 }}>I agree to the</Text>
            <TouchableOpacity onPress={navigateToWebView}>
              <Text style={{ color: COLORS.primariColor, paddingHorizontal: 5, fontWeight: '600' }}>
                Terms & Conditions
              </Text>
            </TouchableOpacity>
          </View>
          <Button title="Sign Up" onPress={handleSubmit} />
          <View style={{ justifyContent: 'center', flexDirection: 'row', marginVertical: 20 }}>
            <Text>
              Already have account?
            </Text>
            <TouchableOpacity onPress={handleSignIn}>
              <Text style={{ color: COLORS.primariColor, paddingHorizontal: 5, fontWeight: '600' }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreenUI;

