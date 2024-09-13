-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('STUDENT', 'MENTOR', 'NONROLE');

-- CreateEnum
CREATE TYPE "Nilai" AS ENUM ('A', 'B', 'C', 'D');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "classId" INTEGER NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id_credential" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'STUDENT',

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id_credential")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "kategori" TEXT[],
    "userId" TEXT NOT NULL,
    "views" INTEGER NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id_credential" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "isDiscount" BOOLEAN NOT NULL,
    "discountPrice" INTEGER NOT NULL,
    "difficultyLevel" TEXT NOT NULL,
    "lesson" INTEGER NOT NULL,
    "mentorixPoin" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,
    "progress" INTEGER NOT NULL,
    "authorTeams" TEXT NOT NULL,
    "aboutClass" TEXT NOT NULL,
    "StepClass" TEXT[],
    "prepareToLearn" TEXT[],
    "nilai" "Nilai" DEFAULT 'D',
    "isCertivicate" BOOLEAN NOT NULL,
    "urlCertivication" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id_credential")
);

-- CreateTable
CREATE TABLE "MateriList" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "Progress" INTEGER NOT NULL,
    "classId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Mentor" (
    "id" TEXT NOT NULL,
    "takeOffice_at" TIMESTAMP(3) NOT NULL,
    "expired_at" TIMESTAMP(3) NOT NULL,
    "img" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Mentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClassToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");

-- CreateIndex
CREATE UNIQUE INDEX "User_profileId_key" ON "User"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_credential_key" ON "Profile"("id_credential");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_id_key" ON "Blog"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Class_id_credential_key" ON "Class"("id_credential");

-- CreateIndex
CREATE UNIQUE INDEX "MateriList_id_key" ON "MateriList"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_id_key" ON "Mentor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_userId_key" ON "Mentor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_ClassToUser_AB_unique" ON "_ClassToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassToUser_B_index" ON "_ClassToUser"("B");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_id_credential_fkey" FOREIGN KEY ("id_credential") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MateriList" ADD CONSTRAINT "MateriList_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id_credential") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToUser" ADD CONSTRAINT "_ClassToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("id_credential") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToUser" ADD CONSTRAINT "_ClassToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
