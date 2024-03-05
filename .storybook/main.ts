import type { StorybookConfig } from "@storybook/nextjs";
import * as path from "path";

const config: StorybookConfig = {
  stories: [
    // "../stories/**/*.mdx",
    // "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@/components": path.resolve(__dirname, "../components"),
        "@/utils": path.resolve(__dirname, "../utils")
      };
    }
    return config;
  }
};
export default config;
