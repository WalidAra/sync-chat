/*
  Warnings:

  - You are about to drop the column `chatId` on the `Attachment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Attachment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Attachment" DROP CONSTRAINT "Attachment_chatId_fkey";

-- DropForeignKey
ALTER TABLE "Attachment" DROP CONSTRAINT "Attachment_userId_fkey";

-- AlterTable
ALTER TABLE "Attachment" DROP COLUMN "chatId",
DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "image" TEXT;
