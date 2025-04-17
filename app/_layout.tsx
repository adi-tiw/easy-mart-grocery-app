import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { StatusBar } from "react-native";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>      
    <Stack
      screenOptions={{ headerShown: false }}
      initialRouteName="index"
    />
    </QueryClientProvider>
  );
}