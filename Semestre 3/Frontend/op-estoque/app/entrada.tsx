import { View, Text, ImageBackground, StyleSheet } from "react-native";

export default function entrada(){
    return(
        
            <ImageBackground
                  source={require('../assets/dirt.png')}
                  style={styles.container}
                  resizeMode="repeat"
                ><Text style={{ color: '#fff' }}>entrada</Text></ImageBackground>
           
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"100%",
    width:"100%"
  },

  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },

  button: {
    width: '100%',
    backgroundColor: '#4ade80', // verde estilo Minecraft
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#064e3b',
    fontSize: 16,
    fontWeight: 'bold',
  },

  secondaryButton: {
    marginTop: 10,
  },

  secondaryText: {
    color: '#fff',
    fontSize: 14,
  },
});