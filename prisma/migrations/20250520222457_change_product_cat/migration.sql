/*
  Warnings:

  - You are about to drop the column `product_id` on the `colors` table. All the data in the column will be lost.
  - You are about to alter the column `category` on the `products` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to drop the column `product_id` on the `sizes` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_colors" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "color" TEXT NOT NULL
);
INSERT INTO "new_colors" ("color", "id") SELECT "color", "id" FROM "colors";
DROP TABLE "colors";
ALTER TABLE "new_colors" RENAME TO "colors";
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "special" INTEGER NOT NULL,
    "warranty" TEXT NOT NULL,
    "rate" REAL NOT NULL,
    "category" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL
);
INSERT INTO "new_products" ("category", "description", "id", "image", "name", "price", "quantity", "rate", "special", "url", "warranty") SELECT "category", "description", "id", "image", "name", "price", "quantity", "rate", "special", "url", "warranty" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE TABLE "new_sizes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "size" TEXT NOT NULL
);
INSERT INTO "new_sizes" ("id", "size") SELECT "id", "size" FROM "sizes";
DROP TABLE "sizes";
ALTER TABLE "new_sizes" RENAME TO "sizes";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
