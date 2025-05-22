"use client";

import { Header } from "@/components/Header";
import { ChatArea } from "@/components/ChatArea";
import Form from "@/components/Form";
import { useTypeStore } from "../../store/type";
import { useEffect } from "react";

export default function Home() {
  const { type } = useTypeStore();

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <div
      className={`h-screen overflow-y-scroll ${type === "region" ? "bg-green-page" : "bg-beige-page"}`}
    >
      <Header />
      <ChatArea />
      <Form />
    </div>
  );
}
