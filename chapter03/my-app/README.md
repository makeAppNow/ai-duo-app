# my-app: 3장 기본 3-1 샘플 앱

3장 기본 3-1에서 한 화면씩 시켜 만든 샘플 앱의 화면 코드입니다. 책의 캡처 3-1-1~3-1-5가 이 코드로 찍은 화면입니다.

## 실행해 보기

```bash
npx create-expo-app@latest my-app
cd my-app
npx expo install @react-native-async-storage/async-storage
```

그다음 이 폴더의 `src/`를 새 프로젝트의 `src/`에 덮어쓰고 `npx expo start`로 실행합니다.
템플릿에 있던 `src/app/explore.tsx`는 지웁니다.

- `steps/index.v1-first-screen.tsx`: 첫 화면을 처음 시켰을 때의 코드(수정 지시 세 가지를 반영하기 전)
- `e2e/register-member.yaml`: 회원 한 명을 등록해 보는 E2E 플로우(3장 자동화). Expo Go로 실행하면 appId가 `host.exp.Exponent`입니다

Expo 템플릿은 버전마다 구조가 바뀝니다. 그대로 안 되면 AI에게 이 폴더를 보여 주고 "이 화면들을 내 프로젝트에 맞춰 옮겨줘"라고 시키면 됩니다.
