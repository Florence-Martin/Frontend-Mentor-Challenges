"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ErrorPageProps {
  error: Error & { digest?: string };
  // reset: () => void;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  const router = useRouter();

  const handleReset = () => {
    // reset();
    router.push("/");
  };

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center justify-center h-screen text-center p-4">
      <Image
        src="/assets/drink-coffee.svg"
        alt="Server Error"
        width={400}
        height={300}
        className="w-64 md:w-96 mb-6"
        priority
      />

      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
        Oups ! La page n&apos;est pas encore prête.
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {error?.message || "Je m'en occupe au plus vite !"}
      </p>

      <button
        onClick={() => handleReset()}
        className="px-5 py-2 items-center bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300"
      >
        Retour Accueil
      </button>
    </div>
  );
}
