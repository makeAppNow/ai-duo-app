import AsyncStorage from '@react-native-async-storage/async-storage';

export type Member = { id: string; name: string; remaining: number };

const KEY = 'members';

// 서버 없이 폰 안에만 저장한다
export async function loadMembers(): Promise<Member[]> {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function addMember(name: string, remaining: number): Promise<void> {
  const members = await loadMembers();
  members.unshift({ id: String(Date.now()), name, remaining });
  await AsyncStorage.setItem(KEY, JSON.stringify(members));
}
