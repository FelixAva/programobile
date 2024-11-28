// Libraries
import { Stack } from "expo-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={ queryClient }>
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
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
