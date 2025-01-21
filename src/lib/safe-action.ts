import { createSafeActionClient, DEFAULT_SERVER_ERROR_MESSAGE } from "next-safe-action"
import { z } from "zod"
import type { NeonDbError } from "@neondatabase/serverless"

export const actionClient = createSafeActionClient({
    defineMetadataSchema(){
        return z.object({
            actionName: z.string(),
        })
    },
    handleServerError(e){
        if (e.constructor.name === 'NeonDbError') {
            const { code, detail } = e as NeonDbError
            if (code === "23505") {
                return `Unique entry required! ${detail}`
            }
            else{
                return "Database Error! Contact support if error persists!"
            }
        }
        return e.message
    }
})