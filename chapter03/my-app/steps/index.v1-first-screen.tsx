import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BLUE = '#4F74F9';

const upcoming = [
  { id: '1', name: '김지수', type: '개인레슨', time: '15:00', remaining: 8 },
  { id: '2', name: '박서연', type: '개인레슨', time: '16:00', remaining: 2 },
  { id: '3', name: '이하늘', type: '듀엣레슨', time: '18:00', remaining: 1 },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.greeting}>반가워요, 워니님!</Text>

        <View style={styles.heroCard}>
          <Text style={styles.heroLabel}>이번 달 수업</Text>
          <Text style={styles.heroCount}>24회</Text>
          <Text style={styles.heroSub}>지난달보다 3회 많아요</Text>
        </View>

        <Text style={styles.sectionTitle}>다가오는 수업</Text>
        {upcoming.map((lesson) => (
          <View key={lesson.id} style={styles.card}>
            <View>
              <Text style={styles.cardName}>{lesson.name}님</Text>
              <Text style={styles.cardMeta}>
                {lesson.type} · {lesson.time}
              </Text>
            </View>
            <View style={styles.remainingBox}>
              <Text style={styles.remainingLabel}>남은 횟수</Text>
              <Text style={styles.remainingCount}>{lesson.remaining}회</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA' },
  content: { padding: 20, paddingBottom: 120 },
  greeting: { fontSize: 16, fontWeight: '600', color: '#1B1F3B', marginBottom: 16 },
  heroCard: { backgroundColor: BLUE, borderRadius: 24, padding: 24, marginBottom: 24 },
  heroLabel: { color: '#FFFFFF', fontSize: 15, opacity: 0.9 },
  heroCount: { color: '#FFFFFF', fontSize: 44, fontWeight: '800', marginTop: 6 },
  heroSub: { color: '#FFFFFF', fontSize: 13, opacity: 0.85, marginTop: 4 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#1B1F3B', marginBottom: 10 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    padding: 16,
    marginBottom: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardName: { fontSize: 16, fontWeight: '700', color: '#1B1F3B' },
  cardMeta: { fontSize: 13, color: '#6B7280', marginTop: 4 },
  remainingBox: { alignItems: 'flex-end' },
  remainingLabel: { fontSize: 12, color: '#6B7280' },
  remainingCount: { fontSize: 18, fontWeight: '700', color: BLUE, marginTop: 2 },
});
