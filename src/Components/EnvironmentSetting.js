
import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLoginScreenLogic } from '../screens/Login/Data/LoginScreenUseCase';

const PopupMenu = () => {

    const { popupVisible, onClosePopupMenu, onOpenPopupMenu, handleSwitchToDev, handleSwitchToStage, handleSwitchToProd } = useLoginScreenLogic();



    return (

        <View
            style={{
                marginVertical: 10,

                flexDirection: 'row',
                justifyContent: 'start',



            }}>
            <Menu
                visible={popupVisible}
                onDismiss={onClosePopupMenu}
                anchor={<Button onPress={onOpenPopupMenu}>
                    <MaterialCommunityIcons
                        name='power-settings'
                        style={{ fontSize: 22, marginRight: 10 }}
                    />
                </Button>}>
                <Menu.Item onPress={handleSwitchToDev} title="Dev" />
                <Divider />
                <Menu.Item onPress={handleSwitchToStage} title="Stage" />
                <Divider />
                <Menu.Item onPress={handleSwitchToProd} title="Prod" />
            </Menu>
        </View>

    );
};

export default PopupMenu;