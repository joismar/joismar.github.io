import "jsr:@supabase/functions-js/edge-runtime.d.ts"

Deno.serve(async (req) => {
  if (req.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
  }

  const TOKEN = Deno.env.get("GITHUB_TOKEN");
  if (!TOKEN) {
      return new Response("GitHub token not configured", { status: 500 });
  }

  const githubRepo = "joismar/joismar.github.io";
  const githubEventType = "hashnode-webhook";

  try {
      const body = await req.json();

      console.log("Received webhook payload:", body);

      const githubResponse = await fetch(
          `https://api.github.com/repos/${githubRepo}/dispatches`,
          {
              method: "POST",
              headers: {
                  "Accept": "application/vnd.github+json",
                  "Authorization": `token ${TOKEN}`,
              },
              body: JSON.stringify({
                  event_type: githubEventType,
                  client_payload: {
                      wait_for_deployment: true,
                  },
              }),
          }
      );

      if (!githubResponse.ok) {
          const errorText = await githubResponse.text();
          console.error("GitHub API error:", errorText);
          return new Response("Failed to trigger GitHub action", { status: 500 });
      }

      return new Response("GitHub action triggered successfully", { status: 200 });
  } catch (error) {
      console.error("Error handling webhook:", error);
      return new Response("Internal server error", { status: 500 });
  }
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/deploy-from-hashnode' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
