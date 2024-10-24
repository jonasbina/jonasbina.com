import RootLayout from "./layout";

export default function Home() {
    return(
        <RootLayout>
            <div
                className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] min-w-full">
                <main className="flex flex-col gap-8 row-start-2 items-center text-center justify-center min-w-max">
                    <div
                        className="text-4xl text-center font-[family-name:var(--font-geist-mono)] animate__animated animate__slideInDown">
                        <h1>I'm too lazy to put things in here for now sorry :/</h1>
                    </div>
                </main>
            </div>


        </RootLayout>
)
}