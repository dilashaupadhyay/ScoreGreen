import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

const DonationSection = () => {
  const handleEmailSend = async (donationType) => {
    try {
      const { status } = await MailComposer.composeAsync({
        recipients: ['greengamers@donation.com'], // Add your recipient email address
        subject: `Donation for ${donationType}`,
        body: `I would like to donate for ${donationType}.`,
      });

      if (status === 'sent') {
        console.log('Email sent successfully');
      } else {
        console.log('Email not sent');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>We Manage Wastage or Donation like..</Text>
      </View>
      <View style={styles.row}>
        {/* Donation boxes */}
        <View style={styles.column}>
          <TouchableOpacity style={styles.donBox} onPress={() => handleEmailSend('Clothes')}>
            <Image source={require('./img/don/clothing.png')} style={styles.image} />
            <Text style={styles.donBoxText}>Clothes</Text>
            <Text style={styles.donBoxDesc}>Lorem ipsum dolor sit amet consectetur.</Text>
            <Text style={styles.btnText}>Donate Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.donBox} onPress={() => handleEmailSend('Footware')}>
            <Image source={require('./img/don/sneakers.png')} style={styles.image} />
            <Text style={styles.donBoxText}>Footware</Text>
            <Text style={styles.donBoxDesc}>Lorem ipsum dolor sit amet consectetur.</Text>
            <Text style={styles.btnText}>Donate Now</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.column}>
          <TouchableOpacity style={styles.donBox} onPress={() => handleEmailSend('Gadgets')}>
            <Image source={require('./img/don/gadgets.png')} style={styles.image} />
            <Text style={styles.donBoxText}>Gadgets</Text>
            <Text style={styles.donBoxDesc}>Lorem ipsum dolor sit amet consectetur.</Text>
            <Text style={styles.btnText}>Donate Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.donBox} onPress={() => handleEmailSend('Stationary')}>
            <Image source={require('./img/don/book.png')} style={styles.image} />
            <Text style={styles.donBoxText}>Stationary </Text>
            <Text style={styles.donBoxDesc}>Lorem ipsum dolor sit amet consectetur.</Text>
            <Text style={styles.btnText}>Donate Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.donBox} onPress={() => handleEmailSend('Clothes')}>
            <Image source={require('./img/don/shopping-bag.png')} style={styles.image} />
            <Text style={styles.donBoxText}>Food</Text>
            <Text style={styles.donBoxDesc}>Lorem ipsum dolor sit amet consectetur.</Text>
            <Text style={styles.btnText}>Donate Now</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.column}>
          <TouchableOpacity style={styles.donBox}>
            <Image source={require('./img/don/salary.png')} style={styles.image} />
            <Text style={styles.donBoxText}>Fund</Text>
            <Text style={styles.donBoxDesc}>Lorem ipsum dolor sit amet consectetur.</Text>
            <Text style={styles.btnText}>Donate Now</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#C3E2C2',
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    heading: {
      marginBottom: 20,
    },
    headingText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    column: {
      width: '45%',
      marginBottom: 20,
    },
    donBox: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      alignItems: 'center',
    },
    image: {
      width: 70,
      height: 70,
      marginBottom: 10,
    },
    donBoxText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    donBoxDesc: {
      marginBottom: 15,
      color: '#666',
    },
    btnText: {
      color: '#4CAF50',
      fontWeight: 'bold',
    },
  });
  
  export default DonationSection;



