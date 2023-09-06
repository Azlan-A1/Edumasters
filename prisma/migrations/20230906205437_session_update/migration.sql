/*
  Warnings:

  - You are about to drop the column `title` on the `TutorSession` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `StripePayment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `TutorSession` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `status` to the `StripePayment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platform` to the `TutorSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `TutorSession` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('ZOOM', 'GOOGLE_MEET', 'MICROSOFT_TEAMS', 'SKYPE');

-- DropForeignKey
ALTER TABLE "TutorSession" DROP CONSTRAINT "TutorSession_tutorId_fkey";

-- AlterTable
ALTER TABLE "StripePayment" ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TutorSession" DROP COLUMN "title",
ADD COLUMN     "platform" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ALTER COLUMN "tutorId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "StripePayment_id_key" ON "StripePayment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TutorSession_id_key" ON "TutorSession"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- AddForeignKey
ALTER TABLE "TutorSession" ADD CONSTRAINT "TutorSession_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
