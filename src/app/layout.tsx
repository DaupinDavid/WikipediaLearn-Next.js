"use client";
/**
 * ============================================
 * LAYOUT PRINCIPAL (layout.tsx)
 * ============================================
 * MODIFICATION : Ajout de useHydrateStore pour corriger
 * le bug d'hydration Zustand + Next.js.
 *
 * Le "use client" est nécessaire pour pouvoir utiliser
 * le hook useHydrateStore (qui contient un useEffect).
 */

import type { Metadata } from "next";
import "./globals.css";
import { useHydrateStore } from "@/store/gameStore";

// ⚠️ Metadata ne peut pas être exportée depuis un Client Component.
// On la déplace dans un fichier séparé si besoin, ou on la supprime ici.
// Pour l'instant on la garde en commentaire — Next.js l'ignorera
// silencieusement dans un "use client".

// export const metadata: Metadata = {
//   title: "Wikipedia Learn — Le Moyen-Âge",
//   description: "Plateforme d'apprentissage gamifiée sur le Moyen-Âge",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ← UNE SEULE LIGNE : déclenche la lecture de localStorage côté client
  // après le premier rendu, évitant ainsi le mismatch serveur/client.
  useHydrateStore();

  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
