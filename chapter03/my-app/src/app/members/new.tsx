import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { addMember } from '@/lib/members';

export default function NewMemberScreen() {
  const [name, setName] = useState('');
  const [remaining, setRemaining] = useState('');

  const canSave = name.trim().length > 0 && Number(remaining) > 0;

  const save = async () => {
    await addMember(name.trim(), Number(remaining));
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>이름</Text>
      <TextInput style={styles.input} placeholder="회원 이름" placeholderTextColor="#9CA3AF" value={name} onChangeText={setName} />

      <Text style={styles.label}>수강권 횟수</Text>
      <TextInput
        style={styles.input}
        placeholder="예: 10"
        placeholderTextColor="#9CA3AF"
        keyboardType="number-pad"
        value={remaining}
        onChangeText={setRemaining}
      />

      <Pressable style={[styles.button, !canSave && styles.buttonDisabled]} disabled={!canSave} onPress={save}>
        <Text style={styles.buttonText}>등록하기</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA', padding: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#1B1F3B', marginBottom: 8, marginTop: 12 },
  input: {
    backgroundColor: '#FFFFFF', borderRadius: 14, borderWidth: 1, borderColor: '#E8E8E8',
    paddingHorizontal: 16, paddingVertical: 14, fontSize: 16, color: '#1B1F3B',
  },
  button: { backgroundColor: '#4F74F9', borderRadius: 16, paddingVertical: 16, alignItems: 'center', marginTop: 28 },
  buttonDisabled: { opacity: 0.4 },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
});
