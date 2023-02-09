import {View, VStack} from 'components/core';
import {Body} from 'components/text';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AvalancheCenterID} from 'types/nationalAvalancheCenter';
import Topo from 'assets/topo.svg';
import {Button} from 'components/content/Button';
import {useNavigation} from '@react-navigation/native';
import {ObservationsStackNavigationProps} from 'routes';
import {apiDateString} from 'utils/date';

export const ObservationsPortal: React.FC<{
  center_id: AvalancheCenterID;
  date: Date;
}> = ({center_id, date}) => {
  const navigation = useNavigation<ObservationsStackNavigationProps>();
  return (
    <View width="100%" height="100%" bg="white">
      {/* SafeAreaView shouldn't inset from bottom edge because TabNavigator is sitting there */}
      <SafeAreaView edges={['top', 'left', 'right']} style={{height: '100%', width: '100%', position: 'relative'}}>
        {/* these magic numbers are yanked out of Figma. They could probably be converted to percentages */}
        <Topo width={887.0152587890625} height={456.3430480957031} style={{position: 'absolute', left: -306.15625, bottom: -60}} />
        <VStack height="100%" width="100%" justifyContent="center" alignItems="stretch" space={16} px={32} pb={200}>
          <Body textAlign="center">Help keep the NWAC community informed by submitting your observation.</Body>
          <Button buttonStyle="primary" onPress={() => navigation.navigate('observationSubmit', {center_id})}>
            <Body>Submit an observation</Body>
          </Button>
          <Button onPress={() => navigation.navigate('observationsList', {center_id, dateString: apiDateString(date)})}>
            <Body>View all observations</Body>
          </Button>
        </VStack>
      </SafeAreaView>
    </View>
  );
};
