import '../styles/globals.css';
import Header from './Header';
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
      <body className="bg-gray-100 dark:bg-zinc900 transition-all duration-700">
        <Header />
        <div className="max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
