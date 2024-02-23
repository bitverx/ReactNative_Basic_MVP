import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import COLORS from '../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomInput = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => { },
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{ marginBottom: 10 }}>
       {label ? <Text style={style.label}>{label}</Text> : null}
      <View
        style={[
          style.inputContainer,
          {

            borderColor: error
              ? COLORS.red
              : isFocused
                ? COLORS.primariColor
                : COLORS.grey,
            alignItems: 'center',
          },
        ]}>
        <MaterialCommunityIcons
          name={iconName}
          style={{ color:isFocused? COLORS.primariColor: COLORS.grey, fontSize: 22, marginRight: 10 }}
        />
        <TextInput
          autoCorrect={false}
          
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{ color: COLORS.primariColor, flex: 1 }}
          {...props}
        />
        {password && (
          <MaterialCommunityIcons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{ color: COLORS.primariColor, fontSize: 22 }}
          />
        )}
      </View>
      {error && (
        <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10
  },
});

export default CustomInput;