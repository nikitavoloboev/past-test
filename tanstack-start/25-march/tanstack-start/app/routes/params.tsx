import { createFileRoute } from "@tanstack/react-router"

function RouteComponent() {
  const { state } = Route.useSearch()
  console.log(state)
  return (
    <>
      <div>{state}</div>
    </>
  )
}

export const Route = createFileRoute("/params")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      state: search.state as string,
    }
  },
})
