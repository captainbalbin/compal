-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Manufacturer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT
);
INSERT INTO "new_Manufacturer" ("id", "name", "url") SELECT "id", "name", "url" FROM "Manufacturer";
DROP TABLE "Manufacturer";
ALTER TABLE "new_Manufacturer" RENAME TO "Manufacturer";
CREATE UNIQUE INDEX "Manufacturer_name_key" ON "Manufacturer"("name");
CREATE UNIQUE INDEX "Manufacturer_url_key" ON "Manufacturer"("url");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
