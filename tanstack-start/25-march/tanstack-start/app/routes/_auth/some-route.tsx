import { createFileRoute } from '@tanstack/react-router'
import { useAppContext } from './route'

function RouteComponent() {
  const { someValue, setSomeValue } = useAppContext()
  console.log(someValue)
  return <div>Hello /some-route</div>
}

export const Route = createFileRoute('/_auth/some-route')({
  component: RouteComponent,
})
