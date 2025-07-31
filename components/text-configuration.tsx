import { emailTemplates } from "@/lib/email-templates";

import { Check, Copy } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";

interface TextConfigurationProps {
  brandName: string;
  selectedModel: string;
  setBrandName: (brandName: string) => void;
  setSelectedModel: (model: string) => void;
  copyToClipboard: () => Promise<void>;
  emailContent?: string;
  copied: boolean;
}

export const TextConfiguration = ({
  brandName,
  selectedModel,
  setBrandName,
  setSelectedModel,
  copyToClipboard,
  emailContent,
  copied,
}: TextConfigurationProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Template Configuration</CardTitle>
        <CardDescription>
          Enter the brand name and select an email template model
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="brand-name">Brand Name</Label>
          <Input
            id="brand-name"
            placeholder="Enter brand name (e.g., Nike, Apple, etc.)"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="model-select">Email Template Model</Label>
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger id="model-select">
              <SelectValue placeholder="Select a template model" />
            </SelectTrigger>
            <SelectContent>
              {emailTemplates.map((template) => (
                <SelectItem key={template.type} value={template.type}>
                  {template.type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {emailContent && (
          <Button onClick={copyToClipboard} className="w-full" size="lg">
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                Copy Email to Clipboard
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
