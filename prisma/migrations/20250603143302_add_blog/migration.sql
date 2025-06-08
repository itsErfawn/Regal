-- CreateTable
CREATE TABLE "Blog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "summery" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "read_time" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "date_added" TEXT NOT NULL
);
