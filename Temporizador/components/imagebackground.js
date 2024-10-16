// Background.js
import { ImageBackground, StyleSheet } from 'react-native';

export default function Background({ children }) {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1642850356603-ca6295576249?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3',
      }}
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
