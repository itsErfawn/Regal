-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "special" INTEGER NOT NULL DEFAULT 0,
    "warranty" TEXT,
    "rate" REAL,
    "category" INTEGER NOT NULL,
    "description" TEXT,
    "quantity" INTEGER NOT NULL
);
INSERT INTO "new_products" ("category", "description", "id", "image", "name", "price", "quantity", "rate", "special", "url", "warranty") SELECT "category", "description", "id", "image", "name", "price", "quantity", "rate", "special", "url", "warranty" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
