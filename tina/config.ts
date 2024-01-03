import { defineConfig } from "tinacms";

import { postFields } from "./templates";
import { design_tokensFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "dist",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "dist",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: "md",
        label: "Posts",
        name: "posts",
        path: "src/posts",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...postFields(),
        ],
      },
      {
        format: "json",
        label: "Theme settings",
        name: "theme_settings",
        path: "src/_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "tokens",
        },
        fields: [
          {
            type: "object",
            name: "size_scale",
            nameOverride: "size-scale",
            label: "size-scale",
            fields: [
              {
                type: "string",
                name: "base",
                label: "base",
              },
              {
                type: "string",
                name: "300",
                label: "300",
              },
              {
                type: "string",
                name: "500",
                label: "500",
              },
              {
                type: "string",
                name: "600",
                label: "600",
              },
              {
                type: "string",
                name: "700",
                label: "700",
              },
              {
                type: "string",
                name: "800",
                label: "800",
              },
              {
                type: "string",
                name: "900",
                label: "900",
              },
              {
                type: "string",
                name: "max",
                label: "max",
              },
            ],
          },
          {
            type: "object",
            name: "colors",
            label: "colors",
            fields: [
              {
                type: "string",
                name: "primary",
                label: "primary",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "primary_shade",
                nameOverride: "primary-shade",
                label: "primary-shade",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "primary_glare",
                nameOverride: "primary-glare",
                label: "primary-glare",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "highlight",
                label: "highlight",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "light",
                label: "light",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "mid",
                label: "mid",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "dark",
                label: "dark",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "slate",
                label: "slate",
                ui: {
                  component: "color",
                },
              },
            ],
          },
          {
            type: "object",
            name: "fonts",
            label: "fonts",
            fields: [
              {
                type: "string",
                name: "base",
                label: "base",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "serif",
                label: "serif",
              },
            ],
          },
        ],
      },
    ],
  },
});
