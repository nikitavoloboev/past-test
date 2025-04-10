/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutPagesIndexImport } from './routes/_layout/_pages/index'
import { Route as LayoutauthAuthImport } from './routes/_layout/(auth)/_auth'
import { Route as LayoutauthAuthSignUpSplatImport } from './routes/_layout/(auth)/_auth.sign-up.$'
import { Route as LayoutauthAuthSignInSplatImport } from './routes/_layout/(auth)/_auth.sign-in.$'

// Create Virtual Routes

const LayoutauthImport = createFileRoute('/_layout/(auth)')()

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutauthRoute = LayoutauthImport.update({
  id: '/(auth)',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutPagesIndexRoute = LayoutPagesIndexImport.update({
  id: '/_pages/',
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutauthAuthRoute = LayoutauthAuthImport.update({
  id: '/_auth',
  getParentRoute: () => LayoutauthRoute,
} as any)

const LayoutauthAuthSignUpSplatRoute = LayoutauthAuthSignUpSplatImport.update({
  id: '/sign-up/$',
  path: '/sign-up/$',
  getParentRoute: () => LayoutauthAuthRoute,
} as any)

const LayoutauthAuthSignInSplatRoute = LayoutauthAuthSignInSplatImport.update({
  id: '/sign-in/$',
  path: '/sign-in/$',
  getParentRoute: () => LayoutauthAuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/(auth)': {
      id: '/_layout/(auth)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutauthImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/(auth)/_auth': {
      id: '/_layout/(auth)/_auth'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutauthAuthImport
      parentRoute: typeof LayoutauthRoute
    }
    '/_layout/_pages/': {
      id: '/_layout/_pages/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutPagesIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/(auth)/_auth/sign-in/$': {
      id: '/_layout/(auth)/_auth/sign-in/$'
      path: '/sign-in/$'
      fullPath: '/sign-in/$'
      preLoaderRoute: typeof LayoutauthAuthSignInSplatImport
      parentRoute: typeof LayoutauthAuthImport
    }
    '/_layout/(auth)/_auth/sign-up/$': {
      id: '/_layout/(auth)/_auth/sign-up/$'
      path: '/sign-up/$'
      fullPath: '/sign-up/$'
      preLoaderRoute: typeof LayoutauthAuthSignUpSplatImport
      parentRoute: typeof LayoutauthAuthImport
    }
  }
}

// Create and export the route tree

interface LayoutauthAuthRouteChildren {
  LayoutauthAuthSignInSplatRoute: typeof LayoutauthAuthSignInSplatRoute
  LayoutauthAuthSignUpSplatRoute: typeof LayoutauthAuthSignUpSplatRoute
}

const LayoutauthAuthRouteChildren: LayoutauthAuthRouteChildren = {
  LayoutauthAuthSignInSplatRoute: LayoutauthAuthSignInSplatRoute,
  LayoutauthAuthSignUpSplatRoute: LayoutauthAuthSignUpSplatRoute,
}

const LayoutauthAuthRouteWithChildren = LayoutauthAuthRoute._addFileChildren(
  LayoutauthAuthRouteChildren,
)

interface LayoutauthRouteChildren {
  LayoutauthAuthRoute: typeof LayoutauthAuthRouteWithChildren
}

const LayoutauthRouteChildren: LayoutauthRouteChildren = {
  LayoutauthAuthRoute: LayoutauthAuthRouteWithChildren,
}

const LayoutauthRouteWithChildren = LayoutauthRoute._addFileChildren(
  LayoutauthRouteChildren,
)

interface LayoutRouteChildren {
  LayoutauthRoute: typeof LayoutauthRouteWithChildren
  LayoutPagesIndexRoute: typeof LayoutPagesIndexRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutauthRoute: LayoutauthRouteWithChildren,
  LayoutPagesIndexRoute: LayoutPagesIndexRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/': typeof LayoutPagesIndexRoute
  '/sign-in/$': typeof LayoutauthAuthSignInSplatRoute
  '/sign-up/$': typeof LayoutauthAuthSignUpSplatRoute
}

export interface FileRoutesByTo {
  '/': typeof LayoutPagesIndexRoute
  '/sign-in/$': typeof LayoutauthAuthSignInSplatRoute
  '/sign-up/$': typeof LayoutauthAuthSignUpSplatRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/(auth)': typeof LayoutauthRouteWithChildren
  '/_layout/(auth)/_auth': typeof LayoutauthAuthRouteWithChildren
  '/_layout/_pages/': typeof LayoutPagesIndexRoute
  '/_layout/(auth)/_auth/sign-in/$': typeof LayoutauthAuthSignInSplatRoute
  '/_layout/(auth)/_auth/sign-up/$': typeof LayoutauthAuthSignUpSplatRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/' | '/sign-in/$' | '/sign-up/$'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/sign-in/$' | '/sign-up/$'
  id:
    | '__root__'
    | '/_layout'
    | '/_layout/(auth)'
    | '/_layout/(auth)/_auth'
    | '/_layout/_pages/'
    | '/_layout/(auth)/_auth/sign-in/$'
    | '/_layout/(auth)/_auth/sign-up/$'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/(auth)",
        "/_layout/_pages/"
      ]
    },
    "/_layout/(auth)": {
      "filePath": "_layout/(auth)",
      "parent": "/_layout",
      "children": [
        "/_layout/(auth)/_auth"
      ]
    },
    "/_layout/(auth)/_auth": {
      "filePath": "_layout/(auth)/_auth.tsx",
      "parent": "/_layout/(auth)",
      "children": [
        "/_layout/(auth)/_auth/sign-in/$",
        "/_layout/(auth)/_auth/sign-up/$"
      ]
    },
    "/_layout/_pages/": {
      "filePath": "_layout/_pages/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/(auth)/_auth/sign-in/$": {
      "filePath": "_layout/(auth)/_auth.sign-in.$.tsx",
      "parent": "/_layout/(auth)/_auth"
    },
    "/_layout/(auth)/_auth/sign-up/$": {
      "filePath": "_layout/(auth)/_auth.sign-up.$.tsx",
      "parent": "/_layout/(auth)/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
