# Mockbook

MockBook is a social network that allows users to view their posts.
The goal is to showcase how changing the permissions in Loama can affect how resources are accessed by the app.

It currently displays the following information:

- Profile information: name, email, bio, profile picture
- Posts: text, image, video

All data is retrieved from the user's pod using the functions provided by the loama controller.
You can find the current limitations of the app in the limitations section.

## Limitations

There's no intermediary screen that shows which resources are required and which are optional for a correct functioning.

## How to run?

Before running the application, make sure you have the code of Loama in the same directory as this repository.

```sh
# clone repository
git clone https://github.com/osoc24/toco.git
cd mockbook

# Install dependencies
pnpm install

# Compile and Hot-Reload for Development
pnpm dev

# Build for production
pnpm build

```
