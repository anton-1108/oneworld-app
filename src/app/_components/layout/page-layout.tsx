import Footer from "./footer";
import Header from "./header";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function PageLayout({
  children,
  title,
  description,
}: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="flex-1">
        <div className="bg-white py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {title}
                </h1>
                {description && (
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {description}
                  </p>
                )}
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
