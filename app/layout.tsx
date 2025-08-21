import "@/styles/global.scss";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <title>Erik Halenkamp - Portfolio</title>
                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
            </head>
            <body>{children}</body>
        </html>
    )
}