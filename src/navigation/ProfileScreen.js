import React from 'react';
import {Text, View, Button} from 'react-native';

const ProfileScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{`This is profile for ${route.params.name}`}</Text>
      <Button
        title="Go to home screen"
        onPress={() =>
          navigation.navigate('Home', {post: 'Redirected from prolile'})
        }
      />
    </View>
  );
};

export default ProfileScreen;
