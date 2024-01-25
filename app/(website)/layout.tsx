import Header from './components/header/index'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <>
      <Header />
      <main className="container px-4 lg:px-0">{children}</main>
    </>
  )
}
