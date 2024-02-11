/*
  Warnings:

  - The primary key for the `Review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tutor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Application` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL
);
INSERT INTO "new_Review" ("id", "name", "text") SELECT "id", "name", "text" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
CREATE TABLE "new_Tutor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "photo" TEXT NOT NULL
);
INSERT INTO "new_Tutor" ("about", "experience", "id", "name", "photo") SELECT "about", "experience", "id", "name", "photo" FROM "Tutor";
DROP TABLE "Tutor";
ALTER TABLE "new_Tutor" RENAME TO "Tutor";
CREATE TABLE "new_Application" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL
);
INSERT INTO "new_Application" ("id", "name", "phone") SELECT "id", "name", "phone" FROM "Application";
DROP TABLE "Application";
ALTER TABLE "new_Application" RENAME TO "Application";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
