import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const days = [
  { day: '오늘', lessons: [{ time: '15:00', name: '김지수', type: '개인레슨' }, { time: '16:00', name: '박서연', type: '개인레슨' }] },
  { day: '내일', lessons: [{ time: '10:00', name: '이하늘', type: '듀엣레슨' }] },
];

export default function ScheduleScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>일정</Text>
        {days.map((d) => (
          <View key={d.day} style={styles.section}>
            <Text style={styles.day}>{d.day}</Text>
            {d.lessons.map((l) => (
              <View key={l.time} style={styles.row}>
                <Text style={styles.time}>{l.time}</Text>
                <View>
                  <Text style={styles.name}>{l.name}님</Text>
                  <Text style={styles.meta}>{l.type}</Text>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA' },
  content: { padding: 20, paddingBottom: 120 },
  title: { fontSize: 24, fontWeight: '700', color: '#1B1F3B', marginBottom: 16 },
  section: { marginBottom: 20 },
  day: { fontSize: 15, fontWeight: '700', color: '#4F74F9', marginBottom: 8 },
  row: {
    flexDirection: 'row', alignItems: 'center', gap: 16, backgroundColor: '#FFFFFF',
    borderRadius: 16, borderWidth: 1, borderColor: '#E8E8E8', padding: 16, marginBottom: 10,
  },
  time: { fontSize: 16, fontWeight: '700', color: '#1B1F3B', width: 52 },
  name: { fontSize: 16, fontWeight: '600', color: '#1B1F3B' },
  meta: { fontSize: 13, color: '#6B7280', marginTop: 2 },
});
