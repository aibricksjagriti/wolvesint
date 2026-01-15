import Image from "next/image";
import { MapPin } from "lucide-react";

export default function PropertyCard() {
  return (
    <div className="rounded-xl shadow-sm hover:shadow-md transition overflow-hidden mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Image */}
        <div className="relative h-48 sm:h-full">
          <Image
            src="/home/upcoming/sobha-kharadi.webp"
            alt="Property"
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="sm:col-span-2 p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold text-darkGray">
              AI Bricks Signature Towers
            </h2>

            <p className="flex items-center gap-1 text-md text-gray-500 mt-1">
              <MapPin size={14} /> Hinjewadi, Pune
            </p>

            <div className="mt-3 space-y-1 text-md">
              <p>2, 3 BHK • 850 – 1200 sqft</p>
              <p className="font-semibold text-brickred text-md">
                ₹ 1.10 Cr – 2.40 Cr
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-4">
            <button className="flex-1 border border-brickred text-darkGray py-2 rounded-lg text-md hover:bg-brickred hover:text-white transition">
              Schedule Tour
            </button>

            <button className="flex-1 bg-[var(--brick-red)] text-white py-2 rounded-lg text-sm hover:bg-[var(--brick-red-dark)] transition">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import Image from "next/image";
// import { MapPin } from "lucide-react";

// export default function PropertyCard({ property }) {
//   // 🔐 SAFETY CHECK
//   if (!property) return null;

//   const {
//     propertyTitle,
//     city,
//     locality,
//     subType,
//     builtUpArea,
//     totalPrice,
//     imageGallery,
//   } = property;

//   const formatPrice = (price) => {
//     if (!price) return "₹ N/A";
//     if (price >= 10000000) return `₹ ${(price / 10000000).toFixed(2)} Cr`;
//     if (price >= 100000) return `₹ ${(price / 100000).toFixed(2)} L`;
//     return `₹ ${price}`;
//   };

//   return (
//     <div className="rounded-xl shadow-sm hover:shadow-md transition overflow-hidden mb-10 bg-white">
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         <div className="relative h-48 sm:h-full">
//           <Image
//             src={
//               imageGallery && imageGallery.length > 0
//                 ? imageGallery[0]
//                 : "/home/upcoming/sobha-kharadi.webp"
//             }
//             alt={propertyTitle || "Property"}
//             fill
//             className="object-cover"
//           />
//         </div>

//         <div className="sm:col-span-2 p-4 flex flex-col justify-between">
//           <div>
//             <h2 className="text-lg font-semibold text-darkGray">
//               {propertyTitle}
//             </h2>

//             <p className="flex items-center gap-1 text-md text-gray-500 mt-1">
//               <MapPin size={14} /> {locality}, {city}
//             </p>

//             <div className="mt-3 space-y-1 text-md">
//               <p>
//                 {subType} • {builtUpArea} sqft
//               </p>

//               <p className="font-semibold text-brickred text-md">
//                 {formatPrice(totalPrice)}
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-3 mt-4">
//             <button className="flex-1 border border-brickred text-darkGray py-2 rounded-lg hover:bg-brickred hover:text-white transition">
//               Schedule Tour
//             </button>

//             <button className="flex-1 bg-[var(--brick-red)] text-white py-2 rounded-lg hover:bg-[var(--brick-red-dark)] transition">
//               Live Chat
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
