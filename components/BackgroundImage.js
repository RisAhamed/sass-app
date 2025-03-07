import Image from 'next/image';

export default function BackgroundImage({ 
  imageSource, 
  alt = "Background image",
  size = "md", // "sm", "md", "lg"
  opacity = "low", // "low", "medium", "high"
}) {
  // Map props to specific Tailwind classes
  const sizeClasses = {
    sm: "w-[300px] h-[300px]",
    md: "w-[500px] h-[500px]",
    lg: "w-[700px] h-[700px]",
  };
  
  const opacityClasses = {
    low: "opacity-10",
    medium: "opacity-25",
    high: "opacity-50",
  };
  
  const widthHeight = size === "sm" ? 300 : size === "lg" ? 700 : 500;
  
  return (
    <div className="absolute inset-0 flex justify-center items-center -z-10 pointer-events-none overflow-hidden">
      <div className={`relative ${sizeClasses[size]}`}>
        <div className="absolute inset-0 bg-black opacity-20 rounded-3xl blur-md transform scale-105"></div>
        <Image 
          src={imageSource}
          alt={alt} 
          width={widthHeight}
          height={widthHeight}
          className={`rounded-3xl object-cover w-full h-full ${opacityClasses[opacity]} shadow-2xl`}
        />
      </div>
    </div>
  );
} 