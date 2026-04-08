export const metadata = {
  title: 'LaunchGate Test App',
  description: 'Minimal app used to validate the LaunchGate workflow.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
