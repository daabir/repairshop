import { db } from "@/db"
import { customers } from "@/db/schema"
import { ilike, or,sql } from "drizzle-orm"

export async function getCustomerSearchResults(searchText:string) {
    const results = await db.select()
        .from(customers)
        .where(or(
            // ilike(customers.firstName, `%${searchText}%`),
            // ilike(customers.lastName, `%${searchText}%`),
            ilike(customers.email, `%${searchText}%`),
            ilike(customers.phone, `%${searchText}%`),
            // ilike(customers.address1, `%${searchText}%`),
            // ilike(customers.address2, `%${searchText}%`),
            ilike(customers.city, `%${searchText}%`),
            // ilike(customers.state, `%${searchText}%`),
            ilike(customers.pin, `%${searchText}%`),
            // ilike(customers.notes, `%${searchText}%`),
            //custom sql query to implement first and last name searches. (note: this may make the app slightly slow)
            sql`lower(concat(${customers.firstName}, ' ', ${customers.lastName})) LIKE ${`%${searchText.toLowerCase().replace(' ', '%')}%`}`
        ))
    return results
}