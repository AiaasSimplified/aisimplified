import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/site";

export default function SignUpPage() {
  redirect(siteConfig.playgroundUrl);
}
