import { View, Image, Text, StyleSheet } from 'react-native';
import Colors from '../Component/Colors';
import Title from '../Component/Title';
import PrimeButton from '../Component/PrimeButton';
function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title > GAMEOVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/657379136.jpg')}
        />
      </View>
      <Text style={styles.summaryText}>
      يحتاج هاتفك<Text style={styles.highlight}>{roundsNumber}</Text>{' '}
       جولات لتخمين الرقم {' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimeButton onPress={onStartNewGame}>ابدأ لعبة جديدة</PrimeButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});