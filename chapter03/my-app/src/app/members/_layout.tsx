import { Stack } from 'expo-router';

export default function MembersLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="[id]" options={{ headerShown: true, title: '회원 상세', headerBackTitle: '회원' }} />
      <Stack.Screen name="new" options={{ presentation: 'modal', headerShown: true, title: '회원 등록' }} />
    </Stack>
  );
}
