/*
  Warnings:

  - You are about to drop the `SwitchFilms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SwitchFilms";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "SwitchFilm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    "manufacturerId" INTEGER,
    CONSTRAINT "SwitchFilm_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Stabilizer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "set" TEXT NOT NULL,
    "manufacturerId" INTEGER,
    CONSTRAINT "Stabilizer_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Stabilizer" ("id", "inStock", "name", "price", "set", "type", "url") SELECT "id", "inStock", "name", "price", "set", "type", "url" FROM "Stabilizer";
DROP TABLE "Stabilizer";
ALTER TABLE "new_Stabilizer" RENAME TO "Stabilizer";
CREATE TABLE "new_Spring" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "travelDistance" INTEGER,
    "actuationForce" INTEGER,
    "bottomOut" INTEGER,
    "price" INTEGER NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    "manufacturerId" INTEGER,
    CONSTRAINT "Spring_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Spring" ("actuationForce", "bottomOut", "id", "inStock", "name", "price", "travelDistance", "type", "url") SELECT "actuationForce", "bottomOut", "id", "inStock", "name", "price", "travelDistance", "type", "url" FROM "Spring";
DROP TABLE "Spring";
ALTER TABLE "new_Spring" RENAME TO "Spring";
CREATE UNIQUE INDEX "Spring_url_key" ON "Spring"("url");
CREATE TABLE "new_Lube" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "volume" INTEGER,
    "inStock" BOOLEAN NOT NULL,
    "manufacturerId" INTEGER,
    CONSTRAINT "Lube_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Lube" ("id", "inStock", "name", "price", "url", "volume") SELECT "id", "inStock", "name", "price", "url", "volume" FROM "Lube";
DROP TABLE "Lube";
ALTER TABLE "new_Lube" RENAME TO "Lube";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
