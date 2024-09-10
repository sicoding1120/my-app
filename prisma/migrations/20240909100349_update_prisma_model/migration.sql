y/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('STUDENT', 'MENTOR', 'NONROLE');

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "email" TEXT NOT NULL,
    "id_credential" INTEGER NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'NONROLE'
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "kategori" TEXT[],
    "userId" INTEGER NOT NULL,
    "views" INTEGER NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id_credential" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "Kos" TEXT NOT NULL,
    "headerTitle" TEXT NOT NULL,
    "kategori" TEXT[],
    "isDiscount" BOOLEAN NOT NULL,
    "url" TEXT NOT NULL,
    "aboutClass" TEXT[],
    "isCertivicate" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "ClassDetail" (
    "material" INTEGER NOT NULL,
    "point" INTEGER NOT NULL,
    "class_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Mentor" (
    "id" TEXT NOT NULL,
    "takeOffice_at" TIMESTAMP(3) NOT NULL,
    "expired_at" TIMESTAMP(3) NOT NULL,
    "img" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "class_id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_credential_key" ON "Profile"("id_credential");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_id_key" ON "Blog"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Class_id_credential_key" ON "Class"("id_credential");

-- CreateIndex
CREATE UNIQUE INDEX "Class_url_key" ON "Class"("url");

-- CreateIndex
CREATE UNIQUE INDEX "ClassDetail_class_id_key" ON "ClassDetail"("class_id");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_id_key" ON "Mentor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_userId_key" ON "Mentor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_class_id_key" ON "Mentor"("class_id");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_id_credential_fkey" FOREIGN KEY ("id_credential") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassDetail" ADD CONSTRAINT "ClassDetail_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Class"("id_credential") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "ClassDetail"("class_id") ON DELETE RESTRICT ON UPDATE CASCADE;
