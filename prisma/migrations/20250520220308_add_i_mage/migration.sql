-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "parent_id" INTEGER DEFAULT 0,
    "image" TEXT
);
INSERT INTO "new_categories" ("id", "image", "name", "parent_id", "url") SELECT "id", "image", "name", "parent_id", "url" FROM "categories";
DROP TABLE "categories";
ALTER TABLE "new_categories" RENAME TO "categories";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
