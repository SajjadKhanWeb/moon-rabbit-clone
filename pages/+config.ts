import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

const config: Config = {
  // https://vike.dev/head-tags
  title: "Moon Rabbit Tours",
  description: "Explore Northern Pakistan with Moon Rabbit Tours.",

  extends: [vikeReact],
  prerender: true,
};

export default config;
