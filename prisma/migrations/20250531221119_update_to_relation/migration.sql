-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" INTEGER NOT NULL,
    "customer_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    CONSTRAINT "cart_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "cart_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_cart" ("color", "customer_id", "id", "product_id", "quantity", "size") SELECT "color", "customer_id", "id", "product_id", "quantity", "size" FROM "cart";
DROP TABLE "cart";
ALTER TABLE "new_cart" RENAME TO "cart";
CREATE TABLE "new_compare" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    CONSTRAINT "compare_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "compare_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_compare" ("customer_id", "id", "product_id") SELECT "customer_id", "id", "product_id" FROM "compare";
DROP TABLE "compare";
ALTER TABLE "new_compare" RENAME TO "compare";
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
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "products_category_fkey" FOREIGN KEY ("category") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_products" ("category", "description", "id", "image", "name", "price", "quantity", "rate", "special", "url", "warranty") SELECT "category", "description", "id", "image", "name", "price", "quantity", "rate", "special", "url", "warranty" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
