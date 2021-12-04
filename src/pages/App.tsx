import { AuthProvider } from "../auth/useAuth";
import { RoutesConfig } from "../routes/RoutesConfig";

export const App = () => {
  return (
    <AuthProvider>
      <h1>Auth Example</h1>
      <RoutesConfig />
    </AuthProvider>
  );
}
