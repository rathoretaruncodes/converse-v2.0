import ChatHeader from "@/components/chat-header";

export default function Page() {
  return (
    <div className="max-w-3xl h-screen mx-auto pd:py-10">
      CONVERSE 2.0
      <div className="h-full border rounded-md">
        <ChatHeader />
      </div>
    </div>
  );
}
