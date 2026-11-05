// The list is public and has no sign-in, so the server sets the limit: the
// form's own maxLength is only a courtesy to the person typing.
export const MAX_TODO_LENGTH = 200;

export function parseDescription(value: FormDataEntryValue | null): string | null {
  if (typeof value !== "string") return null;
  const description = value.trim();
  if (description.length === 0 || description.length > MAX_TODO_LENGTH) return null;
  return description;
}
