-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'TUTOR', 'USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roles" "Role"[];
