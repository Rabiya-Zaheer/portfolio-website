import { getServerSession } from "next-auth";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const session = await getServerSession();
  const totalContacts = await prisma.contact.count();
  const recentContacts = await prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-2">Dashboard</h1>
      <p className="text-gray-500 mb-8">Welcome back, {session?.user?.email}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="rounded-xl border p-6">
          <p className="text-sm text-gray-500">Total Messages</p>
          <p className="text-3xl font-bold mt-1">{totalContacts}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recent Submissions</h2>
        <Link href="/dashboard/contacts" className="text-sm text-indigo-600 hover:underline">
          View all →
        </Link>
      </div>

      <div className="rounded-xl border divide-y">
        {recentContacts.map((c) => (
          <div key={c.id} className="p-4">
            <p className="font-medium">{c.name} — {c.email}</p>
            <p className="text-sm text-gray-500 mt-1">{c.subject}</p>
          </div>
        ))}
        {recentContacts.length === 0 && (
          <p className="p-4 text-sm text-gray-500">No messages yet.</p>
        )}
      </div>
    </div>
  );
}