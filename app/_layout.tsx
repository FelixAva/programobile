import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerTitleAlign: 'center'
    }}>
      <Stack.Screen
        name="index"
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="tabs"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
