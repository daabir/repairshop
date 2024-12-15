import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { customers } from "@/db/schema"

export const insertCustomerSchema = createInsertSchema(customers, {
    firstName: (schema) => schema.firstName.min(1, "First name is required"),
    lastName: (schema) => schema.lastName.min(1, "Last name is required"),
    address1: (schema) => schema.address1.min(1, "Address is required"),
    city: (schema) => schema.city.min(1, "City is required"),
    state: (schema) => schema.state.length(2, "State must be a two-letter ISO code."),
    email: (schema) => schema.email.email("Invalid email address"),
    pin: (schema) => schema.pin.regex(/^\d{5,6}$/, "Invalid pin code."),
    phone: (schema) => schema.phone.regex(/^\d{4}-\d{6}$/, "Invalid phone number format. Use XXXX-XXXXXX format."),

})

export const selectCustomerSchema = createSelectSchema(customers);

export type insertCustomerSchemaType = typeof insertCustomerSchema._type;
export type selectCustomerSchemaType = typeof selectCustomerSchema._type;
