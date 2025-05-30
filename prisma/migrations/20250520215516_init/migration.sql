-- CreateTable
CREATE TABLE "address" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customer_id" TEXT NOT NULL,
    "postal_code" INTEGER NOT NULL,
    "province" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "detailed_address" TEXT NOT NULL,
    "customer_name" TEXT NOT NULL DEFAULT '',
    "customer_number" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "address_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "cart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" INTEGER NOT NULL,
    "customer_id" TEXT NOT NULL,
    "product_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "parent_id" INTEGER DEFAULT 0
);

-- CreateTable
CREATE TABLE "colors" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    CONSTRAINT "colors_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "customer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "family" TEXT,
    "number" TEXT,
    "email" TEXT,
    "geust" BOOLEAN NOT NULL,
    "created_at" DATETIME,
    "created_at_fa" TEXT
);

-- CreateTable
CREATE TABLE "otp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "serial" INTEGER NOT NULL,
    "number" TEXT NOT NULL,
    "expired_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "special" INTEGER NOT NULL,
    "warranty" TEXT NOT NULL,
    "rate" REAL NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "sizes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    CONSTRAINT "sizes_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_number_key" ON "customer"("number");

-- CreateIndex
CREATE UNIQUE INDEX "otp_number_key" ON "otp"("number");
