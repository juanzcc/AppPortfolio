import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Feed() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: "#d3d3d3"}}>
      <Image 
        source={require('./assets/Juan.png')}
        style={styles.imgProfile}
      />
      <Text style={styles.fontTextTitle}>Tudo Bem!!</Text>  
      <Text style={styles.fontTextTitle}>Me chamo Juan!</Text>
      <Text style={styles.fontText}>Software Developer</Text>
      <Text style={styles.fontTextConect}>Vamos nos conectar?!</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/juanzcc')}>
          <Image 
            source={require('./assets/github.png')}
            style={styles.imgIcons}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/juan-zamarrenho-carvalho-correa-9723bb150/')}>
          <Image 
            source={require('./assets/linkedin.png')}
            style={styles.imgIcons}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('http://wa.me/5511962570567')}>
          <Image 
            source={require('./assets/WhatsApp.png')}
            style={styles.imgIcons}
          /> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:juanzcc12@hotmail.com')}>
          <Image 
            source={require('./assets/Email.png')}
            style={styles.imgIcons}
          /> 
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}

function Sobre() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center'}}>
      <Text style={styles.fontTextTitle}>Quem é Juan ?</Text>
      <Text>_________________</Text>
      <View style={{width: 370}}>
        <Text style={styles.fontSobreMim}>Desenvolvedor de sistemas graduado pela Faculdade de Tecnologia de São Caetano do Sul (FATEC - Antonio Russo) no curso de Análise e Desenvolvimento de Sistemas.</Text>
        <Text style={styles.fontSobreMim}>Atualmente estou cursando direito na Uninove, por achar que todos devem saber seus direitos. Além disso estou cursando uma pos graduação em Segurança Pública e Inteligencia, por gostar do tema. No futuro planejo unir os estudos de Tecnologia com os de direitos, para me especializar cada vez mais nos dois temas</Text>
        <Text style={styles.fontSobreMim}>Estagiei voluntariamente na propria fatec onde tive que utilizar as seguinte tecnologias: JavaScript, Html, CSS, MySql. Trabalhei através do projeto jovem em ação de São Caetano do Sul, como Auxiliar Administrativo, utilizei: Pacote Office, principalmente excel.</Text>
        <Text style={styles.fontSobreMim}>Busco me aprimorar participando de cursos em plataformas como Udemy e IGTI a fim de me manter atualizado com tecnologias atuais. Tenho como proximo objetivo melhorar cada vez mais em tecnologias que envolvam javascript, o desenvolvimento mobile e o godot engine.</Text>
        <Text style={styles.fontSobreMim}>Na área Projetos, disponho de alguns projetos desenvolvidos tanto em âmbito acadêmico quanto de estudos pessoais.</Text>
        </View>
      <TouchableOpacity style={styles.buttonCV} onPress={() => Linking.openURL('https://drive.google.com/file/d/1EoGL4aaArXyJeYKsIv7DUbcGycs8w3fB/view?usp=sharing')}>
        <Text style={{ fontSize: 18,color: "black", fontWeight: "bold"}}>Confira Meu CV</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function Tecnologias() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Text style={styles.fontText}>Confira as tecnologias que mais utilizo</Text>
      <Text>_________________</Text>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <Image 
            source={require('./assets/react-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20}}>React Native</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image 
            source={require('./assets/javascript-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20}}>JavaScript</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image 
            source={require('./assets/nodejs-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20}}>NodeJs</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image 
            source={require('./assets/godot-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20}}>Godot</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image 
            source={require('./assets/csharp-line.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20}}>Csharp</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image 
            source={require('./assets/java-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20}}>Java</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image 
            source={require('./assets/html5-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20}}>HTML</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image 
            source={require('./assets/css3-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20}}>CSS</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image 
            source={require('./assets/react-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20}}>React</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image 
            source={require('./assets/vuejs-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20}}>VueJs</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image 
            source={require('./assets/mysql-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20}}>MySQL</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image 
            source={require('./assets/mongodb-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20}}>MongoDB</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image 
            source={require('./assets/github.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20}}>Github</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Projetos() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Text style={styles.fontText}>Confira alguns de meus projetos!</Text>
      <Text>_________________</Text>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://juanzcc.netlify.app/')}>
            <Image 
              source={require('./assets/www.png')}
              style={styles.imgIcons}
            /> 
          </TouchableOpacity>
          <Text style={{ fontSize: 20, padding: 20}}>Website portfolio</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/juanzcc/CalculadoraIMC_Mobile')}>
            <Image 
              source={require('./assets/github.png')}
              style={styles.imgIcons}
            /> 
          </TouchableOpacity>
          <Text style={{ fontSize: 20, padding: 20}}>Calculadora de IMC - Mobile</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/juanzcc/CalculadoraIMC')}>
            <Image 
              source={require('./assets/github.png')}
              style={styles.imgIcons}
            /> 
          </TouchableOpacity>
          <Text style={{ fontSize: 20, padding: 20}}>Calculadora de IMC</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/juanzcc/EZPay')}>
            <Image 
              source={require('./assets/github.png')}
              style={styles.imgIcons}
            /> 
          </TouchableOpacity>
          <Text style={{ fontSize: 20, padding: 20}}>EZPay - TCC</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/juanzcc/FallingBallGame')}>
            <Image 
              source={require('./assets/github.png')}
              style={styles.imgIcons}
            /> 
          </TouchableOpacity>
          <Text style={{ fontSize: 20, padding: 20}}>Falling Ball Game</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/juanzcc/OneVikingVsSixGolemsGame')}>
            <Image 
              source={require('./assets/github.png')}
              style={styles.imgIcons}
            /> 
          </TouchableOpacity>
          <Text style={{ fontSize: 20, padding: 20}}>One Viking Vs Golems Game</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/juanzcc/SpriteAnimationProject')}>
            <Image 
              source={require('./assets/github.png')}
              style={styles.imgIcons}
            /> 
          </TouchableOpacity>
          <Text style={{ fontSize: 20, padding: 20}}>Projeto de Animação de Sprite</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/juanzcc/myCamera')}>
            <Image 
              source={require('./assets/github.png')}
              style={styles.imgIcons}
            /> 
          </TouchableOpacity>
          <Text style={{ fontSize: 20, padding: 20}}>Projeto Camera - Mobile</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/juanzcc/GuiaPerguntas')}>
            <Image 
              source={require('./assets/github.png')}
              style={styles.imgIcons}
            /> 
          </TouchableOpacity>
          <Text style={{ fontSize: 20, padding: 20}}>Projeto Guia de Perguntas</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/juanzcc/pokedex')}>
            <Image 
              source={require('./assets/github.png')}
              style={styles.imgIcons}
            /> 
          </TouchableOpacity>
          <Text style={{ fontSize: 20, padding: 20}}>Projeto Pokedex</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={() => Linking.openURL('https://github.com/juanzcc/RunningGame')}>
            <Image 
              source={require('./assets/github.png')}
              style={styles.imgIcons}
            /> 
          </TouchableOpacity>
          <Text style={{ fontSize: 20, padding: 20}}>Running Game</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/juanzcc/SnakeGame')}>
            <Image 
              source={require('./assets/github.png')}
              style={styles.imgIcons}
            /> 
          </TouchableOpacity>
          <Text style={{ fontSize: 20, padding: 20}}>Snake Game</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Sobre Mim"
        component={Sobre}
        options={{
          tabBarLabel: 'Sobre Mim',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tecnologias"
        component={Tecnologias}
        options={{
          tabBarLabel: 'Tecnologias',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="database" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Projetos"
        component={Projetos}
        options={{
          tabBarLabel: 'Projetos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="billboard" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  imgProfile: {
    marginTop: 10,
    width: 330,
    height: 320,
    borderRadius: 300,
  },
  imgIcons:{
    marginTop: 15,
    width: 40,
    height: 40,
    resizeMode: 'contain',  
    marginLeft: 10,
  },
  fontTextTitle:{
    marginTop: 15,
    fontSize: 30, 
    color: "#1C1C1C",
  },
  fontText:{
    marginTop: 15,
    fontSize: 22,
    color: "#363636",
  },
  fontTextConect:{
    marginTop: 80,
    fontSize: 30,
    color: "#1C1C1C",
  },
  fontSobreMim:{
    marginTop: 10,
    fontSize: 18, 
    color: "#363636",
    textAlignVertical: "center",
    textAlign: "justify",
  },
  buttonCV:{
    marginTop: 17,
    padding: 10,
    width: "35%",
    borderRadius: 50,
    backgroundColor: "#d3d3d3",
    alignItems: "center"
  },
  scrollView: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 42,
  },
})

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}