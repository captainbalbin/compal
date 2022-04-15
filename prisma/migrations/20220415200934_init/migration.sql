/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `Keycap` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[url]` on the table `Spring` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Made the column `url` on table `Deskmat` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `url` to the `Manufacturer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Store" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL
);
INSERT INTO "new_Store" ("id", "name") SELECT "id", "name" FROM "Store";
DROP TABLE "Store";
ALTER TABLE "new_Store" RENAME TO "Store";
CREATE UNIQUE INDEX "Store_id_key" ON "Store"("id");
CREATE UNIQUE INDEX "Store_name_key" ON "Store"("name");
CREATE UNIQUE INDEX "Store_url_key" ON "Store"("url");
CREATE TABLE "new_Deskmat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "storeId" INTEGER NOT NULL,
    "manufacturerId" INTEGER,
    "thickness" INTEGER,
    "price" INTEGER NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    CONSTRAINT "Deskmat_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Deskmat_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Deskmat" ("id", "inStock", "manufacturerId", "name", "price", "storeId", "thickness", "url") SELECT "id", "inStock", "manufacturerId", "name", "price", "storeId", "thickness", "url" FROM "Deskmat";
DROP TABLE "Deskmat";
ALTER TABLE "new_Deskmat" RENAME TO "Deskmat";
CREATE UNIQUE INDEX "Deskmat_url_key" ON "Deskmat"("url");
CREATE TABLE "new_Manufacturer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL
);
INSERT INTO "new_Manufacturer" ("id", "name") SELECT "id", "name" FROM "Manufacturer";
DROP TABLE "Manufacturer";
ALTER TABLE "new_Manufacturer" RENAME TO "Manufacturer";
CREATE UNIQUE INDEX "Manufacturer_name_key" ON "Manufacturer"("name");
CREATE UNIQUE INDEX "Manufacturer_url_key" ON "Manufacturer"("url");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Keycap_url_key" ON "Keycap"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Spring_url_key" ON "Spring"("url");
