import { createHash } from "crypto";

export function generateHash(val: string) {
  const hash = createHash("sha256");
  hash.update(val);
  return hash.digest("hex");
}
