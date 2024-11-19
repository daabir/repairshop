import { getCustomer } from "@/lib/queries/getCustomer";
import { BackButton } from "@/components/BackButton";
import CustomerForm from "@/app/(rs)/customers/form/CustomerForm";

export default async function CustomerFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined}>
}) {
    try {
        const { customerId } = await searchParams
        // edit customer form
        if (customerId){
            const customer = await getCustomer(parseInt(customerId))
            if (!customer) {
                return(
                    <>
                        <h2 className="text-2xl mb-2">Customer ID #{customerId} not found</h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }
            console.log(customer);
            
            // customer form component
            return <CustomerForm  customer={customer}/>
        } else {
            // new customer
            return <CustomerForm />
        }
    } catch (e) {
        if (e instanceof Error){
            throw e
        }
    }
}