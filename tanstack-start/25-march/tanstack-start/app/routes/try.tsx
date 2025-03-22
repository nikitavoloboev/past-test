import { createFileRoute, useNavigate } from "@tanstack/react-router"

function RouteComponent() {
  const navigate = useNavigate()
  return (
    <>
      <button
        onClick={() => {
          navigate({
            to: "/params",
            search: {
              state: "someValueHere",
            },
          })
        }}
      >
        Test param
      </button>
    </>
  )
}

export const Route = createFileRoute("/try")({
  component: RouteComponent,
})
