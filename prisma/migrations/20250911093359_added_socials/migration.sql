-- AlterTable
ALTER TABLE "public"."user" ADD COLUMN     "bio" TEXT DEFAULT 'Add bio...',
ADD COLUMN     "socialLinkdinUrl" TEXT,
ADD COLUMN     "socialXUrl" TEXT;
