"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_API_URL
          }/api/v1/properties/search?${searchParams.toString()}`
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setProperties(data?.data || []);
      } catch (err) {
        console.error("Search API error:", err);
        setError(true);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  /* -------------------- STATES -------------------- */

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-500">
        Loading properties...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-red-500">
        Something went wrong. Please try again.
      </div>
    );
  }

  if (!properties.length) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 mt-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          No properties match your search criteria
        </h2>
        <p className="text-gray-500 max-w-md mb-6 text-lg">
          Try adjusting your filters or searching with different keywords.
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 rounded-lg bg-brickred text-white font-semibold hover:bg-ochre transition text-lg"
        >
          Back to Search
        </button>
      </div>
    );
  }

  /* -------------------- RESULTS -------------------- */

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-32 mt-10">
      {properties.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl overflow-hidden hover:shadow-xl transition bg-white"
        >
          {/* Image */}
          <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
            Image Coming Soon
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Badges */}
            <div className="flex gap-2 mb-2">
              {item.featuredListing === "Yes" && (
                <span className="text-xs bg-brickred text-white px-2 py-1 rounded">
                  Featured
                </span>
              )}
              {item.premiumListing === "Yes" && (
                <span className="text-xs bg-ochre text-white px-2 py-1 rounded">
                  Premium
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg leading-snug mb-1">
              {item.propertyTitle}
            </h3>

            {/* Type */}
            <p className="text-sm text-gray-600 mb-1">
              {item.propertyType} • {item.subType} • {item.listingType}
            </p>

            {/* Location */}
            <p className="text-sm text-gray-500 mb-3">
              {item.locality}, {item.city}
            </p>

            {/* Price */}
            <p className="text-xl font-semibold text-brickred mb-2">
              ₹ {(item.totalPrice / 10000000).toFixed(2)} Cr
            </p>

            {/* Area */}
            <p className="text-sm text-gray-600 mb-2">
              Built-up: {item.builtUpArea} sq.ft • Carpet: {item.carpetArea}{" "}
              sq.ft
            </p>

            {/* Status */}
            <p className="text-sm mb-2">
              <span className="font-medium">Status:</span> {item.propertyStatus}
            </p>

            {/* Builder */}
            <p className="text-sm text-gray-600 mb-3">
              By <span className="font-medium">{item.builderName}</span>
            </p>

            {/* Amenities */}
            {item.amenities?.length > 0 && (
              <p className="text-sm text-gray-500 mb-4">
                Amenities: {item.amenities.slice(0, 3).join(" • ")}
              </p>
            )}

            {/* CTA */}
            <button
              onClick={() => router.push(`/properties/${item.id}`)}
              className="w-full py-2 rounded-lg border border-brickred text-brickred font-semibold hover:bg-brickred hover:text-white transition"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
