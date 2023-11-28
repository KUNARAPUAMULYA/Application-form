import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {RadioButton} from 'react-native-paper';

const PersonalDetailsForm = () => {
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [incomeRange, setIncomeRange] = useState('');
  const [educationQualification, setEducationQualification] = useState('');
  const [FatherName, setFatherName] = useState('');
  const [MotherName, setMotherName] = useState('');
  const [nomineename, setnomineeName] = useState('');
  const [, setRelationship] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [pincode, setPincode] = useState('');
  const [city] = useState('');
  const [state, setState] = useState('');
  const [, setAddressline1] = useState('');
  const [, setAddressline2] = useState('');
  const [, setpercentage] = useState('');
  const [dob, setDob] = useState('');

  const occupationOptions = [
    {label: 'Student', value: 'student'},
    {label: 'Employee', value: 'employee'},
    {label: 'Self-Employed', value: 'selfEmployed'},
  ];
  const incomeRangeOptions = [
    {label: 'Below 5,000', value: 'below5000'},
    {label: '5,000 - 10,000', value: '5000to10000'},
    {label: '10,000 - 20,000', value: '10000to20000'},
  ];
  const educationQualificationOptions = [
    {label: 'High School', value: 'highSchool'},
    {label: "Bachelor's Degree", value: 'bachelorsDegree'},
    {label: "Master's Degree", value: 'mastersDegree'},
  ];
  const relationshipOptions = [
    {label: 'mother', value: 'mother'},
    {label: 'father', value: 'father'},
    {label: 'guardien', value: 'guardien'},
  ];
  const options = [
    {label: 'Mother', value: 'mother'},
    {label: 'Father', value: 'father'},
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Personal Details Form</Text>
        <Text style={styles.label}>Name on your pan card:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setName(text)}
          value={name}
          placeholder="Enter your name"
        />

        <Text style={styles.label}>Occupation:</Text>
        <DropDownPicker
          items={occupationOptions}
          defaultValue={occupation}
          containerStyle={styles.dropdownContainer}
          style={styles.dropdownStyle}
          onChangeItem={item => setOccupation(item.value)}
        />

        <Text style={styles.label}>Income Range:</Text>
        <DropDownPicker
          items={incomeRangeOptions}
          defaultValue={incomeRange}
          containerStyle={styles.dropdownContainer}
          style={styles.dropdownStyle}
          onChangeItem={item => setIncomeRange(item.value)}
        />
        <Text style={styles.label}>Education Qualification:</Text>
        <DropDownPicker
          items={educationQualificationOptions}
          defaultValue={educationQualification}
          containerStyle={styles.dropdownContainer}
          style={styles.dropdownStyle}
          onChangeItem={item => setEducationQualification(item.value)}
        />
        <Text style={styles.label}>Father Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setFatherName(text)}
          value={FatherName}
          placeholder="Enter your father name"
        />
        <Text style={styles.label}>Mother Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setMotherName(text)}
          value={MotherName}
          placeholder="Enter your Mother name"
        />
        <Text style={styles.label}>
          {' '}
          What do you want to print on your card:
        </Text>
        <View style={styles.radioButtonContainer} />
        {options.map(option => (
          <View key={option.value} style={styles.radioButton}>
            <RadioButton
              value={option.value}
              status={selectedOption === option.value ? 'checked' : 'unchecked'}
              onPress={() => setSelectedOption(option.value)}
            />
            <Text>{option.label}</Text>
          </View>
        ))}
        <View>
          <Text style={styles.title}>Your Nominee Details</Text>
          <Text style={styles.label}>Nominee Name*</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setnomineeName(text)}
            value={nomineename}
            placeholder="Enter your nominee name"
          />
          <Text style={styles.label}>Relationship:</Text>
          <DropDownPicker
            items={relationshipOptions}
            defaultValue={relationshipOptions}
            containerStyle={styles.dropdownContainer}
            style={styles.dropdownStyle}
            onChangeItem={item => setRelationship(item.value)}
          />
          <Text style={styles.label}>PIN Code*</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPincode(text)}
            value={pincode}
            placeholder="Enter your pincode"
          />
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setDob(text)}
            value={dob}
            placeholder="Enter your Dob"
          />
          <Text style={styles.label}>City*</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPincode(text)}
            value={city}
            placeholder="Enter your City"
          />
          <Text style={styles.label}>State*</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setState(text)}
            value={state}
            placeholder="Enter your State"
          />
          <Text style={styles.label}>Nominee Address line1*</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setAddressline1(text)}
            value={setAddressline1}
            placeholder="Enter your Address1"
          />
          <Text style={styles.label}>Nominee Address line2*</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setAddressline2(text)}
            value={setAddressline2}
            placeholder="Enter your Address2"
          />
          <Text style={styles.label}>Percentage*</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setpercentage(text)}
            value={setpercentage}
            placeholder="%"
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  dropdownContainer: {
    height: 40,
    marginBottom: 12,
  },
  dropdownStyle: {
    backgroundColor: '#fafafa',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  RadioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: '16',
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PersonalDetailsForm;
