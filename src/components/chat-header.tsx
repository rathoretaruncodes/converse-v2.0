"use client";

import { User } from "@supabase/supabase-js";
import { createClient } from "../../utils/supabase/client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ChatHeader = ({user}:{user: User | undefined}) => {

    const router = useRouter();

    const handleLoginWithGithub = () => {
        const supabase = createClient()
        supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: location.origin + "/auth/callback",
            },
        });
    };

    const handleLogout = async () => {
        const supabase = createClient()
        await supabase.auth.signOut();
        router.refresh();
    }


    return (
        <div className="h-20">
            <div className="flex items-center justify-between p-5 border-b">
                <div>
                <div className="text-xl font-bold">Daily Chat</div>
                <div className="flex items-center gap-1">
                    <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse" />
                    <div className="text-sm text-gray-400">2 people online</div>
                </div>
                </div>
                {user?
                <Button onClick={handleLogout}>Logout</Button>
                :
                <Button onClick={handleLoginWithGithub}>Login</Button>
                }
                
                
            </div>
        </div>
    )
}

export default ChatHeader;