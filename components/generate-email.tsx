import { Mail } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Textarea } from "./ui/textarea";

export const GenerateEmail = ({
  emailContent,
  brandName,
}: {
  emailContent?: string;
  brandName: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Email</CardTitle>
        <CardDescription>
          {emailContent
            ? `Preview of your personalized email for ${brandName}`
            : "Select a model and enter a brand name to see the generated email"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {emailContent ? (
          <Textarea
            value={emailContent}
            readOnly
            className="min-h-[500px] font-mono text-sm resize-none"
            placeholder="Your generated email will appear here..."
          />
        ) : (
          <div className="min-h-[400px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
            <div className="text-center text-gray-500">
              <Mail className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">No email generated yet</p>
              <p className="text-sm">
                Fill in the brand name and select a model to get started
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
