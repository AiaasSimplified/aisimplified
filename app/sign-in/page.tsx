import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/site";

export default function SignInPage() {
  redirect(siteConfig.playgroundUrl);
}
