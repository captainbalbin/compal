/*
  Warnings:

  - Added the required column `url` to the `Keycap` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Stabilizer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `SwitchFilms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Lube` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Spring` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Switch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Deskmat" ADD COLUMN "url" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Keycap" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "manufacturerId" INTEGER,
    "material" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "layoutSupport" TEXT,
    "inStock" BOOLEAN NOT NULL,
    CONSTRAINT "Keycap_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Keycap" ("id", "inStock", "layoutSupport", "manufacturerId", "material", "name", "price") SELECT "id", "inStock", "layoutSupport", "manufacturerId", "material", "name", "price" FROM "Keycap";
DROP TABLE "Keycap";
ALTER TABLE "new_Keycap" RENAME TO "Keycap";
CREATE TABLE "new_Stabilizer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "set" TEXT NOT NULL
);
INSERT INTO "new_Stabilizer" ("id", "inStock", "name", "price", "set", "type") SELECT "id", "inStock", "name", "price", "set", "type" FROM "Stabilizer";
DROP TABLE "Stabilizer";
ALTER TABLE "new_Stabilizer" RENAME TO "Stabilizer";
CREATE TABLE "new_SwitchFilms" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "inStock" BOOLEAN NOT NULL
);
INSERT INTO "new_SwitchFilms" ("id", "inStock", "name", "price") SELECT "id", "inStock", "name", "price" FROM "SwitchFilms";
DROP TABLE "SwitchFilms";
ALTER TABLE "new_SwitchFilms" RENAME TO "SwitchFilms";
CREATE TABLE "new_Lube" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "volume" INTEGER,
    "inStock" BOOLEAN NOT NULL
);
INSERT INTO "new_Lube" ("id", "inStock", "name", "price", "volume") SELECT "id", "inStock", "name", "price", "volume" FROM "Lube";
DROP TABLE "Lube";
ALTER TABLE "new_Lube" RENAME TO "Lube";
CREATE TABLE "new_Spring" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "travelDistance" INTEGER,
    "actuationForce" INTEGER,
    "bottomOut" INTEGER,
    "price" INTEGER NOT NULL,
    "inStock" BOOLEAN NOT NULL
);
INSERT INTO "new_Spring" ("actuationForce", "bottomOut", "id", "inStock", "name", "price", "travelDistance", "type") SELECT "actuationForce", "bottomOut", "id", "inStock", "name", "price", "travelDistance", "type" FROM "Spring";
DROP TABLE "Spring";
ALTER TABLE "new_Spring" RENAME TO "Spring";
CREATE TABLE "new_Switch" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "manufacturerId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "ledCompatible" BOOLEAN NOT NULL,
    "topHousing" TEXT,
    "bottomHousing" TEXT,
    "stem" TEXT,
    "inStock" BOOLEAN NOT NULL,
    "factoryLube" BOOLEAN,
    CONSTRAINT "Switch_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Switch" ("bottomHousing", "factoryLube", "id", "inStock", "ledCompatible", "manufacturerId", "name", "price", "stem", "topHousing", "type") SELECT "bottomHousing", "factoryLube", "id", "inStock", "ledCompatible", "manufacturerId", "name", "price", "stem", "topHousing", "type" FROM "Switch";
DROP TABLE "Switch";
ALTER TABLE "new_Switch" RENAME TO "Switch";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
