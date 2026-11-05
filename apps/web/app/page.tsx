import { TodoList } from "./todo-list";
import { Form } from "./form";
import { SITE_NAME, SOURCE_URL } from "@/lib/site";

// The list reads D1 on every request. On Vercel the page was pre-rendered
// and refreshed by revalidatePath('/') through ISR; the Worker's static-assets
// cache is read-only, so the page renders dynamically instead.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto space-y-12 px-6 py-32">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-medium">{SITE_NAME}</h1>
        <p className="text-gray-500">
          A shared todo list on Cloudflare Workers and D1. It&apos;s public, so anyone
          can add or remove items and anyone can read them. Please don&apos;t put
          anything private here.{" "}
          <a href={SOURCE_URL} className="underline">
            Source
          </a>
        </p>
      </div>

      <div className="space-y-3">
        <TodoList />
        <Form />
      </div>
    </main>
  );
}
