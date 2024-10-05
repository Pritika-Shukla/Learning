import { PrismaClient } from "@prisma/client";

// Define the type for the global prisma instance
type GlobalPrisma = {
  prisma?: PrismaClient;
};

// Augment the global namespace
declare global {
  let prisma: PrismaClient | undefined;
}

// Create a singleton instance of PrismaClient
let prisma: PrismaClient;

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!(global as GlobalPrisma).prisma) {
      (global as GlobalPrisma).prisma = new PrismaClient();
    }
    prisma = (global as GlobalPrisma).prisma!;
  }
}

export default prisma;