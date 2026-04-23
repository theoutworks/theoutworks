import type { Config } from "prettier"

const config: Config = {
  semi: false,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-packagejson",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "^react$",
    "^next(/.*)?$",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/(.*)$",
    "",
    "^[./]",
  ],
}

export default config
