import GalleryLightbox from "@/components/GalleryLightbox";

const galleryItems = [
  { src: "/images/01.jpg", label: "Interiors", category: "Interiors", alt: "Meridian Sky interior" },
  { src: "/images/02.jpg", label: "Living", category: "Living", alt: "Meridian Sky living space" },
  { src: "/images/03.jpg", label: "City", category: "City", alt: "City view from Meridian Sky" },
  { src: "/images/04.jpg", label: "Lifestyle", category: "Lifestyle", alt: "Meridian Sky lifestyle" },
  { src: "/images/05.jpg", label: "Rooftop", category: "Rooftop", alt: "Meridian Sky rooftop" },
  { src: "/images/06.jpg", label: "View", category: "View", alt: "View from Meridian Sky" },
];

export default function PublicGallery() {
  return <GalleryLightbox items={galleryItems} />;
}
