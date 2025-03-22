import { SignInButton } from "@clerk/tanstack-start"
import { createFileRoute } from "@tanstack/react-router"
import { useAccount } from "~/lib/providers/jazz-provider"

function RouteComponent() {
  const { me, logOut } = useAccount({})
  return (
    <>
      <div>{me?.profile?.name}</div>
      <SignInButton mode="modal">
        <button>Sign in</button>
      </SignInButton>
      <button
        onClick={() => {
          logOut()
        }}
      >
        Sign out
      </button>
    </>
  )
}

export const Route = createFileRoute("/_layout/_pages/")({
  component: RouteComponent,
})
