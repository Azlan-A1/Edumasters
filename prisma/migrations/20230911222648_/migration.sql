-- CreateEnum
CREATE TYPE "TutorSessionStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED');

-- AlterTable
ALTER TABLE "TutorSession" ADD COLUMN     "status" "TutorSessionStatus" NOT NULL DEFAULT 'PENDING';
