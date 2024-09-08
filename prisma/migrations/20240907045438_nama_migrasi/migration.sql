-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "user_password_key" ON "user"("password");
