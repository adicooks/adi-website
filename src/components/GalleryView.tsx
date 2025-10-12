import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import galleryData from './galleryData';

type Image = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

type YearlyImages = {
  [year: string]: Image[];
};

type GalleryCategory = {
  [subcategory: string]: Image[] | YearlyImages;
};

type GalleryData = {
  [category: string]: GalleryCategory;
};

export function GalleryView() {
  const navigate = useNavigate();
  const { category, subcategory, year } = useParams<{
    category: string;
    subcategory: string;
    year?: string;
  }>();

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  // Get the current category and subcategory data
  const { images, hasYearlyData, availableYears } = useMemo(() => {
    if (!category || !subcategory) {
      return { images: [], hasYearlyData: false, availableYears: [] };
    }

    const categoryData = galleryData[category];
    const subcategoryData = categoryData?.[subcategory];

    if (!subcategoryData) {
      return { images: [], hasYearlyData: false, availableYears: [] };
    }

    // Handle both direct image arrays and year-based image collections
    let images: Image[] = [];
    let hasYearlyData = false;
    let availableYears: string[] = [];

    if (Array.isArray(subcategoryData)) {
      images = subcategoryData;
    } else if (year && subcategoryData[year]) {
      images = subcategoryData[year] as Image[];
      hasYearlyData = true;
      availableYears = Object.keys(subcategoryData).sort().reverse();
    } else if (typeof subcategoryData === 'object' && !Array.isArray(subcategoryData)) {
      // If no year is specified but we have yearly data, use the most recent year
      availableYears = Object.keys(subcategoryData).sort().reverse();
      if (availableYears.length > 0) {
        images = subcategoryData[availableYears[0]] as Image[];
        hasYearlyData = availableYears.length > 1;
      }
    }

    return { images, hasYearlyData, availableYears };
  }, [category, subcategory, year]);

  if (!category || !subcategory) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Gallery</h1>
        <p>Please select a category and subcategory from the gallery.</p>
      </div>
    );
  }

  const categoryData = galleryData[category];
  if (!categoryData) {
    return (
      <div className="container mx-auto p-4">
        <Button variant="outline" onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
        <p>The requested category could not be found.</p>
      </div>
    );
  }

  const subcategoryData = categoryData[subcategory];
  if (!subcategoryData) {
    return (
      <div className="container mx-auto p-4">
        <Button variant="outline" onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h1 className="text-2xl font-bold mb-4">Subcategory Not Found</h1>
        <p>The requested subcategory could not be found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <Button variant="outline" onClick={() => navigate(-1)} className="w-fit">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h1 className="text-2xl font-bold">
          {category} / {subcategory} {year ? `/ ${year}` : ''}
        </h1>
        
        {hasYearlyData && (
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-sm text-muted-foreground">Year:</span>
            <div className="flex gap-1">
              {availableYears.map((y) => (
                <Button
                  key={y}
                  variant={y === year ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    navigate(`/gallery/${category}/${subcategory}/${y}`);
                  }}
                >
                  {y}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      {images.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No images found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg border border-border hover:border-primary transition-colors"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white text-sm">
                  {image.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh]" 
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute -right-12 top-0 text-white hover:bg-white/10"
              onClick={() => setSelectedImage(null)}
            >
              <span className="text-3xl">&times;</span>
            </Button>
            <div className="flex items-center justify-center h-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
            {selectedImage.caption && (
              <div className="mt-4 text-white text-center text-lg">
                {selectedImage.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
