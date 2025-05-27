export function getSortedEnumValues<E extends string>(enumObj: {
  [key: string]: E;
}): E[] {
  return Object.values(enumObj as Record<string, E>).sort((a, b) =>
    a.localeCompare(b),
  );
}
