/*
  Warnings:

  - You are about to drop the `switchFilms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "switchFilms";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "SwitchFilms" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "inStock" BOOLEAN NOT NULL
);
