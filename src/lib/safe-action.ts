import { createSafeActionClient, DEFAULT_SERVER_ERROR_MESSAGE } from "next-safe-action"
import { z } from "zod"

export const actionClient = createSafeActionClient({
    defineMetadataSchema(){
        return z.object({
            actionName: z.string(),
        })
    },
    handleServerError(e){
        if (e.constructor.name === 'DatabaseError') {
            return "Database Error!"
        }
        return e.message
    }
})