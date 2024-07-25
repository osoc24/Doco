---
title: Development
---

# Development

- [:test_tube: Code repository](https://github.com/osoc24/loama/tree/root/loama)

Initially, the idea was to use Nuxt, as it has loads of functionality built in, together with the [@inrupt/solid-client-authn-browser](https://www.npmjs.com/package/@inrupt/solid-client-authn-browser) package. But, as this package has hardcoded usage of the `window` variable, it quickly became apparent that this library had to be used  client-side. Thus, the switch from Nuxt to Vue was made. 

Besides Vue, Vue Router is also used, and the convention is to use TypeScript and the Composition API. For the authorization, [the controller](/deliverables/controller) is used.

## IDP Provider

Authentication works by providing the URL to the pod provider. To ease the experience a default URL is specified in the `.env` and used in `components/LoginForm.vue`. An example can be found in `.env.example`.

## How to run

Make sure to **first build the controller!**

```sh
# Install dependencies
pnpm install

# Compile and Hot-Reload for Development
pnpm dev

# Build for production
pnpm build


