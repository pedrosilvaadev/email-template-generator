"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { emailTemplates } from "@/lib/email-templates";
import { Header } from "@/components/header";
import { TextConfiguration } from "@/components/text-configuration";
import { GenerateEmail } from "@/components/generate-email";

export default function EmailTemplateGenerator() {
  const [brandName, setBrandName] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const generateEmail = () => {
    if (!selectedModel || !brandName.trim()) return "";

    const template = emailTemplates.find((t) => t.type === selectedModel);
    return template?.description.replace(/\[Marca\]/g, brandName.trim());
  };

  const copyToClipboard = async () => {
    const emailContent = generateEmail();
    if (!emailContent) {
      toast({
        title: "Error",
        description: "Please select a model and enter a brand name first.",
        variant: "destructive",
      });
      return;
    }

    try {
      await navigator.clipboard.writeText(emailContent);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Email content has been copied to clipboard.",
      });

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  const emailContent = generateEmail();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <Header />

        <div className="grid md:grid-cols-2 gap-6 min-h-[600px]">
          <TextConfiguration
            brandName={brandName}
            selectedModel={selectedModel}
            setBrandName={setBrandName}
            setSelectedModel={setSelectedModel}
            copyToClipboard={copyToClipboard}
            emailContent={emailContent}
            copied={copied}
          />
          <GenerateEmail emailContent={emailContent} brandName={brandName} />
        </div>
      </div>
    </div>
  );
}
