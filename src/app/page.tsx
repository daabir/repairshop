import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-3xl font-bold">Daabir&apos;s Software<br/>Services Shop</h1>
          <address>
            123 Kunzer St.<br/>
            Baramulla District, 193404
          </address>
          <p>
            <Link href="tel:9797000000" className="hover:underline">
              +91-7298-000-000
            </Link>
          </p>
        </div>
      </main>
    
    </div>
  );
}
