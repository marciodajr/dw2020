import React from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { Profile } from './screens';
import {   Background } from './components/DwUI/Background';

const App: React.FC = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Background>
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <Profile />
        </ScrollView>
      </Background>
    </>
  );
};

export default App;
