import { useParams } from 'react-router-dom';
import Gallery from '@/components/Gallery';
import { GalleryView } from '@/components/GalleryView';
import SiteNav from '@/components/SiteNav';

export default function GalleryPage() {
  const { category, subcategory, year } = useParams();

  return (
    <div className="min-h-screen bg-background font-inter text-white antialiased">
      {/* Top Navigation Bar */}
      <nav className="w-full px-8 md:px-16 py-5 bg-background z-50 sticky top-0 text-white border-b border-border">
        <SiteNav />
      </nav>
      <main className="flex-1">
        {category && subcategory && year ? (
          <GalleryView />
        ) : (
          <Gallery />
        )}
      </main>
    </div>
  );
}
