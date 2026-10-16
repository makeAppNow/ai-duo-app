import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { loadMembers, Member } from '@/lib/members';

export default function MemberDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [member, setMember] = useState<Member>();

  useEffect(() => {
    loadMembers().then((list) => setMember(list.find((m) => m.id === id)));
  }, [id]);

  if (!member) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{member.name}님</Text>
      <Text style={styles.meta}>수강권 남은 횟수 {member.remaining}회</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA', padding: 20 },
  name: { fontSize: 24, fontWeight: '700', color: '#1B1F3B' },
  meta: { fontSize: 15, color: '#6B7280', marginTop: 8 },
});
