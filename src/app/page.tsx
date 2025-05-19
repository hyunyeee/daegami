import { Header } from "@/components/Header";
import { ChatArea } from "@/components/ChatArea";

export default function Home() {
  return (
    <div className="h-screen bg-beige-page overflow-y-scroll">
      <Header />
      <ChatArea />
    </div>
  );
}
