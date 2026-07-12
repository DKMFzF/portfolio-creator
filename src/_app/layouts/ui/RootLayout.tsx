import type { Metadata, Viewport } from 'next';
import type { JSX, PropsWithChildren } from "react";

import { Header } from '@/widgets/Header/';
import { Main } from "@/shared/ui";
import { siteConfig, titleSiteTemplate } from '@/shared/config';
import cn from "@/shared/lib/cn";
import "@/shared/styles";

import styles from "./RootLayout.module.css";

const bem = cn('RootLayout');

export const metadata: Metadata = {
  title: { default: siteConfig.title, template: titleSiteTemplate(siteConfig.title) },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: siteConfig.icons.ico.path, sizes: siteConfig.icons.ico.sizes },
      { url: siteConfig.icons.svg.path, type: siteConfig.icons.svg.type },
      { url: siteConfig.icons.png.path, type: siteConfig.icons.png.type },
      {
        url: siteConfig.icons.png96.path,
        sizes: siteConfig.icons.png96.sizes,
        type: siteConfig.icons.png96.type,
      },
    ],
    apple: siteConfig.icons.apple,
  },
  manifest: siteConfig.manifest,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [{ url: siteConfig.icons.ico.path }],
    type: "website",
  },
  twitter: {
    card: 'summary',
    title: siteConfig.title,
    description: siteConfig.description, images: [siteConfig.icons.ico.path],
  },
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

export function RootLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <html lang="en">
      <body>
        <div className={styles[bem()]}>
          <Header />
          <Main>
            {children}
          </Main>
        </div>
      </body>
    </html>
  );
}
