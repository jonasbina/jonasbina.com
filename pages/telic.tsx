import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Telic() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const interval = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    router.push("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className={"flex w-full justify-center items-center"}>
                <p>How did you get here?</p>
            </div>
            <div className={"flex w-full justify-center items-center"}>
                <p>{countdown}</p>
            </div>
        </div>
    );
}
