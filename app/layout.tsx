import './globals.css';



export const metadata = {
  title: "CodeInsight AI",
  description: "CodeInsight AI - Your AI-powered code assistant",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0D1117] text-white">
        {children}
      </body>
      </html>
  );
}