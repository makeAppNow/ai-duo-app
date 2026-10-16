import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function AppTabs() {
  return (
    <NativeTabs tintColor="#4F74F9">
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>홈</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="schedule">
        <NativeTabs.Trigger.Label>일정</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="calendar" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="members">
        <NativeTabs.Trigger.Label>회원</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="person.2.fill" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
