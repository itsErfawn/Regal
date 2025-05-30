-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_customer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "family" TEXT,
    "number" TEXT,
    "email" TEXT,
    "geust" BOOLEAN NOT NULL,
    "created_at" DATETIME,
    "created_at_fa" TEXT
);
INSERT INTO "new_customer" ("created_at", "created_at_fa", "email", "family", "geust", "id", "name", "number") SELECT "created_at", "created_at_fa", "email", "family", "geust", "id", "name", "number" FROM "customer";
DROP TABLE "customer";
ALTER TABLE "new_customer" RENAME TO "customer";
CREATE UNIQUE INDEX "customer_number_key" ON "customer"("number");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
