import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    AZURE_ACS_ENDPOINT: z.string().url(),
    AZURE_ACS_ACCESS_KEY: z.string().min(1),
    ACS_FROM: z.string().email(),
    ACS_TO: z.string().email(),
  },
  runtimeEnv: {
    AZURE_ACS_ENDPOINT: process.env.AZURE_ACS_ENDPOINT,
    AZURE_ACS_ACCESS_KEY: process.env.AZURE_ACS_ACCESS_KEY,
    ACS_FROM: process.env.ACS_FROM,
    ACS_TO: process.env.ACS_TO,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})
