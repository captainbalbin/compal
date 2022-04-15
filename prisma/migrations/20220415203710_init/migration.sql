/*
  Warnings:

  - You are about to alter the column `price` on the `Lube` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - You are about to alter the column `price` on the `Switch` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - You are about to alter the column `price` on the `SwitchFilm` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - You are about to alter the column `price` on the `Deskmat` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - You are about to alter the column `price` on the `Stabilizer` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - You are about to alter the column `price` on the `Keycap` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - You are about to alter the column `price` on the `Spring` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lube" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "volume" INTEGER,
    "inStock" BOOLEAN NOT NULL,
    "manufacturerId" INTEGER,
    "storeId" INTEGER,
    CONSTRAINT "Lube_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Lube_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Lube" ("id", "inStock", "manufacturerId", "name", "price", "storeId", "url", "volume") SELECT "id", "inStock", "manufacturerId", "name", "price", "storeId", "url", "volume" FROM "Lube";
DROP TABLE "Lube";
ALTER TABLE "new_Lube" RENAME TO "Lube";
CREATE TABLE "new_Switch" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "manufacturerId" INTEGER NOT NULL,
    "price" DECIMAL NOT NULL,
    "type" TEXT NOT NULL,
    "ledCompatible" BOOLEAN NOT NULL,
    "topHousing" TEXT,
    "bottomHousing" TEXT,
    "stem" TEXT,
    "inStock" BOOLEAN NOT NULL,
    "factoryLube" BOOLEAN,
    CONSTRAINT "Switch_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Switch" ("bottomHousing", "factoryLube", "id", "inStock", "ledCompatible", "manufacturerId", "name", "price", "stem", "topHousing", "type", "url") SELECT "bottomHousing", "factoryLube", "id", "inStock", "ledCompatible", "manufacturerId", "name", "price", "stem", "topHousing", "type", "url" FROM "Switch";
DROP TABLE "Switch";
ALTER TABLE "new_Switch" RENAME TO "Switch";
CREATE TABLE "new_SwitchFilm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    "manufacturerId" INTEGER,
    "storeId" INTEGER,
    CONSTRAINT "SwitchFilm_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "SwitchFilm_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_SwitchFilm" ("id", "inStock", "manufacturerId", "name", "price", "storeId", "url") SELECT "id", "inStock", "manufacturerId", "name", "price", "storeId", "url" FROM "SwitchFilm";
DROP TABLE "SwitchFilm";
ALTER TABLE "new_SwitchFilm" RENAME TO "SwitchFilm";
CREATE TABLE "new_Deskmat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "storeId" INTEGER NOT NULL,
    "manufacturerId" INTEGER,
    "thickness" INTEGER,
    "price" DECIMAL NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    CONSTRAINT "Deskmat_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Deskmat_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Deskmat" ("id", "inStock", "manufacturerId", "name", "price", "storeId", "thickness", "url") SELECT "id", "inStock", "manufacturerId", "name", "price", "storeId", "thickness", "url" FROM "Deskmat";
DROP TABLE "Deskmat";
ALTER TABLE "new_Deskmat" RENAME TO "Deskmat";
CREATE UNIQUE INDEX "Deskmat_url_key" ON "Deskmat"("url");
CREATE TABLE "new_Stabilizer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "set" TEXT NOT NULL,
    "manufacturerId" INTEGER,
    "storeId" INTEGER,
    CONSTRAINT "Stabilizer_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Stabilizer_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Stabilizer" ("id", "inStock", "manufacturerId", "name", "price", "set", "storeId", "type", "url") SELECT "id", "inStock", "manufacturerId", "name", "price", "set", "storeId", "type", "url" FROM "Stabilizer";
DROP TABLE "Stabilizer";
ALTER TABLE "new_Stabilizer" RENAME TO "Stabilizer";
CREATE TABLE "new_Keycap" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "manufacturerId" INTEGER,
    "material" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "layoutSupport" TEXT,
    "inStock" BOOLEAN NOT NULL,
    CONSTRAINT "Keycap_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Keycap" ("id", "inStock", "layoutSupport", "manufacturerId", "material", "name", "price", "url") SELECT "id", "inStock", "layoutSupport", "manufacturerId", "material", "name", "price", "url" FROM "Keycap";
DROP TABLE "Keycap";
ALTER TABLE "new_Keycap" RENAME TO "Keycap";
CREATE UNIQUE INDEX "Keycap_url_key" ON "Keycap"("url");
CREATE TABLE "new_Spring" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "travelDistance" INTEGER,
    "actuationForce" INTEGER,
    "bottomOut" INTEGER,
    "price" DECIMAL NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    "manufacturerId" INTEGER,
    "storeId" INTEGER,
    CONSTRAINT "Spring_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Spring_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Spring" ("actuationForce", "bottomOut", "id", "inStock", "manufacturerId", "name", "price", "storeId", "travelDistance", "type", "url") SELECT "actuationForce", "bottomOut", "id", "inStock", "manufacturerId", "name", "price", "storeId", "travelDistance", "type", "url" FROM "Spring";
DROP TABLE "Spring";
ALTER TABLE "new_Spring" RENAME TO "Spring";
CREATE UNIQUE INDEX "Spring_url_key" ON "Spring"("url");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
