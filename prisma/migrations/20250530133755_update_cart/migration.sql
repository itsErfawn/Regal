/*
  Warnings:

  - Added the required column `color` to the `cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `cart` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" INTEGER NOT NULL,
    "customer_id" TEXT NOT NULL,
    "product_id" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL
);
INSERT INTO "new_cart" ("customer_id", "id", "product_id", "quantity") SELECT "customer_id", "id", "product_id", "quantity" FROM "cart";
DROP TABLE "cart";
ALTER TABLE "new_cart" RENAME TO "cart";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
