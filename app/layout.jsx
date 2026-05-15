// app/layout.jsx (Root Layout)
export const metadata = {
  title: 'My Website',
  description: 'Built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* This is where page.jsx contents will render */}
        <main>{children}</main>
      </body>
    </html>
  );
}