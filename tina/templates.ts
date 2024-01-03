import type { TinaField } from "tinacms";
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
    },
    {
      type: "string",
      name: "metaDesc",
      label: "metaDesc",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "socialImage",
      label: "socialImage",
    },
  ] as TinaField[];
}
export function design_tokensFields() {
  return [
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
  ] as TinaField[];
}
