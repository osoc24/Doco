---
title: Controller
---
# Controller

- [:test_tube: Code repository](https://github.com/osoc24/loama/tree/root/controller)

## What?
The intent of this library is to provide a wrapper around the [@inrupt/solid-client](https://docs.inrupt.com/developer-tools/api/javascript/solid-client/) library, such that more of the intricate Solid details are abstracted away. Furthermore, because this library lives outside of LOAMA it's easy to swap this controller out with another one that doesn't make use of [@inrupt/solid-client](https://docs.inrupt.com/developer-tools/api/javascript/solid-client/) under the hood.

Internally, the controller uses a JSON file called `index`, which is stored in the root of the pod, to maintain an overview of the currently managed connections inside of LOAMA. It is entirely possible, though, that the ACL files contain permissions which aren't reflected inside the `index.json`. This is not an issue, as over time and after repeated usage the `index.json` will synchronize naturally.

To have the distinction between permissions destined to manage an agent/group and permissions for the general public, a nullable `UserType` object is used, wherein a null signifies that it's for the public access.

## Deviations from `solid-client`

The controller merges the `ControlRead` and `ControlWrite` into `Control`. Furthermore, the `AccessModes` is mapped to a `Permission[]`. Since`AccessModes` is an object where the key is the permission and the value is a boolean indicating if it should be removed or given, the`Permission[]` array interprets it as: If it's there it's given, otherwise it is not.

