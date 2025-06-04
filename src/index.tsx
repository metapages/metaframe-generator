import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WithMetaframe } from "@metapages/metapage-react";
import { ChakraProvider } from "@chakra-ui/react";
import { App } from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <StrictMode>
    <ChakraProvider>
      <WithMetaframe>
        <App />
      </WithMetaframe>
    </ChakraProvider>
  </StrictMode>
);
