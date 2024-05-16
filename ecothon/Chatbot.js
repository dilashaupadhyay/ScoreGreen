import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [step, setStep] = useState(0);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
  
    setMessages([...messages, { text: `You said: ${inputMessage}`, isUser: true }]);
  
    const response = getEnvironmentQuestionResponse(inputMessage);
  
    setMessages([...messages, { text: response, isUser: false }]);
  
    setInputMessage('');
  };
  
  const getEnvironmentQuestionResponse = (message) => {
    switch (message.toLowerCase()) {
      case 'what is global warming?':
        return 'Global warming refers to the long-term increase in Earth\'s average surface temperature due to human activities, primarily the emission of greenhouse gases like carbon dioxide and methane.';
      case 'why is biodiversity important?':
        return 'Biodiversity is important because it ensures ecosystem stability, resilience, and productivity. It provides essential services like pollination, nutrient cycling, and regulation of climate and water cycles.';
      case 'hello':
        return 'Hello! How can I assist you today?';
      case 'how can i increase points?':
        return 'You can increase points by engaging in environmentally friendly activities such as recycling, reducing energy consumption, and supporting sustainable practices.';
      case 'thankyou':
        return 'You\'re welcome!';
      case 'how can i help environment?':
        return 'You can help the environment by adopting sustainable practices such as reducing waste, conserving energy, and supporting eco-friendly initiatives.';
      case 'what are renewable energy sources?':
        return 'Renewable energy sources are sources of energy that are replenished naturally and can be used indefinitely. Examples include solar, wind, hydroelectric, and geothermal energy.';
      case 'how does deforestation contribute to climate change?':
        return 'Deforestation contributes to climate change by reducing the number of trees that absorb carbon dioxide from the atmosphere. It also releases stored carbon when trees are cut down and burned or left to decay.';
      case 'what is plastic pollution?':
        return 'Plastic pollution refers to the accumulation of plastic waste in the environment, particularly in oceans and waterways. It poses serious threats to wildlife, ecosystems, and human health.';
      case 'what are the effects of air pollution on human health?':
        return 'Air pollution can cause respiratory diseases, cardiovascular diseases, lung cancer, and other health problems. It can also exacerbate existing conditions like asthma and allergies.';
      case 'how does recycling benefit the environment?':
        return 'Recycling reduces the need for raw materials, conserves energy, and reduces pollution and greenhouse gas emissions associated with the production of new materials. It also helps to minimize the amount of waste sent to landfills.';
      case 'what is sustainable agriculture?':
        return 'Sustainable agriculture involves farming practices that aim to minimize environmental impact while maintaining long-term productivity. It focuses on soil health, water conservation, biodiversity, and the well-being of farmers and communities.';
      case 'what are the main causes of ocean pollution?':
        return 'The main causes of ocean pollution include plastic waste, chemical pollutants, oil spills, agricultural runoff, and sewage discharge. These pollutants can harm marine life and ecosystems.';
      case 'how does overfishing impact marine ecosystems?':
        return 'Overfishing depletes fish populations, disrupts marine food chains, and alters ecosystems. It can lead to the collapse of fish stocks, loss of biodiversity, and negative economic consequences for coastal communities.';
      case 'how can i live environment friendly life?':
        return 'Living an environmentally friendly life involves making conscious choices to reduce your impact on the planet. Here are some tips to help you live more sustainably:\n\n' +
               '- Reduce, Reuse, Recycle: Follow the three Rs. Reduce your consumption of single-use items, reuse products whenever possible, and recycle materials such as paper, glass, plastic, and metal.\n\n' +
               '- Conserve Energy: Use energy-efficient appliances, turn off lights and electronics when not in use, and consider installing programmable thermostats and energy-efficient lighting.\n\n' +
               '- Use Renewable Energy Sources: Consider switching to renewable energy sources such as solar, wind, or hydroelectric power for your home or business.';
      default:
        return 'I\'m sorry, I don\'t have an answer to that question at the moment. Feel free to ask another question!';
    }
  };
  
  return (
    <View style={{ flex: 1 ,backgroundColor: '#C3E2C2'}}>
      <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginVertical: 10, color: '#5F6F52' }}>Ask me anything about environment</Text>
      <ScrollView style={{ height: 300, borderWidth: 1, borderColor: '#5F6F52', padding: 10, marginBottom: 10 }}>
        {messages.map((message, index) => (
          <View key={index} style={{ marginBottom: 5 }}>
            <Text style={{ fontWeight: message.isUser ? 'bold' : 'normal' }}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <TextInput
        style={{ borderWidth: 1, borderColor: '#5F6F52', marginBottom: 10, padding: 10 }}
        value={inputMessage}
        onChangeText={(text) => setInputMessage(text)}
        onSubmitEditing={handleSendMessage}
      />
      <TouchableOpacity
        style={{ backgroundColor: '#5F6F52', padding: 10, alignItems: 'center' }}
        onPress={handleSendMessage}
      >
        <Text style={{ color: 'white' }}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatBot;
