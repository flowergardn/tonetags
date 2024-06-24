import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function NewDomain(props: { oldDomain: boolean }) {
  if (!props.oldDomain) return null;

  return (
    <Alert variant="default" className="border-blue-500 mb-4 w-2/4">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Hey there,</AlertTitle>
      <AlertDescription>
        This site has moved to{" "}
        <a href="https://tonetags.xyz/">
          <b>tonetags.xyz</b>
        </a>
         ! But don't worry, everything is still the same.
      </AlertDescription>
    </Alert>
  );
}
