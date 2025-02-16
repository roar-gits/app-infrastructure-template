/**
 * Project Structure Reference:
 * /src
 * └── ui/            # Presentation layer
 *     ├── components.tsx # Reusable components
 *     ├── layouts.tsx   # [current] Layout components
 *     ├── styles.ts     # Theme & styles
 *     └── ErrorBoundary.tsx
 */

import { PropsWithChildren } from 'react'

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Initiative Management System</h1>
      <div className="flex gap-4">
        <a href="/" className="hover:text-gray-300">Dashboard</a>
        <a href="/initiatives" className="hover:text-gray-300">Initiatives</a>
      </div>
    </nav>
  </header>
)

const Main = ({ children }: PropsWithChildren) => (
  <div className="min-h-screen bg-gray-100">
    <Header />
    <main className="container mx-auto p-4">
      {children}
    </main>
  </div>
)

export const Layouts = {
  Main
};
