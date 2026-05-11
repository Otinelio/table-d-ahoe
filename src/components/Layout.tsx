import Footer from './Footer';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <main className="layout__main page-enter">
        {children}
      </main>
      <Footer />
    </div>
  );
}
