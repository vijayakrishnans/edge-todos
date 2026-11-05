import { describe, expect, it } from "vitest";
import { MAX_TODO_LENGTH, parseDescription } from "@/lib/todo-input";

describe("parseDescription (apps/web/lib/todo-input.ts)", () => {
  it("trims a todo and keeps it", () => {
    expect(parseDescription("  buy milk ")).toBe("buy milk");
  });

  it("accepts exactly the limit and refuses one more", () => {
    expect(parseDescription("a".repeat(MAX_TODO_LENGTH))).toHaveLength(MAX_TODO_LENGTH);
    expect(parseDescription("a".repeat(MAX_TODO_LENGTH + 1))).toBeNull();
  });

  it("refuses what is empty or not text", () => {
    expect(parseDescription("   ")).toBeNull();
    expect(parseDescription(null)).toBeNull();
    expect(parseDescription(new File(["x"], "x.txt"))).toBeNull();
  });
});
