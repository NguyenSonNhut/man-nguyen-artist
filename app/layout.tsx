import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {

    title: {

        default: "Man Nguyen Fine Art",

        template: "%s | Man Nguyen Fine Art",

    },

    description:
        "Vietnamese Fine Artist specializing in oil painting, watercolor and sketch artworks.",

    icons: {

        icon: "/favicon.ico",

        apple: "/apple-icon.png",

    },

    openGraph: {

        title: "Man Nguyen Fine Art",

        description:
            "Vietnamese Fine Artist",

        images: [

            "/images/seo/og-image.webp",

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