import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function usePolling(ms: number = 180000, searchParam: string | null) {
    const router = useRouter();

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('Interval Running');
            if(!searchParam) {
                console.log('Refreshing data');
                router.refresh();
            }
            
        }, ms)

        return () => clearInterval(intervalId);
    }, [searchParam, ms]) // eslint-disable-line react-hooks/exhaustive-deps
}