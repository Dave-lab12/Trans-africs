/*
  Warnings:

  - You are about to drop the column `email` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `Article` table. All the data in the column will be lost.
  - Added the required column `image` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Article` DROP COLUMN `email`,
    DROP COLUMN `lastname`,
    ADD COLUMN `image` VARCHAR(191) NOT NULL;
