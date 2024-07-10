import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme.ts";
import "./styles/index.css";
import AuthProvider from "./providers/AuthProvider.tsx";
import ReduxProvider from "./providers/ReduxProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </AuthProvider>
  </ChakraProvider>
);
