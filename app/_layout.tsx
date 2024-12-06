// Libraries
import { Stack } from "expo-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useUserStore } from "@/hooks/useUser";
import { AuthValidator } from "@/components";

const queryClient = new QueryClient();

export default function RootLayout() {
  const { session } = useUserStore();

  return (
    <QueryClientProvider client={ queryClient }>
      <AuthValidator />
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
