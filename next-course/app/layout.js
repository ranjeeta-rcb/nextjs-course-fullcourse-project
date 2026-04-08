 
export const metadata = {
  title : {
    template : "%s | Technical Agency",
    default: 'Technical Agency',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <header style={{background: "teal"}}>Header</header>
        {children}</body>
        <footer style={{background: "brown"}}>Footer</footer>
    </html>
  );
}
