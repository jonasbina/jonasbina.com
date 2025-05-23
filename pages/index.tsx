import Image from "next/image";
import 'animate.css';
// @ts-ignore
import img from "../public/github-mark-white.svg";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] min-w-full">
            <main className="flex flex-col gap-8 row-start-2 items-center text-center justify-center min-w-max">
                <div
                    className="text-4xl text-center font-[family-name:var(--font-geist-mono)] animate__animated animate__slideInDown">
                    <h1>
                        Jonas Bina
                    </h1>
                </div>
                <div
                    className="text-sm text-center font-[family-name:var(--font-geist-mono)] animate__animated animate__slideInUp">
                    <p className="mb-2">
                        A native Android developer from Czechia
                    </p>
                </div>
                <div
                    className="text-2xl text-center font-[family-name:var(--font-geist-mono)] font-bold animate__animated animate__slideInUp">
                    <h1>
                        What Tech I Worked With
                    </h1>
                </div>
                <div className="w-full max-w-3xl animate__animated animate__slideInUp">
                    <a className="text-blue-200" href={"https://kotlinlang.org/docs/multiplatform.html"}>Kotlin Mutliplatform App Development</a>
                    <br/>
                    <a className="text-blue-200" href={"https://developer.android.com/compose"}>Jetpack Compose UI Design</a>
                    <br/>
                    <a className="text-blue-200" href={"https://firebase.google.com"}>Firebase Remote DB</a>
                    <br/>
                    <a className="text-blue-200" href={"https://github.com/sqldelight/sqldelight"}>SQLDelight Local Database</a>
                    <br/>
                    <a className="text-blue-200" href={"https://www.mapbox.com/mobile-maps-sdk"}>Mapbox for Android</a>
                    <br/>
                </div>
                <div className="flex gap-4 items-center flex-col animate__animated animate__slideInUp">
                    <a
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                        href="/projects"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        My projects
                    </a>
                </div>
            </main>
            <footer
                className="row-start-3 flex gap-6 flex-wrap items-center justify-center animate__animated animate__slideInUp">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.github.com/jonasbina/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src={img}
                        alt="Globe icon"
                        width={32}
                        height={32}
                    />
                    Checkout my github
                </a>
            </footer>
        </div>
    );
}