import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("http://localhost:3000"),

    title: {

        default: "Man Nguyen Fine Art",

        template: "%s | Man Nguyen Fine Art",

    },

    description:
        "Vietnamese Fine Artist specializing in oil painting, watercolor and sketch artworks.",

    icons: {

        icon: "/images/logo/logo-favicon.ico",

        apple: "/images/logo/logo-favicon.png",

    },

    openGraph: {

        title: "Man Nguyen Fine Art",

        description:
            "Vietnamese Fine Artist",

        images: [

            "/images/seo/logo-favicon.webp",

        ],

    },

};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (

        <html>

            <body>

                {children}

            </body>

        </html>

    );

}