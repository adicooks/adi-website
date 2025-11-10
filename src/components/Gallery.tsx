import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import galleryData from './galleryData';

type Category = {
  id: string;
  name: string;
  subcategories: {
    id: string;
    name: string;
    years: string[];
  }[];
};

const generateCategories = (): Category[] => {
  const categories: Category[] = [];

  for (const [categoryId, categoryData] of Object.entries(galleryData)) {
    const subcategories = [];

    for (const [subcategoryId, subcategoryData] of Object.entries(categoryData)) {
      if (Array.isArray(subcategoryData)) {
        subcategories.push({
          id: subcategoryId,
          name: subcategoryId.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' '),
          years: []
        });
      } else {
        const years = Object.keys(subcategoryData);
        subcategories.push({
          id: subcategoryId,
          name: subcategoryId.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' '),
          years
        });
      }
    }

    categories.push({
      id: categoryId,
      name: categoryId.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' '),
      subcategories
    });
  }

  return categories;
};

// Define the Image type with video support
type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: string;
  subcategory: string;
  year?: string;
  isVideo?: boolean;
  thumbnail?: string;
};

// Flatten all images from galleryData
const getAllImages = (): GalleryImage[] => {
  const allImages: GalleryImage[] = [];

  for (const [category, subcategories] of Object.entries(galleryData)) {
    for (const [subcategory, subcategoryData] of Object.entries(subcategories)) {
      if (Array.isArray(subcategoryData)) {
        // Handle flat structure (array of images)
        subcategoryData.forEach(image => {
          allImages.push({
            ...image,
            category,
            subcategory
          });
        });
      } else {
        for (const [year, images] of Object.entries(subcategoryData)) {
          (images as any[]).forEach(image => {
            allImages.push({
              ...image,
              category,
              subcategory,
              year
            });
          });
        }
      }
    }
  }

  return allImages;
};

const categories = generateCategories();

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [filteredImages, setFilteredImages] = useState(getAllImages());
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption?: string;
    isVideo?: boolean;
    thumbnail?: string;
  } | null>(null);
  const navigate = useNavigate();

  // Get the current category object
  const currentCategory = selectedCategory
    ? categories.find(cat => cat.id === selectedCategory)
    : null;

  // Update filtered images when filters change
  useEffect(() => {
    let images = getAllImages();

    if (selectedCategory) {
      images = images.filter(img => img.category === selectedCategory);

      if (selectedSubcategory) {
        images = images.filter(img => img.subcategory === selectedSubcategory);

        if (selectedYear) {
          images = images.filter(img => img.year === selectedYear);
        }
      }
    }

    setFilteredImages(images);
  }, [selectedCategory, selectedSubcategory, selectedYear]);

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
    setSelectedYear(null);
  };

  const handleSubcategoryChange = (subcategoryId: string | null) => {
    setSelectedSubcategory(subcategoryId);
    setSelectedYear(null);
  };

  const handleImageClick = (image: any) => {
    setSelectedImage({
      src: image.src,
      alt: image.alt,
      caption: image.caption,
      isVideo: image.isVideo,
      thumbnail: image.thumbnail
    });
  };

  return (
    <div className="min-h-screen bg-background font-inter text-white antialiased">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-2 mb-12">
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium font-sans">GALLERY</h3>
          <h2 className="text-3xl md:text-4xl font-bold font-sans">Memories & Moments</h2>
          <p className="text-muted-foreground">
            A collection of competitions, events, and performances
          </p>
        </div>

        {/* Gallery grid */}
        <div className="mb-4">
          <h2 className="text-lg font-medium mb-3">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background border-border hover:bg-accent/50'
                }`}
              >
                {category.name}
              </button>
            ))}
            {selectedCategory && (
              <button
                onClick={() => handleCategoryChange(null)}
                className="px-4 py-2 rounded-full text-sm font-medium border border-border bg-background hover:bg-accent/50 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

          {/* Subcategories */}
          {selectedCategory && (
            <div className="mb-4">
              <h2 className="text-lg font-medium mb-3">Subcategories</h2>
              <div className="flex flex-wrap gap-2">
                {currentCategory?.subcategories.map((subcategory) => (
                  <button
                    key={subcategory.id}
                    onClick={() => handleSubcategoryChange(subcategory.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedSubcategory === subcategory.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    {subcategory.name}
                  </button>
                ))}
                {selectedSubcategory && (
                  <button
                    onClick={() => handleSubcategoryChange(null)}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-muted hover:bg-muted/80 transition-colors"
                  >
                    All
                  </button>
                )}
              </div>
            </div>
          )}
        {filteredImages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No photos found matching your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSelectedSubcategory(null);
                setSelectedYear(null);
              }}
              className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl aspect-square bg-card border border-border cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg"
                onClick={() => handleImageClick(image)}
              >
                <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
                  {image.isVideo ? (
                    <>
                      <video
                        className="w-full h-full object-cover"
                        src={image.src}
                        preload="metadata"
                        style={{ display: 'none' }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-black"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <img
                        src={image.thumbnail || '/placeholder-video.svg'}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder-video.svg';
                        }}
                      />
                    </>
                  ) : (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                        target.alt = 'Image not found';
                      }}
                    />
                  )}
                </div>
                {image.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium font-sans">{image.caption}</p>
                    {image.year && <p className="text-xs text-muted-foreground mt-1">{image.year}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-background border-0">
          {selectedImage && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 -right-12 text-white hover:bg-accent/50 rounded-full border border-border"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
              <div className="bg-card rounded-xl overflow-hidden border border-border">
                {selectedImage.isVideo ? (
                  <div className="relative pt-[56.25%] bg-black">
                    <video
                      className="absolute top-0 left-0 w-full h-full"
                      controls
                      autoPlay
                      src={selectedImage.src}
                    />
                  </div>
                ) : (
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full max-h-[80vh] object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                      target.alt = 'Image not found';
                    }}
                  />
                )}
                {selectedImage.caption && (
                  <div className="p-4 bg-card border-t border-border">
                    <p className="text-sm text-foreground font-sans">{selectedImage.caption}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Gallery;
