import '../styles/globals.css';
import Header from './Header';
import Providers from './Providers';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      {/* UI tip */}
      {/* gray-100 more subtle and gentle to our eyes than bg white  */}

      {/* Client Provider */}
      {/* Our Providers is Client component so we think all its children are also client but NO thats NOT how it works. Nextjs13 is smart enuf it uses server component. */}
      <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
        <Providers>
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
