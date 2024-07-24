# Current Limitations

Due to the time constraints of OSOC, some parts of the project are not implemented or not as fully fledged out as we would like.

The following things are deemed out-of-scope:

## 1. Login

- The `No pod yet?` sidepanel just lists the pod providers and doesn't showcase their logo

## 2. File explorer

- No animations are done
- Instead of a cool directory navigation, simple breadcrumbs are used
- All the file icons are simplified to either an icon for a file, or one for a container
- The `Locked`/ `Unlocked` and `Private`/ `Public`/ `Shared` status icons are missing
- The `UserType` is simplified to merely storing the URL, no nicknames are done
- The `Share files` functionality is not implemented

## 3. Controller

- There's no support for setting the permissions on an object recursively
- When adding a new item in the index file no check is performed to make sure it isn't already present
- When creating an empty index file, no corresponding ACL file is created
