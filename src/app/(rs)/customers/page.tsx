import CustomerSearch from "@/app/(rs)/customers/CustomerSearch"
import { getCustomerSearchResults } from "@/lib/queries/getCustomerSearchResults"
import CustomerTable from "@/app/(rs)/customers/CustomerTable"

export const metadata = {
    title: "Customer Search",
}

export default async function Customers({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined}>
}){
    const { searchText } = await searchParams
    
    if(!searchText) return <CustomerSearch />

    // query db
    const results = await getCustomerSearchResults(searchText)

    //return result
    return(
        <>
            <CustomerSearch />
            {results.length ? <CustomerTable data={results} />: (
                <p className="mt-4">No results found!</p>
            )}
        </>
    )
}