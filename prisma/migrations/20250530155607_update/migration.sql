-- CreateTable
CREATE TABLE "compare" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" INTEGER NOT NULL,
    "customer_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL
);
INSERT INTO "new_cart" ("color", "customer_id", "id", "product_id", "quantity", "size") SELECT "color", "customer_id", "id", "product_id", "quantity", "size" FROM "cart";
DROP TABLE "cart";
ALTER TABLE "new_cart" RENAME TO "cart";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
