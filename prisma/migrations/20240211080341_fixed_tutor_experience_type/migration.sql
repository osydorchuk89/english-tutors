-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tutor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "photo" TEXT NOT NULL
);
INSERT INTO "new_Tutor" ("about", "experience", "id", "name", "photo") SELECT "about", "experience", "id", "name", "photo" FROM "Tutor";
DROP TABLE "Tutor";
ALTER TABLE "new_Tutor" RENAME TO "Tutor";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
