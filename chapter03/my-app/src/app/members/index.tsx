import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { loadMembers, Member } from '@/lib/members';

export default function MembersScreen() {
  const [members, setMembers] = useState<Member[]>([]);
  const [query, setQuery] = useState('');

  // 화면에 돌아올 때마다 폰에 저장된 회원을 다시 읽는다
  useFocusEffect(
    useCallback(() => {
      loadMembers().then(setMembers);
    }, [])
  );

  const filtered = members.filter((m) => m.name.includes(query.trim()));

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>회원</Text>
        <Pressable style={styles.addButton} onPress={() => router.push('/members/new')}>
          <Text style={styles.addButtonText}>+ 회원 등록</Text>
        </Pressable>
      </View>

      <TextInput
        style={styles.search}
        placeholder="이름으로 검색"
        placeholderTextColor="#9CA3AF"
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={filtered}
        keyExtractor={(m) => m.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>아직 등록한 회원이 없어요</Text>}
        renderItem={({ item }) => (
          <Pressable style={styles.card} onPress={() => router.push(`/members/${item.id}`)}>
            <Text style={styles.name}>{item.name}님</Text>
            <View style={styles.remainingBox}>
              <Text style={styles.remainingLabel}>남은 횟수</Text>
              <Text style={[styles.remaining, item.remaining <= 2 && styles.remainingLow]}>
                {item.remaining}회
              </Text>
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 20 },
  title: { fontSize: 24, fontWeight: '700', color: '#1B1F3B' },
  addButton: { backgroundColor: '#4F74F9', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 8 },
  addButtonText: { color: '#FFFFFF', fontSize: 14, fontWeight: '700' },
  search: {
    margin: 20, marginBottom: 8, backgroundColor: '#FFFFFF', borderRadius: 14, borderWidth: 1,
    borderColor: '#E8E8E8', paddingHorizontal: 16, paddingVertical: 12, fontSize: 15, color: '#1B1F3B',
  },
  list: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 120 },
  empty: { textAlign: 'center', color: '#9CA3AF', marginTop: 48, fontSize: 15 },
  card: {
    backgroundColor: '#FFFFFF', borderRadius: 16, borderWidth: 1, borderColor: '#E8E8E8', padding: 16,
    marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
  },
  name: { fontSize: 16, fontWeight: '700', color: '#1B1F3B' },
  remainingBox: { alignItems: 'flex-end' },
  remainingLabel: { fontSize: 12, color: '#6B7280' },
  remaining: { fontSize: 18, fontWeight: '700', color: '#4F74F9', marginTop: 2 },
  remainingLow: { color: '#E5484D' },
});
