import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const hashedPassword = await bcrypt.hash("ChangeMe123", 10);

  await prisma.admin.upsert({
    where: { email: "rabbiyazaheer8@gmail.com" },
    update: {},
    create: {
      email: "rabbiyazaheer8@gmail.com",
      password: hashedPassword,
    },
  });

  console.log("Admin user seeded successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());