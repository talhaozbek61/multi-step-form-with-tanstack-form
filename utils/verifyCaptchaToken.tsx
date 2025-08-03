export async function verifyReCAPTCHA(
  recaptcha: string | null
): Promise<{ success: boolean; message?: string }> {
  const verifyURL = "https://www.google.com/recaptcha/api/siteverify";
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const res = await fetch(verifyURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey ?? "",
        response: recaptcha ?? "",
      }),
    });

    const result = await res.json();
    // console.log(result);

    if (!result.success) {
      return { success: false, message: "Recaptcha verification failed" };
    }

    return { success: true };
  } catch (err) {
    console.log("Recaptcha verification error: ", err);
    return {
      success: false,
      message: "An error occurred during Recaptcha verification",
    };
  }
}
