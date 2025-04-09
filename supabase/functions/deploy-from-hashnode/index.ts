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
  const githubEventType = "hashnode_webhook";

  try {
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
