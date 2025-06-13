import { getAuth } from "@clerk/tanstack-start/server"
import { getWebRequest } from "vinxi/http"
import type { QueryClient } from "@tanstack/react-query"
import {
  Outlet,
  ScrollRestoration,
  createRootRouteWithContext,
} from "@tanstack/react-router"
import { createServerFn, Meta, Scripts } from "@tanstack/start"
import * as React from "react"
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary"
import { NotFound } from "~/components/NotFound"
import { seo } from "~/lib/seo"
import appCss from "~/styles/app.css?url"

// @ts-ignore
export const fetchClerkAuth = createServerFn().handler(async () => {
  const auth = await getAuth(getWebRequest())
  return auth
})

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
  auth?: ReturnType<typeof getAuth> | null
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seo({
        title: "",
        description: ``,
      }),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  beforeLoad: async (ctx) => {
    try {
      // Handle explicit null auth (logged out state)
      if (ctx.context.auth === null) {
        return { auth: null }
      }

      // Use existing auth if available
      if (ctx.context.auth) {
        return { auth: ctx.context.auth }
      }

      // Fetch new auth state
      const auth = await fetchClerkAuth()
      return { auth }
    } catch (error) {
      console.error("Error in beforeLoad:", error)
      return { auth: null }
    }
  },
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        {/* TODO: add in way that i can dismiss it and remember per session */}
        {/* <TanStackRouterDevtools position="bottom-right" /> */}
        <Scripts />
      </body>
    </html>
  )
}
