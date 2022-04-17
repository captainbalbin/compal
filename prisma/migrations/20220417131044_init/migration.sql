-- CreateTable
CREATE TABLE "Store" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "img" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "manufacturerId" INTEGER NOT NULL,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Product_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Manufacturer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT
);

-- CreateTable
CREATE TABLE "Variation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "price" REAL NOT NULL,
    "url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Switch" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "materialId" INTEGER NOT NULL,
    "variationId" INTEGER NOT NULL,
    CONSTRAINT "Switch_variationId_fkey" FOREIGN KEY ("variationId") REFERENCES "Variation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Switch_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Stabilizer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "variationId" INTEGER NOT NULL,
    CONSTRAINT "Stabilizer_variationId_fkey" FOREIGN KEY ("variationId") REFERENCES "Variation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Spring" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "variationId" INTEGER NOT NULL,
    CONSTRAINT "Spring_variationId_fkey" FOREIGN KEY ("variationId") REFERENCES "Variation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Keycap" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "colorId" INTEGER NOT NULL,
    "variationId" INTEGER NOT NULL,
    CONSTRAINT "Keycap_variationId_fkey" FOREIGN KEY ("variationId") REFERENCES "Variation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Keycap_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Weight" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "actuation" REAL NOT NULL,
    "bottomOut" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Material" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stem" TEXT NOT NULL,
    "topHousing" TEXT NOT NULL,
    "bottomHousing" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Color" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Set" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Layout" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductToStore" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Store" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ProductToVariation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Variation" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_SwitchToWeight" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Switch" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Weight" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_SpringToWeight" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Spring" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Weight" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ColorToStabilizer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Color" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Stabilizer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_SetToStabilizer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Set" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Stabilizer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Store_name_key" ON "Store"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Store_url_key" ON "Store"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Store_img_key" ON "Store"("img");

-- CreateIndex
CREATE UNIQUE INDEX "Category_type_key" ON "Category"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Manufacturer_name_key" ON "Manufacturer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Manufacturer_url_key" ON "Manufacturer"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Variation_url_key" ON "Variation"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Switch_variationId_key" ON "Switch"("variationId");

-- CreateIndex
CREATE UNIQUE INDEX "Stabilizer_variationId_key" ON "Stabilizer"("variationId");

-- CreateIndex
CREATE UNIQUE INDEX "Spring_variationId_key" ON "Spring"("variationId");

-- CreateIndex
CREATE UNIQUE INDEX "Keycap_variationId_key" ON "Keycap"("variationId");

-- CreateIndex
CREATE UNIQUE INDEX "Weight_actuation_bottomOut_key" ON "Weight"("actuation", "bottomOut");

-- CreateIndex
CREATE UNIQUE INDEX "Material_stem_topHousing_bottomHousing_key" ON "Material"("stem", "topHousing", "bottomHousing");

-- CreateIndex
CREATE UNIQUE INDEX "Color_value_key" ON "Color"("value");

-- CreateIndex
CREATE UNIQUE INDEX "Set_type_key" ON "Set"("type");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToStore_AB_unique" ON "_ProductToStore"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToStore_B_index" ON "_ProductToStore"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToVariation_AB_unique" ON "_ProductToVariation"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToVariation_B_index" ON "_ProductToVariation"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SwitchToWeight_AB_unique" ON "_SwitchToWeight"("A", "B");

-- CreateIndex
CREATE INDEX "_SwitchToWeight_B_index" ON "_SwitchToWeight"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SpringToWeight_AB_unique" ON "_SpringToWeight"("A", "B");

-- CreateIndex
CREATE INDEX "_SpringToWeight_B_index" ON "_SpringToWeight"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ColorToStabilizer_AB_unique" ON "_ColorToStabilizer"("A", "B");

-- CreateIndex
CREATE INDEX "_ColorToStabilizer_B_index" ON "_ColorToStabilizer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SetToStabilizer_AB_unique" ON "_SetToStabilizer"("A", "B");

-- CreateIndex
CREATE INDEX "_SetToStabilizer_B_index" ON "_SetToStabilizer"("B");
