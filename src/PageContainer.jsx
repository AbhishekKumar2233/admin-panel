export default function PageContainer({
  children
}) {
  return (
    <main className="ml-64 bg-slate-100 min-h-screen">
      {children}
    </main>
  );
}