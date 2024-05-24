"use client"

import { z } from "zod"

export const formSchema = z.object({
  email: z.string().email("Invalid email address").min(5).max(100),
})
