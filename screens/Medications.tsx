import React, { useState, FunctionComponent } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface Props {}

const Medications: FunctionComponent = () => {

    const [medications, setMedications] = useState<Medication[]>([])
    const [newMedication, setNewMedication] = useState<Medication>({
        name: '',
        dosage: '',
        frequency: '',
        instructions: '',
      });
    const [isAddingMedication, setIsAddingMedication] = useState<boolean>(false);

    const addMedication = () => {
        setMedications([...medications, newMedication]);
        setNewMedication({ 
            name: '', 
            dosage: '', 
            frequency: '', 
            instructions: '' 
        });
        setIsAddingMedication(false);
    };


    return (
            <View style={{marginTop:60}}>
                {!isAddingMedication && (
                    <Button
                    title="Add Medication"
                    
                    onPress={() => setIsAddingMedication(true)}
                    />
                )}

                {/* Input fields */}
                {isAddingMedication && (
                    <View>
                    <TextInput
                        placeholder="Name"
                        value={newMedication.name}
                        onChangeText={(text) =>
                        setNewMedication({ ...newMedication, name: text })
                        }
                    />
                    <TextInput
                        placeholder="Dosage"
                        value={newMedication.dosage}
                        onChangeText={(text) =>
                        setNewMedication({ ...newMedication, dosage: text })
                        }
                    />
                    <TextInput
                        placeholder="Frequency"
                        value={newMedication.frequency}
                        onChangeText={(text) =>
                        setNewMedication({ ...newMedication, frequency: text })
                        }
                    />
                    <TextInput
                        placeholder="Instructions"
                        value={newMedication.instructions}
                        onChangeText={(text) =>
                        setNewMedication({ ...newMedication, instructions: text })
                        }
                    />

                    <Button title="Add" onPress={addMedication} />
                    </View>
                )}

                {/* Medications list */}
                <FlatList
                    data={medications}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                    <View>
                        <Text>Name: {item.name}</Text>
                        <Text>Dosage: {item.dosage}</Text>
                        <Text>Frequency: {item.frequency}</Text>
                        <Text>Instructions: {item.instructions}</Text>
                    </View>
                    )}
                />
            </View>
    
    )
}

export default Medications;