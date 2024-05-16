// import React, { useEffect, useRef, useState } from 'react';
// import { Animated, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

// const Leaderboard = () => {
//   const leaderboardData = [
//     {rank: 1, name: 'John Doe', points: 100 },
//     { rank: 2, name: 'Jane Smith', points: 95 },
//     { rank: 3, name: 'Alice Johnson', points: 90 },
//     { rank: 4, name: 'Bob Brown', points: 85 },
//     { rank: 5, name: 'Emma Davis', points: 80 },
//     { rank: 6, name: 'Michael Wilson', points: 75 },
//     { rank: 7, name: 'Sophia Lee', points: 70 },
//     { rank: 8, name: 'Matthew Taylor', points: 65 },
//     { rank: 9, name: 'Olivia Anderson', points: 60 },
//     { rank: 10, name: 'Daniel Martinez', points: 55 },
//   ];

//   // Animations
//   const rowFadeAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(rowFadeAnim, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   // State for storing hovered row index
//   const [hoveredRow, setHoveredRow] = useState(null);

//   return (
//     <View style={styles.container}>
//       <View style={styles.tableHeader}>
//         <Text style={styles.headerText}>Rank</Text>
//         <Text style={styles.headerText}>Name</Text>
//         <Text style={styles.headerText}>Points</Text>
//       </View>
//       {leaderboardData.map((data, index) => (
//         <TouchableHighlight
//           key={index}
//           activeOpacity={0.6}
//           underlayColor="#DDDDDD" // Background color when pressed
//           onPress={() => {}}
//           onHideUnderlay={() => setHoveredRow(null)}
//           onShowUnderlay={() => setHoveredRow(index)}
//           style={[
//             styles.tableRow,
//             hoveredRow === index && { backgroundColor: '#FFC0CB' }, // Background color when hovered
//           ]}
//         >
//           <Animated.View
//             style={[styles.rowContent, { opacity: rowFadeAnim }]}
//           >
//             <Text style={styles.rowText}>{data.rank}</Text>
//             <Text style={styles.rowText}>{data.name}</Text>
//             <Text style={styles.rowText}>{data.points}</Text>
//           </Animated.View>
//         </TouchableHighlight>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E6FFEA', // Green theme color
//     padding: 20,
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   headerText: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     flex: 1,
//     textAlign: 'center',
//   },
//   tableRow: {
//     borderRadius: 10,
//     elevation: 3,
//     overflow: 'hidden',
//   },
//   rowContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   rowText: {
//     fontSize: 16,
//     flex: 1,
//     textAlign: 'center',
//   },
// });

//  export default Leaderboard;
// // ./images/pic1.png


import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing,Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: 'Anuska Sharma', points: 100, photo: require('./images/pic1.png') },
    { rank: 2, name: 'Rahul Khanna', points: 95, photo: require('./images/pic2.png') },
    { rank: 3, name: 'Deepika Sitaula', points: 90 ,photo: require('./images/pic3.png') },
    { rank: 4, name: 'Pushpa Nepal', points: 85 ,photo: require('./images/pic4.png') },
    { rank: 5, name: 'Rani Rai', points: 80 ,photo: require('./images/Zinzu Chan Lee.jpg') },
    { rank: 6, name: 'Gita Baral', points: 75,photo: require('./images/team8.jpg')  },
    { rank: 7, name: 'Dwarika Adhikarri', points: 70,photo: require('./images/team7.jpg')  },
    { rank: 8, name: 'Maya Dahal', points: 65,photo: require('./images/team6.jpg')  },
    { rank: 9, name: 'Laxmi Ojha', points: 60,photo: require('./images/team5.jpg')  },
    { rank: 10, name: 'Kritika Shrestha', points: 55,photo: require('./images/team4.jpg')  },
  ];

  // Animations
  const rowFadeAnim = useRef(new Animated.Value(0)).current;
  const highlightAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fadeInAnimation = Animated.timing(rowFadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const highlightAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(highlightAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(highlightAnim, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    );

    Animated.parallel([fadeInAnimation, highlightAnimation]).start();
  }, []);

  // State for storing hovered row index
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Rank</Text>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Points</Text>
      </View>
      {leaderboardData.map((data, index) => (
        <TouchableHighlight
          key={index}
          activeOpacity={0.6}
          underlayColor="#DDDDDD" // Background color when pressed
          onPress={() => {}}
          onHideUnderlay={() => setHoveredRow(null)}
          onShowUnderlay={() => setHoveredRow(index)}
          style={[
            styles.tableRow,
            hoveredRow === index && { backgroundColor: '#FFC0CB' }, // Background color when hovered
          ]}
        >
          <Animated.View
            style={[
              styles.rowContent,
              { opacity: rowFadeAnim },
              hoveredRow === index && { backgroundColor: '#FFFFFF' }, // Background color when hovered
              { backgroundColor: highlightAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['#FFFFFF', '#E6FFEA'], // Highlight animation colors
              }) },
            ]}
          >
            <Animated.Text style={[styles.rowText, hoveredRow === index && { color: '#FF5733' }]}>
              {data.rank}
            </Animated.Text>
            <View style={styles.rowName}>
              <Image source={data.photo} style={styles.photo} />
              <Animated.Text style={[styles.nameText, hoveredRow === index && { color: '#FF5733' }]}>
                {data.name}
              </Animated.Text>
            </View>
            <Animated.Text style={[styles.rowText, hoveredRow === index && { color: '#FF5733' }]}>
              {data.points}
            </Animated.Text>
          </Animated.View>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6FFEA', // Green theme color
    padding: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    borderRadius: 10,
    elevation: 3,
    overflow: 'hidden',
    marginBottom: 10,
  },
  rowContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  rowText: {
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  rowName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  nameText: {
    fontSize: 16,
  },
});

export default Leaderboard;