import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <div className="max-w-3xl h-screen mx-auto pd:py-10">
      CONVERSE 2.0
      <div className="h-full border rounded-md">
        <div className="h-20">
          <div className="flex items-center justify-between p-5 border-b">
            <div>
              <div className="text-xl font-bold">Daily Chat</div>
              <div className="flex items-center gap-1">
                <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse" />
                <div className="text-sm text-gray-400">2 people online</div>
              </div>
            </div>
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
