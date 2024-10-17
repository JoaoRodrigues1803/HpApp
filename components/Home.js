import { StyleSheet, Text, View, ScrollView, ImageBackground, ScrollViewComponent } from 'react-native';
import fundoApp from '../assets/fundoApp.png';

export default function Home() {
  return (
    <ImageBackground style={styles.container} imageStyle={{
      height:'100%' ,
      width:450
    }}
      source={fundoApp}
        
    >
      <View>
        <Text style={styles.Titulo}>
          Health Pet
        </Text>
      </View>
      <View>

      </View>


    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image:{
    flex: 1,
    justifyContent: 'center',
  },
  Titulo:{
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 150,
    color:'#fff'
  }
});
