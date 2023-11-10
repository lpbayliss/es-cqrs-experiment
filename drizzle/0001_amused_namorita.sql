ALTER TABLE "events" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "snapshots" ADD COLUMN "updatedAt" timestamp DEFAULT now();