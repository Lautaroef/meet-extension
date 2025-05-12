-- CreateEnum
CREATE TYPE "DataSourceType" AS ENUM ('NOTION', 'GOOGLE_CALENDAR', 'EVERNOTE', 'SALESFORCE', 'HUBSPOT', 'MANUAL_TEXT', 'FILE_UPLOAD');

-- CreateEnum
CREATE TYPE "FeedbackRating" AS ENUM ('HELPFUL', 'NOT_HELPFUL', 'NEUTRAL');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataSource" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "DataSourceType" NOT NULL,
    "name" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "scope" TEXT,
    "lastSyncedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DataSource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SyncedContent" (
    "id" TEXT NOT NULL,
    "dataSourceId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "contentType" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "embedding" JSONB,
    "sourceItemId" TEXT,
    "processedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SyncedContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meeting" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "title" TEXT,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3),
    "sourceCalendarEventId" TEXT,
    "platformUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Meeting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeetingParticipant" (
    "id" TEXT NOT NULL,
    "meetingId" TEXT NOT NULL,
    "userId" TEXT,
    "name" TEXT,
    "email" TEXT,
    "role" TEXT,
    "insights" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MeetingParticipant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreMeetingBrief" (
    "id" TEXT NOT NULL,
    "meetingId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sentAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PreMeetingBrief_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GemAlert" (
    "id" TEXT NOT NULL,
    "meetingId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "trigger" TEXT,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GemAlert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserFeedback" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "gemAlertId" TEXT,
    "rating" "FeedbackRating" NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserFeedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "DataSource_userId_idx" ON "DataSource"("userId");

-- CreateIndex
CREATE INDEX "SyncedContent_dataSourceId_idx" ON "SyncedContent"("dataSourceId");

-- CreateIndex
CREATE INDEX "SyncedContent_userId_idx" ON "SyncedContent"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Meeting_sourceCalendarEventId_key" ON "Meeting"("sourceCalendarEventId");

-- CreateIndex
CREATE INDEX "Meeting_ownerId_idx" ON "Meeting"("ownerId");

-- CreateIndex
CREATE INDEX "MeetingParticipant_meetingId_idx" ON "MeetingParticipant"("meetingId");

-- CreateIndex
CREATE INDEX "MeetingParticipant_userId_idx" ON "MeetingParticipant"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PreMeetingBrief_meetingId_key" ON "PreMeetingBrief"("meetingId");

-- CreateIndex
CREATE INDEX "PreMeetingBrief_userId_idx" ON "PreMeetingBrief"("userId");

-- CreateIndex
CREATE INDEX "GemAlert_meetingId_idx" ON "GemAlert"("meetingId");

-- CreateIndex
CREATE INDEX "GemAlert_userId_idx" ON "GemAlert"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserFeedback_gemAlertId_key" ON "UserFeedback"("gemAlertId");

-- CreateIndex
CREATE INDEX "UserFeedback_userId_idx" ON "UserFeedback"("userId");
