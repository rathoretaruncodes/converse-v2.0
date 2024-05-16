import ChatHeader from "@/components/chat-header";
import { createClient } from "../../utils/supabase/server";

export default async function Page() {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();


  return (
    <div className="max-w-3xl h-screen mx-auto pd:py-10">
      CONVERSE 2.0
      <div className="h-full border rounded-md">
        <ChatHeader user={data.session?.user} />
      </div>
    </div>
  );
}
