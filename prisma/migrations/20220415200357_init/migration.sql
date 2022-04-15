-- CreateTable
CREATE TABLE "Store" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Switch" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
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

-- CreateTable
CREATE TABLE "Manufacturer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Deskmat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "storeId" INTEGER NOT NULL,
    "manufacturerId" INTEGER,
    "thickness" INTEGER,
    "price" INTEGER NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    CONSTRAINT "Deskmat_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Deskmat_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Keycap" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "manufacturerId" INTEGER,
    "material" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "layoutSupport" TEXT,
    "inStock" BOOLEAN NOT NULL,
    CONSTRAINT "Keycap_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Spring" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "travelDistance" INTEGER,
    "actuationForce" INTEGER,
    "bottomOut" INTEGER,
    "price" INTEGER NOT NULL,
    "inStock" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "switchFilms" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "inStock" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Stabilizer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "set" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Lube" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "volume" INTEGER,
    "inStock" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "_StoreToSwitch" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Store" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Switch" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_KeycapToStore" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Keycap" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Store" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_SpringToSwitch" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Spring" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Switch" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Store_id_key" ON "Store"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Store_name_key" ON "Store"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Manufacturer_name_key" ON "Manufacturer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_StoreToSwitch_AB_unique" ON "_StoreToSwitch"("A", "B");

-- CreateIndex
CREATE INDEX "_StoreToSwitch_B_index" ON "_StoreToSwitch"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_KeycapToStore_AB_unique" ON "_KeycapToStore"("A", "B");

-- CreateIndex
CREATE INDEX "_KeycapToStore_B_index" ON "_KeycapToStore"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SpringToSwitch_AB_unique" ON "_SpringToSwitch"("A", "B");

-- CreateIndex
CREATE INDEX "_SpringToSwitch_B_index" ON "_SpringToSwitch"("B");
