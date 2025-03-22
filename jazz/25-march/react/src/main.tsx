import { JazzProvider } from "jazz-react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { JazzAccount } from "./schema.ts"

// We use this to identify the app in the passkey auth
export const APPLICATION_NAME = "Jazz starter"

declare module "jazz-react" {
  export interface Register {
    Account: JazzAccount
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <JazzProvider
      sync={{
        // cloud sync
        // peer: "wss://cloud.jazz.tools/?key=react-passkey-auth@garden.co",
        // local sync
        peer: "ws://localhost:4200",
        when: "signedUp", // This way when the user hasn't signed up we store the data only locally
      }}
      AccountSchema={JazzAccount}
    >
      <App />
    </JazzProvider>
  </StrictMode>
)
