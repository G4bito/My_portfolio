// Cross-origin form delivery: https://formsubmit.co/ajax-documentation
// Use the same rule for browser validation and the delivery boundary.
export const GMAIL_PATTERN = String.raw`[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*(?:\+[a-zA-Z0-9._\x2d]+)?@[gG][mM][aA][iI][lL]\.[cC][oO][mM]`;
const gmailAddress = new RegExp(`^(?:${GMAIL_PATTERN})$`);

export function isValidGmailAddress(value: unknown): value is string {
  return typeof value === "string" && value.length <= 254 && !/\s/.test(value) && gmailAddress.test(value);
}

export async function sendContactMessage(
  data: FormData,
  request: typeof fetch = fetch,
): Promise<void> {
  if (!isValidGmailAddress(data.get("email"))) {
    throw new Error("Enter a valid Gmail address, such as yourname@gmail.com.");
  }
  data.set("_captcha", "false");
  const response = await request(
    "https://formsubmit.co/ajax/zyrelgabrielmaningding@gmail.com",
    {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
      signal: AbortSignal.timeout(20000),
    },
  );
  const result: unknown = await response.json();
  if (
    !response.ok ||
    typeof result !== "object" || result === null ||
    !("success" in result) ||
    (result.success !== true && result.success !== "true") ||
    ("message" in result && typeof result.message === "string" && /activat/i.test(result.message))
  ) {
    throw new Error("The email service did not confirm your message.");
  }
}
