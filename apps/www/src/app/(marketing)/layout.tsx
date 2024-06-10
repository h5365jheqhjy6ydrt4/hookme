import Link from 'next/link'

import { DocSearch } from '@/components/doc-search'
import { MainNav } from '@/components/main-nav'
import { Twitter } from '@/components/ui/icons'
import { marketingConfig } from '@/config/marketing'
import { siteConfig } from '@/config/site'

type MarketingLayoutProps = {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
          <nav className="flex space-x-4 justify-center align-middle">
            <DocSearch />

            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <GitHub className="h-6 w-6 my-auto" />
              <span className="sr-only">Twitter</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>
    </>
  )
}
