-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lube" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "volume" INTEGER,
    "inStock" BOOLEAN NOT NULL,
    "manufacturerId" INTEGER,
    "storeId" INTEGER,
    CONSTRAINT "Lube_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Lube_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Lube" ("id", "inStock", "manufacturerId", "name", "price", "url", "volume") SELECT "id", "inStock", "manufacturerId", "name", "price", "url", "volume" FROM "Lube";
DROP TABLE "Lube";
ALTER TABLE "new_Lube" RENAME TO "Lube";
CREATE TABLE "new_SwitchFilm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    "manufacturerId" INTEGER,
    "storeId" INTEGER,
    CONSTRAINT "SwitchFilm_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "SwitchFilm_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_SwitchFilm" ("id", "inStock", "manufacturerId", "name", "price", "url") SELECT "id", "inStock", "manufacturerId", "name", "price", "url" FROM "SwitchFilm";
DROP TABLE "SwitchFilm";
ALTER TABLE "new_SwitchFilm" RENAME TO "SwitchFilm";
CREATE TABLE "new_Stabilizer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "set" TEXT NOT NULL,
    "manufacturerId" INTEGER,
    "storeId" INTEGER,
    CONSTRAINT "Stabilizer_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Stabilizer_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Stabilizer" ("id", "inStock", "manufacturerId", "name", "price", "set", "type", "url") SELECT "id", "inStock", "manufacturerId", "name", "price", "set", "type", "url" FROM "Stabilizer";
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
    "storeId" INTEGER,
    CONSTRAINT "Spring_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Spring_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Spring" ("actuationForce", "bottomOut", "id", "inStock", "manufacturerId", "name", "price", "travelDistance", "type", "url") SELECT "actuationForce", "bottomOut", "id", "inStock", "manufacturerId", "name", "price", "travelDistance", "type", "url" FROM "Spring";
DROP TABLE "Spring";
ALTER TABLE "new_Spring" RENAME TO "Spring";
CREATE UNIQUE INDEX "Spring_url_key" ON "Spring"("url");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
