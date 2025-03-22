import { createFileRoute } from "@tanstack/react-router"

function RouteComponent() {
  return (
    <>
      <div>test</div>
    </>
  )
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
})
